import Image from "next/image";
const TechLogo = ({ logo, alt }) => {
  return (
    <Image
      src={`/images/${logo}`}
      width={150}
      height={100}
      alt={alt}
      className="grayscale"
      loading="lazy" // Lazy load to improve performance
      placeholder="blur" // Optionally use a blur-up placeholder
      blurDataURL={`/images/${logo}?blur=10`} // Placeholder for low-quality image preview (LQIP)
    />
  );
};

export default TechLogo;
