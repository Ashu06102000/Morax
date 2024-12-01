import clsx from "clsx";

import { useEffect, useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { Button } from "./Button";
import { useAuth0 } from "@auth0/auth0-react";
import AuthButton from "../auth/Authbutton";
import gsap from "gsap";
import { useAudioStore } from "../../store/store";
const navItems = ["Nexus", "Vault", "Prologue", "About", "Contact"];

const NavBar = () => {
  const [isAudioPlaying, setIsAudioPlaying] = useState(false);
  const [isIndicatorActive, setIsIndicatorActive] = useState(false);
  const [btnAudio, setBtnAudio] = useState(false);

  const audioElementRef = useRef<HTMLAudioElement>({} as HTMLAudioElement);
  const navContainerRef = useRef(null);
  const btnRef = useRef(null);
  const navItemRef = useRef(null);
  const { isLoading, user, isAuthenticated } = useAuth0();

  const { audio, setAudio }: any = useAudioStore();

  const toggleAudioIndicator = () => {
    setIsAudioPlaying((prev) => !prev);
    setIsIndicatorActive((prev) => !prev);
    setAudio(!audio);
  };
  console.log(audio, "audio");
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
      className="fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6"
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          <div className="flex items-center gap-7">
            {isAuthenticated && user ? (
              <img
                className="h-10 w-10 rounded-full"
                src={user?.picture}
                alt=""
              />
            ) : (
              <img src="" alt="" />
            )}
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

          <div className="flex h-full items-center">
            <div className="hidden md:block">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  className="nav-hover-btn"
                  onClick={onClickedAudio}
                  onMouseEnter={onHoverAudio}
                  ref={navItemRef}
                >
                  {item}
                </a>
              ))}
            </div>

            <button
              onClick={toggleAudioIndicator}
              className="ml-10 flex items-center space-x-0.5"
              id="audio-button-main"
            >
              <audio
                ref={audioElementRef}
                className="hidden"
                src="/audio/loop.mp3"
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
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
