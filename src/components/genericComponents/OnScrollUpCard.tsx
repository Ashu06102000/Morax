import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const OnScrollUpCard = ({
  children,
  containerRef,
  style,
}: {
  children: React.ReactNode;
  containerRef: React.RefObject<HTMLDivElement>;
  style: string;
}) => {
  useEffect(() => {
    if (containerRef.current) {
      const element = containerRef.current;

      const animation = gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 100,
          rotationX: -40,
          transformPerspective: 1000,
          transformOrigin: "center top",
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: element,
            start: "top 90%",
            end: "top 30%",
            scrub: 0.5,
            toggleActions: "play none none reverse",
          },
        }
      );

      return () => {
        animation.scrollTrigger?.kill();
        animation.kill();
      };
    }
  }, [containerRef]);

  return (
    <div
      style={{
        transformOrigin: "center top",
        willChange: "transform, opacity",
      }}
      ref={containerRef}
      className={`${style}`}
    >
      {children}
    </div>
  );
};

export default OnScrollUpCard;
