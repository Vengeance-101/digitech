import DigiWhy from "@/components/whychooes/whychooes";
import Slider from "@/components/homeSlider/slider";
import HomeAbout from "@/components/HomeAbout/homeAbout";
import { HomeAboutData } from "@/data/home/home";
import LearnTech from "@/components/homeTech/learnTech";
import DigiServiceMain from "@/components/homeService/DigiServiceMain";
import Testimonials from "@/components/testimonial/Testimonial";
import PlacementPartner from "@/components/placementPartner/placementPartner";
import CounterHappy from "@/components/counterHappyStud/counter";
import Card from "@/components/mobile_course_card/card";
import { fullstackFeedback } from "@/data/testimonilas/testimonials";

export default function Home() {
  return (
    <>
      <Slider />
      <LearnTech />
      <HomeAbout data={HomeAboutData} />
      <DigiServiceMain />
      <Testimonials data={fullstackFeedback} />
      <CounterHappy />
      <DigiWhy />
      <PlacementPartner />
    </>
  );
}
