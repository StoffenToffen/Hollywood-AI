"use client";

import { Check } from "lucide-react";
import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";
import Accordions from "@/components/plans/accordions";

import "./page.css"

const Page = () => {
  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        <header className="header">
          <div className="page-row">
            <h1 className="header__title">Plans</h1>

            <span className="header__subtext">
              Get unlimited access to our extensive library of movie summaries.
            </span>
          </div>
        </header>

        <section className="plans">
          <div className="page-row">
            <h2 className="plans__title">Subscription Plans:</h2>

            <div className="plans__cards">
              <div className="plans__card">
                <div className="plans__card__price">
                  <span className="plans__card__price__currency">$</span>
                  <span className="plans__card__price__amount">7.99</span>
                  <span className="plans__card__price__duration">Monthly</span>
                </div>

                <h3 className="plans__card__title">Premium</h3>

                <ul className="plans__card__perks">
                  <li className="plans__card__perk">
                    <Check className="plans__card__perk__icon" /> Access 100+
                    Summaries
                  </li>
                  <li className="plans__card__perk">
                    <Check className="plans__card__perk__icon" /> Higher Quality
                    Audio
                  </li>
                  <li className="plans__card__perk">
                    <Check className="plans__card__perk__icon" /> License For
                    Commercial Use
                  </li>
                  <li className="plans__card__perk">
                    <Check className="plans__card__perk__icon" /> 3 Supported
                    Devices
                  </li>
                </ul>

                <button
                  type="button"
                  className="plans__card__btn"
                >
                  Choose plan
                </button>
              </div>

              <div className="plans__card">
                <div className="plans__card__price">
                  <span className="plans__card__price__currency">$</span>
                  <span className="plans__card__price__amount">7.99</span>
                  <span className="plans__card__price__duration">Monthly</span>
                </div>

                <h3 className="plans__card__title">Premium</h3>

                <ul className="plans__card__perks">
                  <li className="plans__card__perk">
                    <Check className="plans__card__perk__icon" /> Access 100+
                    Summaries
                  </li>
                  <li className="plans__card__perk">
                    <Check className="plans__card__perk__icon" /> Higher Quality
                    Audio
                  </li>
                  <li className="plans__card__perk">
                    <Check className="plans__card__perk__icon" /> License For
                    Commercial Use
                  </li>
                  <li className="plans__card__perk">
                    <Check className="plans__card__perk__icon" /> 3 Supported
                    Devices
                  </li>
                </ul>

                <button type="button" className="plans__card__btn">
                  Choose plan
                </button>
              </div>
            </div>
          </div>
        </section>

        <Accordions />
      </div>
    </div>
  );
};

export default Page;
