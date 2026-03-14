import { Pause, Play, RotateCcw, RotateCw } from "lucide-react";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { Movie } from "@/zustand/movieStore";

interface AudioPlayerProps {
  movie: Movie;
}

const AudioPlayer = ({ movie }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeProgress, setTimeProgress] = useState(0);
  const [duration, setDuration] = useState(0);

  const audioRef = useRef<HTMLAudioElement>(null);
  const playAnimationRef = useRef<number | null>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);

  const onLoadedMetadata = () => {
    const seconds = audioRef.current?.duration;

    if (seconds) {
      setDuration(seconds);

      if (progressBarRef.current) {
        progressBarRef.current.max = seconds.toString();
      }
    }
  };

  const formatTime = (time: number | undefined): string => {
    if (time) {
      const minutes = Math.floor(time / 60)
        .toString()
        .padStart(2, "0");
      const seconds = Math.floor(time % 60)
        .toString()
        .padStart(2, "0");

      return `${minutes}:${seconds}`;
    }

    return "00:00";
  };

  const skipProgress = (time: number) => {
    if (audioRef.current) {
      audioRef.current.currentTime += time;
      updateProgress();
    }
  };

  const handleProgressChange = () => {
    if (audioRef.current && progressBarRef.current) {
      const newTime = Number(progressBarRef.current.value);
      audioRef.current.currentTime = newTime;
      setTimeProgress(newTime);

      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(newTime / duration) * 100}%`,
      );
    }
  };

  const updateProgress = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const currentTime = audioRef.current.currentTime;
      setTimeProgress(currentTime);
      progressBarRef.current.value = currentTime.toString();
      progressBarRef.current.style.setProperty(
        "--range-progress",
        `${(currentTime / duration) * 100}%`,
      );
    }
  }, [duration]);

  const startProgress = useCallback(() => {
    if (audioRef.current && progressBarRef.current && duration) {
      const animate = () => {
        updateProgress();
        playAnimationRef.current = requestAnimationFrame(animate);
      };
      playAnimationRef.current = requestAnimationFrame(animate);
    }
  }, [updateProgress, duration]);

  useEffect(() => {
    if (isPlaying) {
      audioRef.current?.play();
      startProgress();
    } else {
      audioRef.current?.pause();

      if (playAnimationRef.current) {
        cancelAnimationFrame(playAnimationRef.current);
        playAnimationRef.current = null;
      }
      updateProgress();
    }

    return () => {
      if (playAnimationRef.current) {
        cancelAnimationFrame(playAnimationRef.current);
      }
    };
  }, [isPlaying, startProgress, updateProgress]);

  return (
    <div className="player">
      <div className="page-row player__row">
        <div className="player__info">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="player__info__poster"
            src={movie.imageLink}
            alt={movie.title}
          />

          <div>
            <p className="player__info__title">{movie.title}</p>
            <p className="player__info__director">{movie.director}</p>
          </div>
        </div>

        <div className="player__controls">
          {/** biome-ignore lint/a11y/useMediaCaption: <> */}
          <audio
            src={`https://advanced-internship-api-production.up.railway.app/${movie.audioLink}`}
            ref={audioRef}
            onLoadedMetadata={onLoadedMetadata}
          />

          <button
            type="button"
            className="player__controls__skip"
            onClick={() => {
              skipProgress(-10);
            }}
          >
            <RotateCcw />
            <span className="player__controls__skip__text">10</span>
          </button>

          <button
            type="button"
            className="player__controls__play"
            onClick={() => setIsPlaying((prev) => !prev)}
          >
            {isPlaying ? (
              <Pause size={20} fill="currentColor" />
            ) : (
              <Play size={20} fill="currentColor" />
            )}
          </button>

          <button
            type="button"
            className="player__controls__skip"
            onClick={() => {
              skipProgress(10);
            }}
          >
            <RotateCw />
            <span className="player__controls__skip__text">10</span>
          </button>
        </div>

        <div className="progress-bar">
          <span>{formatTime(timeProgress)}</span>

          <input
            className="progress-bar__slider"
            type="range"
            ref={progressBarRef}
            defaultValue={0}
            onChange={handleProgressChange}
          />

          <span>{formatTime(duration)}</span>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;
