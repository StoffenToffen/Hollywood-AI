import { Plus } from "lucide-react";
import { useState } from "react";

const Accordions = () => {
  const [expanded, setExpanded] = useState<string | false>(false);

  return (
    <section className="faq">
      <div className="page-row faq__row">
        <button
          type="button"
          className="faq__accordion"
          aria-expanded={expanded === "panel1"}
          aria-controls="panel1-content"
          onClick={() => {
            setExpanded(expanded === "panel1" ? false : "panel1");
          }}
        >
          <h3 className="faq__accordion__title">
            What is Hollywood AI?
            <Plus
              className={`faq__accordion__title__icon ${expanded === "panel1" ? "rotated" : ""}`}
            />
          </h3>

          <div
            className={`faq__accordion__text__wrapper ${expanded === "panel1" ? "expanded" : ""}`}
            id="panel1-content"
          >
            <p className="faq__accordion__text">
              HollywoodAI is designed to help you get high-quality summaries of
              your favourite movies instantly, without breaking a sweat. With
              our intuitive interface and powerful features, you can easily
              digest any movie in just minutes instead of hours.
            </p>
          </div>
        </button>

        <button
          type="button"
          className="faq__accordion"
          aria-expanded={expanded === "panel2"}
          aria-controls="panel2-content"
          onClick={() => {
            setExpanded(expanded === "panel2" ? false : "panel2");
          }}
        >
          <h3 className="faq__accordion__title">
            How much does Hollywood AI cost?
            <Plus
              className={`faq__accordion__title__icon ${expanded === "panel2" ? "rotated" : ""}`}
            />
          </h3>

          <div
            className={`faq__accordion__text__wrapper ${expanded === "panel2" ? "expanded" : ""}`}
            id="panel2-content"
          >
            <p className="faq__accordion__text">
              Get summaries of your favourite movies on your smartphone, tablet
              or laptop, all for one fixed monthly or yearly fee. Plans range
              from $7.99 per month to $79.00 per year. No extra costs, no
              contracts.
            </p>
          </div>
        </button>

        <button
          type="button"
          className="faq__accordion"
          aria-expanded={expanded === "panel3"}
          aria-controls="panel3-content"
          onClick={() => {
            setExpanded(expanded === "panel3" ? false : "panel3");
          }}
        >
          <h3 className="faq__accordion__title">
            What can I watch on Hollywood AI?
            <Plus
              className={`faq__accordion__title__icon ${expanded === "panel3" ? "rotated" : ""}`}
            />
          </h3>

          <div
            className={`faq__accordion__text__wrapper ${expanded === "panel3" ? "expanded" : ""}`}
            id="panel3-content"
          >
            <p className="faq__accordion__text">
              Hollywood AI has an extensive library of feature films. Watch as
              much as you want, at any time that you want.
            </p>
          </div>
        </button>
      </div>
    </section>
  );
};

export default Accordions;
