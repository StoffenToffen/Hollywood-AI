import Image from "next/image";

const Summary = () => {
  return (
    <section id="about">
      <div className="container">
        <div className="row about__row">
          <div className="about__text">
            <div className="about__widget">
              <span className="about__widget__title">
                The future of entertainment
              </span>
              <span className="about__widget__emoji"> ⏺ </span>
              <span className="about__widget__description">AI</span>
            </div>
            <h2 className="about__title">Say goodbye to 2 hour movies.</h2>
            <p className="about__para">
              HollywoodAI is designed to help you get high-quality summaries of
              your favourite movies instantly, without breaking a sweat. With
              our intuitive interface and powerful features, you can easily
              digest any movie in just minutes instead of hours.
            </p>
          </div>
          <figure className="about__figure">
            <Image
              width={0}
              height={0}
              sizes="100vw"
              src="/assets/summary.png"
              alt=""
              className="about__figure__img"
            />
            <figcaption className="about__figure__caption">
              <span className="about__figure__caption1">
                Search. Summarise. Repeat.
              </span>
              <span className="about__figure__caption2">Powered by AI</span>
            </figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Summary;
