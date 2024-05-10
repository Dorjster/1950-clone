import React from "react";

interface ButtonProps {
  title: string;
  onMouseEnter?: () => void; // Define onMouseEnter prop
  onMouseLeave?: () => void; // Define onMouseLeave prop
}

const Button: React.FC<ButtonProps> = ({
  title,
  onMouseEnter,
  onMouseLeave,
}) => {
  return (
    <div
      className="bg-white py-2 px-4 border border-gray-300 rounded-md cursor-pointer"
      onMouseEnter={onMouseEnter} // Call onMouseEnter function when mouse enters the button
      onMouseLeave={onMouseLeave} // Call onMouseLeave function when mouse leaves the button
    >
      {title}
    </div>
  );
};

export default Button;
