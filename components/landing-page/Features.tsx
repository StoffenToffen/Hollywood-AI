import {
  ChartNoAxesGantt,
  HandHeart,
  Pencil,
  PlayCircle,
  Shield,
  Smartphone,
} from "lucide-react";

const Features = () => {
  return (
    <section id="features">
      <div className="container">
        <div className="row features__row">
          <h2 className="features__title">The future of AI.</h2>
          <p className="features__para">
            HollywoodAI is designed to help you enjoy high-quality summaries
            instantly, without breaking a sweat.
          </p>
          <div className="features__list">
            <div className="feature">
              <div className="feature__iconWrapper">
                <Pencil className="feature__icon" />
              </div>
              <div className="feature__text">
                <h4 className="feature__text__title">AI Generated Summaries</h4>
                <p className="feature__text__para">
                  Save time with summaries of the world's best movies.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature__iconWrapper">
                <PlayCircle className="feature__icon" />
              </div>
              <div className="feature__text">
                <h4 className="feature__text__title">Read or Listen</h4>
                <p className="feature__text__para">
                  Switch between reading and listening modes seamlessly.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature__iconWrapper">
                <ChartNoAxesGantt className="feature__icon" />
              </div>
              <div className="feature__text">
                <h4 className="feature__text__title">Find Your Next Flick</h4>
                <p className="feature__text__para">
                  Explore our movie lists and personalized recommendations.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature__iconWrapper">
                <Smartphone className="feature__icon" />
              </div>
              <div className="feature__text">
                <h4 className="feature__text__title">Multi Platform Access</h4>
                <p className="feature__text__para">
                  Enjoy your favourite movies on any device.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature__iconWrapper">
                <Shield className="feature__icon" />
              </div>
              <div className="feature__text">
                <h4 className="feature__text__title">Payment Gateways</h4>
                <p className="feature__text__para">
                  We securely process all card payments.
                </p>
              </div>
            </div>
            <div className="feature">
              <div className="feature__iconWrapper">
                <HandHeart className="feature__icon" />
              </div>
              <div className="feature__text">
                <h4 className="feature__text__title">Eco-Friendly Option</h4>
                <p className="feature__text__para">
                  HollywoodAI donates 10% of profits to charities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;
