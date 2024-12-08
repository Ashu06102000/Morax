import React, { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchGameById } from "../../db/db";

import { Button } from "../genericComponents/Button";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "../genericComponents/AnimatedTile";
import OnScrollUpCard from "../genericComponents/OnScrollUpCard";
import { gameDetails } from "../../interface/interface";

gsap.registerPlugin(ScrollTrigger);
const GameDetailpage = () => {
  const { id } = useParams<{ id: string }>();
  const [gameDetail, setGameDetail] = useState<gameDetails>();

  useEffect(() => {
    const fetchDetails = async () => {
      if (id) {
        try {
          const response = await fetchGameById(id);
          console.log(response, "successhik");
          setGameDetail(response);
        } catch (error) {
          console.error("Error fetching game details:", error);
        }
      }
    };

    fetchDetails();
  }, [id]);
  const btnRef = useRef(null);
  useEffect(() => {
    gsap.set(btnRef.current, {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  }, []);
  const onMouseEnter = () => {
    gsap.to(btnRef.current, {
      clipPath: "polygon(20% 0%, 82% 12%, 100% 85%, 0% 100%)",
    });
  };
  const onMouseLeave = () => {
    gsap.to(btnRef.current, {
      ease: "power2.out",
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  };
  const { minimum, recommended } = gameDetail?.requirements || {};

  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
    clipAnimation.to(".about-image", {
      duration: 1,
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
    });
  });
  const miniRef = useRef<HTMLDivElement>(null);
  const supPlatRef = useRef<HTMLDivElement>(null);
  const recRef = useRef<HTMLDivElement>(null);
  const catRef = useRef<HTMLDivElement>(null);
  return (
    <div className="py-40 bg-no-repeat bg-black relative bg-cover w-full">
      <div className="h-full justify-between rounded-lg max-w-screen-2xl mx-auto flex flex-col gap-20">
        <div className="flex flex-col gap-4">
          <h2 className="font-zentry text-blue-50 text-[8rem]">
            {gameDetail?.name}
          </h2>
          <p className="text-white text-xl font-semibold font-robert-regular max-w-[30%]">
            {gameDetail?.description}
          </p>
        </div>

        <div className="flex gap-20 flex-col justify-between">
          <div className="h-dvh" id="clip">
            <div className="mask-clip-path absolute left-1/2 top-0 z-20 h-[60vh] w-96 origin-center -translate-x-1/2 overflow-hidden rounded-3xl md:w-[30vw]">
              <img
                className="absolute left-0 top-0 size-full object-cover"
                src={gameDetail?.image}
                alt={`Image of ${gameDetail?.name}`}
              />
            </div>
          </div>
          <div className="flex">
            <AnimatedTitle title={"specitication"} containerClass="" />
          </div>

          <div className="flex flex-col gap-8 justify-center items-center">
            <div className="flex gap-8 max-w-4xl">
              <div className="flex flex-col gap-10 items-end">
                <OnScrollUpCard containerRef={supPlatRef} style={""}>
                  <div
                    className="flex flex-col gap-10 h-fit bg-black border border-gray-700 rounded-lg px-4 py-6 max-w-xs
              "
                  >
                    <h4 className="special-font text-white font-semibold text-4xl uppercase">
                      Supported platform
                    </h4>
                    <div className="flex flex-col gap-[2px] items-end">
                      {gameDetail?.devices.map((device: any) => (
                        <span className="font-general text-xs text-blue-50">
                          {device},
                        </span>
                      ))}
                    </div>
                  </div>
                </OnScrollUpCard>
                <OnScrollUpCard
                  containerRef={recRef}
                  style={"border bg-white rounded-lg p-4 gap-10 flex flex-col "}
                >
                  <h4 className="special-font text-black font-semibold text-4xl uppercase">
                    Recommended System Requirements
                  </h4>
                  <ul className="text-white mt-2 flex flex-col gap-2">
                    {recommended ? (
                      Object.entries(recommended).map(([key, value]) => (
                        <li
                          key={key}
                          className="special-font text-base text-black uppercase"
                        >
                          <strong className=" text-black">
                            {key.replace(/_/g, " ").toUpperCase()}:
                          </strong>{" "}
                          {value as string}
                        </li>
                      ))
                    ) : (
                      <li>No recommended requirements available.</li>
                    )}
                  </ul>
                </OnScrollUpCard>
              </div>
              <div className="flex flex-col gap-8">
                <OnScrollUpCard
                  containerRef={miniRef}
                  style={"border bg-white rounded-lg p-4 gap-10 flex flex-col "}
                >
                  <h4 className="special-font text-black  text-4xl font-semibold uppercase">
                    Minimum System Requirements
                  </h4>
                  <ul className="text-white mt-2 flex flex-col gap-2">
                    {minimum ? (
                      Object.entries(minimum).map(([key, value]) => (
                        <li
                          key={key}
                          className="special-font text-base text-black uppercase"
                        >
                          <strong className=" text-black">
                            {key.replace(/_/g, " ").toUpperCase()}:
                          </strong>{" "}
                          {value as string}
                        </li>
                      ))
                    ) : (
                      <li>No minimum requirements available.</li>
                    )}
                  </ul>
                </OnScrollUpCard>
                <OnScrollUpCard containerRef={catRef} style={""}>
                  <div
                    className="flex flex-col gap-10 h-fit bg-yellow-300 border border-gray-700 rounded-lg px-4 py-6 max-w-xs w-fit
              "
                  >
                    <h4 className="special-font text-black font-semibold text-4xl uppercase">
                      Category
                    </h4>
                    <div className="flex flex-col gap-[2px] items-end">
                      {gameDetail?.category.map((cat) => {
                        return (
                          <span
                            key={cat}
                            className="font-general text-xs text-black"
                          >
                            {cat},
                          </span>
                        );
                      })}
                    </div>
                  </div>
                </OnScrollUpCard>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fixed bottom-10 left-2/4 flex gap-4 transform -translate-x-1/2 bg-white rounded-lg  p-2 items-center">
        <span className=" font-general text-black text-sm font-semibold">
          Price: ${gameDetail?.price}
        </span>
        <Button
          title=" Buy Now"
          containerClass="bg-black text-white"
          onMouseEnter={onMouseEnter}
          btnRef={btnRef}
          onMouseLeave={onMouseLeave}
          btnAudio={true}
          link="/products"
        />
      </div>
    </div>
  );
};

export default GameDetailpage;
