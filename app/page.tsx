import Image from "next/image";

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
    <div className="flex flex-col  items-center  font-sans dark:bg-white  ">
     
     
   <Hero/>

   <CallUs/>

    <ScrollTopButton/>

   <OurCore/>
   <Aboutus/>
   <Footer/>


    </div>
  );
}
