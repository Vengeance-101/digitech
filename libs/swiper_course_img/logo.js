import Image from "next/image";
import PropTypes from "prop-types"; // Optional, if using PropTypes for type checking

const TechLogo = ({ logo, alt }) => {
  return (
    <div className="techSkill p-4 flex items-center justify-center bg-slate-100">
      <Image
        src={`/images/logo/${logo}`}
        width={200}
        height={100}
        alt={alt}
        title={alt}
        className="w-auto max-w-full h-auto"
        loading="lazy" // Lazy load to improve performance
        placeholder="blur" // Optionally use a blur-up placeholder
        blurDataURL={`/images/${logo}?blur=10`} // Placeholder for low-quality image preview (LQIP)
      />
    </div>
  );
};

// Optional: Add PropTypes for type checking
TechLogo.propTypes = {
  logo: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
};

export default TechLogo;
