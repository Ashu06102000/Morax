import React from "react";
import { ConsoleData, GamingData } from "../../interface/interface";
import { Link } from "react-router-dom";
import gsap from "gsap";

const CardFeature = ({
  consoleData,
}: {
  consoleData: ConsoleData[] | undefined;
}) => {
  gsap.to(".gaf", {
    scale: 1,
    duration: 2,
    ease: "elastic.out(1, 0.3)",
    y: 400,
  });
  gsap.to(".gaf", {
    scale: 1,
    duration: 2,
    ease: "back.out(1.7)",
    y: 0,
  });
  return (
    <div className="w-full gaf">
      {consoleData?.map((data) => {
        const backgroundImage = `url('${data.image}')`;
        return (
          <Link
            to={`/consoles/${data.id}`}
            style={{ backgroundImage }}
            className="border border-gray-300 bg-cover bg-center bg-no-repeat rounded-lg  shadow-md flex-col flex w-full h-[80vh]"
          >
            <div className="p-20 text-center h-full flex flex-col justify-end rounded-lg  bg-[#0000002b] transition-all duration-500 ease-in-out hover:bg-[#00000059]">
              <h3 className="font-semibold font-zentry text-8xl text-blue-50">
                {data.name}
              </h3>
              <p className="text-lg text-white max-w-2xl mr-auto ml-auto">
                {data.description}
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default CardFeature;
