import BreadCrumb from "@/components/aboutHeader/aboutHeader";
import CategorieMenu from "@/components/CategorieComps/categoriemenuLayout";
import { CardsDataMenu, Service } from "@/data/categoryService/categoryData";

const OfflineCourse = {
  title:
    "Master Professional Skills with Digitechmate’s Offline Courses in Delhi",
  text: "Join Digitechmate's industry-relevant offline courses in Delhi and enhance your expertise in Full Stack Development, UI/UX Design, Digital Marketing, MERN Stack Development, Cybersecurity, Ethical Hacking, Graphic Design, Web Development, and more. Our expert-led programs provide hands-on training, practical projects, and placement support to prepare you for success in today’s competitive job market. Unlock your potential by mastering the perfect blend of creativity and technology with Digitechmate.",
};

const OfflineCategories = () => {
  return (
    <>
      <BreadCrumb data={OfflineCourse} />
      <CategorieMenu CardsDataMenu={CardsDataMenu} service={Service} />
    </>
  );
};

export default OfflineCategories;
