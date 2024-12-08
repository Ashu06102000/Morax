import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const OnScrollUpCard = ({
  children,
  containerRef,
  style,
}: {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  style: String;
}) => {
  useEffect(() => {
    if (containerRef.current) {
      gsap.fromTo(
        containerRef.current,
        {
          transform:
            "perspective(1000px) translate(0px, 100px) rotateX(-40deg)",
          transformOrigin: "center top",
          opacity: 0,
        },
        {
          transform: "perspective(1000px) translate(0px, 0px) rotateX(0deg)",
          opacity: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 100%",
            end: "top 30%",
            scrub: true,
          },
        }
      );
    }
  }, []);
  return (
    <div
      style={{
        transform: "perspective(1000px) translate(0px, 100px) rotateX(-40deg)",
        transformOrigin: "center top",
        opacity: 0,
      }}
      ref={containerRef}
      className={`${style}`}
    >
      {children}
    </div>
  );
};

export default OnScrollUpCard;
