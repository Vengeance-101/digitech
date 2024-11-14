import Image from "next/image";

const SingleServices = ({ data }) => {
  const { id, icon, title, text } = data;

  return (
    <>
      <div className="services-style-one flex gap-6">
        <i>
          <Image
            src={icon}
            alt="digitechmate icons"
            className="max-w-16"
            width={65}
            height={65}
          />
        </i>

        <div className="digiWhycontent">
          <h4 className="pb-2">{title}</h4>
          <p>{text}</p>
        </div>
      </div>
    </>
  );
};

export default SingleServices;
