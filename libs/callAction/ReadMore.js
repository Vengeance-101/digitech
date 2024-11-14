import Image from "next/image";
import Link from "next/link";

// line both hover
const ReadMore = ({ title, link }) => {
  return (
    <div className="btn-box">
      <div className="btn-one">
        <Link className="thm-btn" href={`${link}`}>
          <span className="txt">{title}</span>
        </Link>
      </div>
    </div>
  );
};
// center hover
export const HoverCenter = ({ title, link }) => {
  return (
    <div className="new-button text-center">
      <Link legacyBehavior href={`${link}`}>
        {title}
      </Link>
    </div>
  );
};

// slide hover

export const HoverSlide = ({ title, link }) => {
  return (
    <div className="homeDigiSlider flex items-center justify-center">
      <Link legacyBehavior href={`${link}`} className="flex gap-5">
        {title}
      </Link>
    </div>
  );
};

// const ReadMore = ({ title }) => {
//   return (
//     <div className="left-info ">
//       <Link
//         className="btn-animation button-pulse dark"
//         href={`/project-details/`}
//       >
//         <i>
//           <FaLongArrowAltRight />
//         </i>
//         <span className={title ? "text-white" : "default"}>{title}</span>
//       </Link>
//     </div>
//   );
// };

export default ReadMore;
