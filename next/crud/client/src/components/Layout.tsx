import React from "react";
import Title from "./Title";

interface LayoutProps {
  title: string;
  children?: any;
}

const Layout = (props: LayoutProps) => {
  return (
    <div className={`flex flex-col w-2/3 bg-white text-gray-900 rounded-lg overflow-hidden`}>
      <Title>{props.title}</Title>
      <div className="p-5 bg-gray-200">
        {props.children}
      </div>
    </div>
  );
};

export default Layout;
