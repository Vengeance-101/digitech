import shape39 from "@/images/shape/39.png";
import Image from "next/image";
import { HappyStund } from "@/data/happyStuddent/happyStu";
import InsideHappy from "./inside";

const CounterHappy = () => {
  return (
    <>
      <div
        className="happyStud bg-[#f7f7f7] default-padding-bottom"
        style={{
          backgroundImage: `url(/images/shape/41.png)`,
        }}
      >
        <div className="container mx-auto">
          <div className="shape-animated-up-down">
            <Image src={shape39} alt="Image Not Found" />
          </div>
          <div className=" pt-0 pb-10">
            <div className="text-center ">
              <div className="flex flex-wrap justify-around">
                {HappyStund?.map((fact) => (
                  <div className="w-1/4" key={fact.id}>
                    <InsideHappy fact={fact} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default CounterHappy;
