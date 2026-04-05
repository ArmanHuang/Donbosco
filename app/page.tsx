import Image from "next/image";
import Header from "./header";
import Landingpage from "./images/landingpage.png"
import Hero from "../components/sections/hero"
import About from '../components/sections/about'
import NewsSection from "@/components/sections/newsSection";
import DonboscoImage1 from "../assets/images/availableCourse.png"
import StatsNews from '@/components/sections/statsNews'
import OurNetwork from '@/components/sections/ourNetwork'
import NetworkPage from "@/components/sections/network";
import Footer from '@/components/sections/footer'

const statsData: StatsItem[] = [
  { label: "Students",image:"/studentsLogo.png" ,value: 13944 },
  { label: "Graduates",image:"/graduatesLogo.png" , value: 6350 },
  { label: "Centers",image:"/centersLogo.png" , value: 36 },
  { label: "Programs",image:"/programLogo.png" , value: 226 },
  { label: "Partners",image:"/partnershipLogo.png" , value: 1710 },
];



export default function Home() {
  return (
    <div>
       <Header></Header>
       <Hero></Hero>
       <About></About>
       <NewsSection></NewsSection>
       <StatsNews data={statsData}/>
       <OurNetwork></OurNetwork>
       <NetworkPage></NetworkPage>
       <Footer></Footer>




      
    </div>
  );
}
