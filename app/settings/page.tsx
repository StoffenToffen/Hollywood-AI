"use client";

import {
  getCurrentUserSubscriptions,
  getProducts,
  getStripePayments,
  type Product,
  type Subscription,
} from "@invertase/firestore-stripe-payments";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Nav from "@/components/global/Nav";
import Search from "@/components/global/Search";
import { app } from "@/firebase";
import { useModalStore } from "@/zustand/modalStore";
import { useUserStore } from "@/zustand/userStore";

import "./page.css";
import SettingsSkeleton from "@/components/loading-states/SettingsSkeleton";

const payments = getStripePayments(app, {
  productsCollection: "products",
  customersCollection: "customers",
});

const Page = () => {
  const [subscriptionInfo, setSubscriptionInfo] = useState<Subscription>();
  const [subscription, setSubscription] = useState<Product>();
  const [subscriptionPrice, setSubscriptionPrice] = useState<number | null>(null);

  const toggleLoginModal = useModalStore((state) => state.toggleLoginModal);
  const email = useUserStore((state) => state.email);
  const isSubscribed = useUserStore((state) => state.isSubscribed);
  const userFetched = useUserStore((state) => state.userFetched);
  const subscribedFetched = useUserStore((state) => state.subscribedFetched);

  useEffect(() => {
    (async () => {
      if (email && isSubscribed && subscription) {
        const userSubscriptions = await getCurrentUserSubscriptions(payments, {
          status: "active",
        });

        setSubscriptionInfo(userSubscriptions[0]);

        if (userSubscriptions.length) {
          const price = subscription?.prices.find(
            (price) => price.id === userSubscriptions[0].price,
          );

          setSubscriptionPrice(price?.unit_amount ?? null);
        }
      }
    })();
  }, [email, isSubscribed, subscription]);

  useEffect(() => {
    (async () => {
      try {
        const products = await getProducts(payments, {
          includePrices: true,
          activeOnly: true,
        });
        setSubscription(products[0]);
      } catch (err) {
        console.error(`Failed to load subscription plans: ${err}`);
      }
    })();
  }, []);

  return (
    <div className="page-wrapper">
      <Nav />

      <div className="page-content">
        <Search />

        <div className="page-row">
          <header className="header">
            <h1 className="header__title">Settings</h1>
          </header>
        </div>

        <section className="settings">
          <div className="page-row">
            {!userFetched || !subscribedFetched ? (
              <SettingsSkeleton />
            ) : !email ? (
              <div className="settings__row">
                <Image
                  width={0}
                  height={0}
                  sizes="100vw"
                  src="/assets/login.webp"
                  alt="person in front of a computer"
                  className="settings__img"
                />

                <span className="settings__text">
                  Sign in to see your account settings
                </span>

                <button
                  type="button"
                  className="settings__btn"
                  onClick={toggleLoginModal}
                >
                  Login
                </button>
              </div>
            ) : (
              <>
                <div className="settings__info">
                  <h2 className="settings__info__title">
                    Your Subscription Plan
                  </h2>
                  {isSubscribed ? (
                    <div className="settings__info__subscription">
                      <span className="settings__info__text">
                        <strong>Tier: </strong>Premium
                      </span>

                      <span className="settings__info__text">
                        <strong>Next Charge: </strong>
                        <time dateTime={subscriptionInfo?.current_period_end}>
                          {subscriptionInfo
                            ? new Date(
                                subscriptionInfo.current_period_end,
                              ).toLocaleDateString("en-US", {
                                weekday: "short",
                                year: "numeric",
                                month: "short",
                                day: "numeric",
                              })
                            : "---"}
                        </time>
                      </span>

                      <span className="settings__info__text">
                        <strong>Charge Amount: </strong>$
                        {subscriptionPrice !== null
                          ? (subscriptionPrice / 100).toFixed(2)
                          : "---"}
                      </span>

                      <Link
                        href="https://billing.stripe.com/p/login/test_6oU7sE6s16BebkLcvNb3q00"
                        className="settings__info__link"
                      >
                        Manage Subscription
                      </Link>
                    </div>
                  ) : (
                    <>
                      <span className="settings__info__text">Basic</span>

                      <Link href="../plans" className="settings__info__link">
                        Upgrade
                        <Image
                          width={0}
                          height={0}
                          sizes="100vw"
                          src="/assets/bolt.svg"
                          alt="lightning bolt"
                          className="settings__info__btn__icon"
                        />
                      </Link>
                    </>
                  )}
                </div>

                <div className="settings__info">
                  <h2 className="settings__info__title">Email</h2>
                  <span className="settings__info__text">{email}</span>
                </div>
              </>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
