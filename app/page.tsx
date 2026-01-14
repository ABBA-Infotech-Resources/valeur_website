import Image from "next/image";

// Meta Tags
const MetaTags = () => (
  <>
    <title>Home | Valeur Global Connect - Your Destination for Global Growth and Opportunities</title>
    <meta name="description" content="Explore global business opportunities, trade deals, and resources with Valeur." />
    <meta name="keywords" content="global growth, trade deals, business resources, international business, Valeur Global Connect" />
    <meta name="author" content="Valeur Team" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />

    {/* Open Graph Tags */}
    <meta property="og:title" content="Home | Valeur - Your Destination for Global Growth and Opportunities" />
    <meta property="og:description" content="Explore global business opportunities, trade deals, and resources with Valeur." />
    <meta property="og:image" content="/images/valeur_logo.png" />
    <meta property="og:url" content="https://www.valeurglobal.com" />
  </>
);

import Navbar from "@/components/sections/Navbar";
import Hero from "@/components/sections/Hero";
import OurCore from "@/components/sections/OurCore";
import Aboutus from "@/components/sections/Aboutus";
import Market from "@/components/sections/Market";
import OurService from "@/components/sections/OurService";
import ReadyToExpand from "@/components/sections/ReadyToExpand";
import Resources from "@/components/sections/Resources";
import Deals from "@/components/sections/Deals";
import Explore from "@/components/sections/Explore";
import GetStarted from "@/components/sections/GetStarted";
import Footer from "@/components/sections/Footer";
import ScrollTopButton from '@/components/ui/ScrollTopButton'
import CallUs from "@/components/ui/CallUs";

export default function Home() {
  return (
    <div className="flex flex-col items-center font-sans dark:bg-white w-screen">
      <MetaTags />
      
      <Navbar />
      <Hero />
      <CallUs />

      <ScrollTopButton />

      <OurCore />
      <Aboutus />
      <Footer />
    </div>
  );
}