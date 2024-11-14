"use client";
import { useEffect } from "react";
import { BsRocket } from "react-icons/bs";
import { ScrollToTop } from "react-simple-scroll-up";

const Dependency = () => {
  useEffect(() => {
    {
      const WOW = require("wowjs/dist/wow.js");
      window.wow = new WOW.WOW({
        live: false,
      });

      window.wow.init();
    }
  }, []);

  return (
    <>
      <ScrollToTop
        symbol={
          <i>
            <BsRocket />
          </i>
        }
        style={{ zIndex: "9999" }}
        symbolSize={99}
      />
    </>
  );
};

export default Dependency;
