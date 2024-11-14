import BreadCrumb from "@/components/aboutHeader/aboutHeader";
import CounterHappy from "@/components/counterHappyStud/counter";
import HomeAbout from "@/components/HomeAbout/homeAbout";
import LearnTech from "@/components/homeTech/learnTech";
import Mission from "@/components/mission/mission";
import PlacementPartner from "@/components/placementPartner/placementPartner";
import Testimonials from "@/components/testimonial/Testimonial";
import { AboutData, AboutQuote, messageObject } from "@/data/about/about";
import { fullstackFeedback } from "@/data/testimonilas/testimonials";

import Quotes from "@/libs/quotes/motivation";

const AboutDigi = () => {
  return (
    <>
      <BreadCrumb data={messageObject} />
      <HomeAbout data={AboutData} />
      <Testimonials data={fullstackFeedback} />
      {/* <Quotes quoteData={AboutQuote} /> */}
      <LearnTech />
      <Mission />
      <PlacementPartner />
    </>
  );
};

export default AboutDigi;
