import { IoMdCheckmarkCircleOutline } from "react-icons/io";

const SkillsCover = ({ data }) => {
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i} className="flex gap-4">
          <IoMdCheckmarkCircleOutline />
          <span>{item.skill}</span>
        </li>
      ))}
    </ul>
  );
};

export default SkillsCover;
