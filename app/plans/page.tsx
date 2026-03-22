"use client";

import {
  createCheckoutSession,
  getCurrentUserSubscriptions,
  getProducts,
  getStripePayments,
  type Product,
} from "@invertase/firestore-stripe-payments";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import Nav from "@/components/dashboard/Nav";
import Search from "@/components/dashboard/Search";
import Accordions from "@/components/plans/accordions";
import { app } from "@/firebase";
import { useUserStore } from "@/zustand/userStore";

import "./page.css";

const Page = () => {
  const [subscription, setSubscription] = useState<Product>();
  const [isSubscribed, setIsSubscribed] = useState<string>("");
  const uid = useUserStore((state) => state.uid);
  const payments = getStripePayments(app, {
    productsCollection: "products",
    customersCollection: "customers",
  });

  const upgradeSubscription = async (priceId: string) => {
    const session = await createCheckoutSession(payments, {
      price: priceId,
      success_url: "http://localhost:3000/dashboard"
    });
    window.location.assign(session.url);
  };

  useEffect(() => {
    const getSubscriptions = async () => {
      const products = await getProducts(payments, {
        includePrices: true,
        activeOnly: true,
      });
      setSubscription(products[0]);
    };
    getSubscriptions();
  }, []);

  useEffect(() => {
    if (uid) {
      const checkIfSubscribed = async () => {
        const userSubscriptions = await getCurrentUserSubscriptions(payments, {
          status: "active",
        });
        setIsSubscribed(userSubscriptions[0].id);
      };
      checkIfSubscribed();
    }
  }, [uid]);

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
                  <span className="plans__card__price__amount">
                    {subscription.prices[0].unit_amount / 100}
                  </span>
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
                  onClick={() =>
                    upgradeSubscription("price_1TC44A2ardwz0A4KlRHWix44")
                  }
                >
                  Choose plan
                </button>
              </div>

              <div className="plans__card">
                <div className="plans__card__price">
                  <span className="plans__card__price__currency">$</span>
                  <span className="plans__card__price__amount">
                    {subscription.prices[1].unit_amount / 100}
                  </span>
                  <span className="plans__card__price__duration">Yearly</span>
                </div>

                <h3 className="plans__card__title">Premium</h3>

                <ul className="plans__card__perks">
                  <li className="plans__card__perk">
                    <Check className="plans__card__perk__icon" /> 2 Free Months
                  </li>
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
                  onClick={() =>
                    upgradeSubscription("price_1TC4AY2ardwz0A4K7Rdz9QwB")
                  }
                >
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
