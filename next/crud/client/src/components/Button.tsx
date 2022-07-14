import React from "react";

interface ButtonProps {
  children?: any;
  className?: string;
  btnColor: string
  onClick?: () => void
}

const Button = (props: ButtonProps) => {
  const btnColor = props.btnColor;

  return (
    <button className={`${btnColor} text-white p-3 rounded-lg ${props.className}`} onClick={props.onClick}>
      {props.children}
      <h1></h1>
    </button>
  );
};

export default Button;
