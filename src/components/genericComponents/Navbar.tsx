import clsx from "clsx";

import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Button } from "./Button";
import gsap from "gsap";
import { useAudioStore, useCart } from "../../store/store";
import { Link } from "react-router-dom";
import ToggleMenu from "./ToggleMenu";
import { FaShoppingBag } from "react-icons/fa";

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);

  const audioElementRef = useRef<HTMLAudioElement>({} as HTMLAudioElement);
  const navContainerRef = useRef(null);
  const btnRef = useRef(null);
  const navItemRef = useRef(null);

  const { audio, setAudio }: any = useAudioStore();
  const { cart } = useCart();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
    setAudio(!audio);
  };

  useEffect(() => {
    if (isAudioPlaying) {
      audioElementRef.current.play();
    } else {
      audioElementRef.current.pause();
    }
  }, [isAudioPlaying]);

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

  const onHoverAudio = () => {
    if (navItemRef && audio) {
      const audio = new Audio("/audio/navItem.mp3");
      audio.play().catch((error) => {
        console.error("Audio play error:", error);
      });
    }
  };

  const onClickedAudio = () => {
    if (navItemRef && audio) {
      const audio = new Audio("/audio/btnClicked.mp3");
      audio.play().catch((error) => {
        console.error("Audio play error:", error);
      });
    }
  };

  return (
    <div
      ref={navContainerRef}
      className="fixed inset-x-0 top-4 z-[999] h-16  transition-all bg-black rounded-md border-gray-50 border-[0.5px] duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            <Link to={""}>
              <img
                ref={navItemRef}
                className="h-10 w-10 rounded-full"
                src="/img/moraxLogo.png"
                onClick={onClickedAudio}
                onMouseEnter={onHoverAudio}
                alt=""
              />
            </Link>

            <Button
              id="product-button"
              title="Products"
              rightIcon={<TiLocationArrow />}
              containerClass="bg-blue-50 md:flex hidden items-center justify-center gap-1 "
              onMouseEnter={onMouseEnter}
              btnRef={btnRef}
              onMouseLeave={onMouseLeave}
              btnAudio={true}
              link="/products"
            />
          </div>

          <div className="flex h-full items-center gap-10">
            <Link className="relative" to={"/cart"}>
              {cart.length > 0 && (
                <span className="absolute top-0 -right-1 text-black bg-red-500 rounded-full text-[6px] p-1"></span>
              )}

              <FaShoppingBag color="white" />
            </Link>

            <div className="flex gap-2">
              <ToggleMenu />
              <button
                onClick={toggleAudioIndicator}
                className="ml-10 flex items-center space-x-0.5"
                id="audio-button-main"
              >
                <audio
                  autoPlay
                  ref={audioElementRef}
                  className="hidden"
                  src="/audio/music_main.mp3"
                  loop
                />
                {[1, 2, 3, 4].map((bar) => (
                  <div
                    key={bar}
                    className={clsx("indicator-line", {
                      active: isIndicatorActive,
                    })}
                    style={{
                      animationDelay: `${bar * 0.1}s`,
                    }}
                  />
                ))}
              </button>
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
