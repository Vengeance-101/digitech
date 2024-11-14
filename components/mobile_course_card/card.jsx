import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";

const Card = () => {
  return (
    <section className="bg-slate-200 py-5">
      <div className="container mx-auto px-[4%]">
        <div className="card flex bg-white px-[4%] rounded-lg  py-9 max-md:flex-col-reverse">
          <div>
            <div className="content ">
              <h2 className="text-[2rem] mb-3">Team Augmentation</h2>
              <p className="mb-3">
                We provide engineers or teams tailored to your project, ensuring
                skill and compatibility with your goals and culture. They will
                collaborate with you closely, infusing fresh energy and ideas.
              </p>
              <ul className="flex gap-6 mb-6">
                <li className="bg-slate-300 px-[2%] py-[.5%] rounded-md">
                  cultural fit
                </li>
                <li className="bg-slate-300 px-[2%] py-[.5%] rounded-md">
                  cultural fit
                </li>
                <li className="bg-slate-300 px-[2%] py-[.5%] rounded-md">
                  cultural fit
                </li>
              </ul>
              <div className="btn">
                <button className="bg-black text-white px-[2%] py-[1%] rounded-md flex items-center gap-4 text-sm ">
                  Let s Chat <GoArrowUpRight />
                </button>
              </div>
            </div>
          </div>
          <div className="icon flex md:items-center">
            <Image
              src="/card/s-3.svg"
              alt="Description of the image"
              width={1}
              height={1}
              className="w-[300px] max-md:w-[132px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Card;
