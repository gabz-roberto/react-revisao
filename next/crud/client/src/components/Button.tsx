import React from "react";

interface ButtonProps {
  children?: any;
  className?: string;
}

const Button = (props: ButtonProps) => {

  return (
    <button className={`bg-blue-500 text-white p-3 rounded-lg ${props.className}`}>
      {props.children}
      <h1></h1>
    </button>
  );
};

export default Button;
