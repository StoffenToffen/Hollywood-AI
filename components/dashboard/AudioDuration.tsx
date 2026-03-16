"use client";

import { useEffect, useState } from "react";
import type { Movie } from "@/zustand/movieStore";

interface AudioDurationProps {
  audioLink: Movie["audioLink"];
}

const AudioDuration = ({ audioLink }: AudioDurationProps) => {
  const [duration, setDuration] = useState(0);

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

  useEffect(() => {
    const audio = new Audio(
      `https://advanced-internship-api-production.up.railway.app/${audioLink}`,
    );

    audio.addEventListener("loadedmetadata", () => {
      setDuration(audio.duration);
    });
  }, [audioLink]);

  return <span>{formatTime(duration)}</span>;
};

export default AudioDuration;
