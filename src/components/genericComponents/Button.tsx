import { useAudioStore } from "../../store/store";
import { Link } from "react-router-dom";

export const Button = ({
  title,
  id,
  rightIcon,
  leftIcon,
  containerClass,
  onMouseEnter = () => {},
  btnRef,
  onMouseLeave = () => {},
  btnAudio,
  link,
}: {
  title: string;
  id?: string;
  rightIcon?: React.ReactNode;
  leftIcon?: React.ReactNode;
  containerClass?: string;
  onMouseEnter?: () => void;
  btnRef?: React.Ref<HTMLButtonElement>;
  onMouseLeave?: () => void;
  btnAudio?: boolean;
  link?: string;
}) => {
  const { audio }: any = useAudioStore();

  const onHoverAudio = () => {
    if (btnAudio && audio) {
      const hoverAudio = new Audio("/audio/btnHover.mp3");
      hoverAudio.play().catch((error) => {
        console.error("Audio play error:", error);
      });
    }
  };

  const onClickedAudio = () => {
    if (btnAudio && audio) {
      const clickedAudio = new Audio("/audio/btnClicked.mp3");
      clickedAudio.play().catch((error) => {
        console.error("Audio play error:", error);
      });
    }
  };

  const ButtonContent = (
    <button
      id={id}
      className={`flex relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black ${containerClass}`}
      ref={btnRef}
      onClick={onClickedAudio}
      onMouseEnter={() => {
        onMouseEnter();
        onHoverAudio();
      }}
      onMouseLeave={onMouseLeave}
    >
      {leftIcon}
      <span className="relative incline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
      {rightIcon}
    </button>
  );

  return link ? (
    <Link to={link} className="flex">
      {ButtonContent}
    </Link>
  ) : (
    ButtonContent
  );
};
