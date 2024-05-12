import React from "react";
import { CiStar } from "react-icons/ci";

interface ButtonProps {
  title: string;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
  style?: React.CSSProperties;
}

const Button: React.FC<ButtonProps> = ({
  title,
  style,
  onMouseEnter,
  onMouseLeave,
}) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <div
      style={style}
      className={` bg-white w-[260px] py-[8px] px-[12px] border border-gray-300 rounded-full cursor-pointer mb-6 flex items-center gap-[10px] text-[12px]`}
      onMouseEnter={() => {
        setIsHovered(true);
        onMouseEnter && onMouseEnter();
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        onMouseLeave && onMouseLeave();
      }}
    >
      <CiStar
        size={35}
        className={`border-[1px] rounded-full p-1 bg-black text-white${
          isHovered ? "text-black bg-white" : ""
        }`}
      />
      {title}
    </div>
  );
};

export default Button;
