import BreadCrumb from "@/components/aboutHeader/aboutHeader";
import CategorieMenu from "@/components/CategorieComps/categoriemenuLayout";
import { CardsDataMenu, Service } from "@/data/categoryService/categoryData";

const OnlineCourse = {
  title: "Master Professional Skills with Digitechmate’s Online Courses",
  text: "Enroll in Digitechmate's industry-relevant online courses and enhance your expertise in Full Stack Development, UI/UX Design, Digital Marketing, MERN Stack Development, Cybersecurity, Ethical Hacking, Graphic Design, Web Development, and more. Our expert-led programs offer flexible learning, hands-on projects, and placement support, empowering you to succeed in today’s competitive job market. Unlock your potential by mastering the perfect blend of creativity and technology with Digitechmate from the comfort of your home.",
};

const OnlineCategories = () => {
  return (
    <>
      <BreadCrumb data={OnlineCourse} />
      <CategorieMenu CardsDataMenu={CardsDataMenu} service={Service} />
    </>
  );
};

export default OnlineCategories;
