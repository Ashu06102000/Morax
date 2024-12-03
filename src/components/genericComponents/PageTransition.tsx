import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";
import { gsap } from "gsap";
const PageTransition = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const transitionRef = useRef(null);
  const lettersRef = useRef<Array<HTMLElement | null>>([]);
  useEffect(() => {
    const ctx = gsap.context(() => {
      const timeline = gsap.timeline();

      timeline.to(transitionRef.current, {
        opacity: 1,
        duration: 0.5,
        ease: "power3.out",
      });

      timeline.fromTo(
        lettersRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.2, stagger: 0.1, ease: "power3.out" },
        "-=0.3"
      );

      timeline.to(
        transitionRef.current,
        { opacity: 0, duration: 0.5, ease: "power3.in", height: "0px" },
        "+=0.5"
      );
    });

    return () => ctx.revert();
  }, [location]);

  return (
    <div>
      <div
        ref={transitionRef}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "#000",
          zIndex: 1000,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          opacity: 0,
        }}
      >
        <div
          style={{
            display: "flex",
            gap: "10px",
            fontSize: "3rem",
            color: "#fff",
          }}
        >
          {["M", "O", "R", "A", "X"].map((data, index) => (
            <span
              key={index}
              ref={(el) => {
                if (lettersRef.current) {
                  lettersRef.current[index] = el;
                }
              }}
              style={{ opacity: 0, transform: "translateY(50px)" }}
            >
              {data}
            </span>
          ))}
        </div>
      </div>

      {children}
    </div>
  );
};
export default PageTransition;
