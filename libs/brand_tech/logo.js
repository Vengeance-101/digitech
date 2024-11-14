import Image from "next/image";
const TechLogo = ({ logo, alt }) => {
  return (
    <>
      <Image
        src={`/images/sponsor/${logo}`}
        width={200}
        height={100}
        alt={alt}
      />
    </>
  );
};

export default TechLogo;
