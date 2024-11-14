import SimpleAccordian from "@/components/accordian/smipleAccordian";
import BodyAbout from "@/components/bodyAbout/bodyAbout";
import PartnerSlider from "@/components/brandSlider/brandslider";
import Certificate from "@/components/certificate/certificate";
import CounterHappy from "@/components/counterHappyStud/counter";
import HeroBanner from "@/components/HeroBanner/banner";
import LearnTech from "@/components/homeTech/learnTech";
import { generateMetaTags } from "@/components/metacomp/metamain";
import NotFoundContent from "@/components/notFound/notFound";
import PlacementPartner from "@/components/placementPartner/placementPartner";
import Testimonials from "@/components/testimonial/Testimonial";
import SoftwareOverview from "@/components/tools/tools";
import DigiWhy from "@/components/whychooes/whychooes";
import WhyDigitechmate from "@/components/whyDigitechmate/whyDigi";
import Price from "@/libs/price/price";
import Quotes from "@/libs/quotes/motivation";

export async function fetchdata(url) {
  try {
    const res = await import(`@/data/offline/${url}`);
    return res;
  } catch (error) {
    return null;
  }
}

export default async function Page({ params }) {
  const page_url = params.url;
  const data = await fetchdata(page_url);
  console.log("Fetched data:", data);

  if (data == null) {
    return <NotFoundContent />;
  }

  return <Normalpage data={data} />;
}

export const Normalpage = ({ data }) => {
  return (
    <>
      {data.metadata && generateMetaTags(data.metadata)}
      <HeroBanner data={data.HeroBannerData} heroimg={data.HeroImg} />
      {/* <PartnerSlider /> */}
      <LearnTech />
      <BodyAbout data={data.FrontEndDevelopment} />
      <DigiWhy />
      <Certificate data={data.certificate} />
      <SoftwareOverview
        data={data.softwareSkills}
        techname={data.SkillsText}
        techlogo={data.CourseLogo}
        responsibility={data.Skills}
      />
      <WhyDigitechmate />
      <Quotes quoteData={data.quote} />
      <Price price={data.courseDetails} summary={data.priceContents} />
      <Testimonials data={data.Testimonials} />
      <CounterHappy />
      <PlacementPartner />
      <SimpleAccordian faq={data.Faq} />
    </>
  );
};
