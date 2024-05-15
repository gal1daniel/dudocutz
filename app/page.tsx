"use client"

import About from "@/components/About";
import Banner from "@/components/Banner";
import Hero from "@/components/Hero";
import PromoVideo from "@/components/PromoVideo";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Social from "@/components/Social";
import Works from "@/components/Works";

export default function Home() {
  return (
    <>
    <Hero />
    <Banner />
    <About />
    <Services />
    <Reviews />
    <Works />
    <Social />
    <PromoVideo />
    </>
  );
}
