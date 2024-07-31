import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen min-w-screen  font-helvetica  ">
      <Header />
      <div className="flex flex-grow min-w-screen bg-lime-800">
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
