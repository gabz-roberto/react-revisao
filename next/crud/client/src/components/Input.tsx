import React from "react";

interface InputProps {
  text: string;
  type: "text" | "number";
  value: any;
  onlyRead?: boolean;
  handleChange?: (value: any) => void;
}

const Input = (props: InputProps) => {
  return (
    <div className="flex flex-col">
      <input
        placeholder={props.text}
        type={props.type ?? "text"}
        readOnly={props.onlyRead}
        className={`border border-blue-500 rounded-md p-2 focus:outline-none ${
          props.onlyRead ? "" : "focus:bg-white"
        } bg-blue-50 my-4`}
        value={props.value}
        onChange={(event) => props.handleChange?.(event.target.value)}
        min={0}
      />
    </div>
  );
};

export default Input;
