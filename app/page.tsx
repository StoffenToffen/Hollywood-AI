import Features from "@/components/landing-page/Features";
import Footer from "@/components/landing-page/Footer";
import Header from "@/components/landing-page/Header";
import Nav from "@/components/landing-page/Nav";
import Steps from "@/components/landing-page/Steps";
import Summary from "@/components/landing-page/Summary";
import Testimonials from "@/components/landing-page/Testimonials";
import ForgotPassword from "@/components/modals/ForgotPassword";
import LoginSignup from "@/components/modals/LoginSignup";

import "./page.css";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Features />
      <Summary />
      <Steps />
      <Testimonials />
      <Footer />

      <LoginSignup />
      <ForgotPassword />
    </>
  );
}
