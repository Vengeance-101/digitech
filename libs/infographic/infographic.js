import Image from "next/image";

const Infographic = () => {
  return (
    <div className="process-extra-area style-two">
      <div className="container mx-auto">
        <div className="flex justify-center process-bg">
          <div className="w-1/3">
            <div className="process-single-box2">
              <div className="process-icon-thumb">
                <Image src="/bg/a.png" alt="icon" width={72} height={72} />
              </div>
              <div className="process-title">
                <h3>Idea Generate</h3>
                <p>
                  Collaboratively initiate strategic ex formulate based
                  internal.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="process-single-box2 responsive">
              <div className="process-icon-thumb">
                <Image src="/bg/b.png" alt="icon" width={72} height={72} />
              </div>
              <div className="process-title">
                <h3> System Design </h3>
                <p>
                  Collaboratively initiate strategic ex formulate based
                  internal.
                </p>
              </div>
            </div>
          </div>
          <div className="w-1/3">
            <div className="process-single-box2 upper">
              <div className="process-icon-thumb">
                <Image src="/bg/c.png" alt="icon" width={72} height={72} />
              </div>
              <div className="process-title">
                <h3> Report Analysis </h3>
                <p>
                  Collaboratively initiate strategic ex formulate based
                  internal.
                </p>
              </div>
            </div>
          </div>
          <div className="process-shape">
            <div className="process-shape-thumb3 bounce-animate3">
              <Image
                src="/bg/all-shape2.png"
                alt="icon"
                width={272}
                height={272}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Infographic;
