import React from "react";

interface BtnProps {
  //   handleClick: () => void;
  label: string;
  classStyle: string;
}

const Button: React.FC<BtnProps> = ({
  // handleClick,
  label,
  classStyle,
}) => {
  return (
    <button
      className={classStyle}
      // onClick={handleClick}
    >
      {label}
    </button>
  );
};

export default Button;
