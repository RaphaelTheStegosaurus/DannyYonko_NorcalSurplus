import React from "react";
import Navigation from "../components/navigation";
import { Background } from "../components/background";
interface Props {
  children: React.ReactNode;
  title?: string;
}
export const Page_container: React.FC<Props> = ({ children, title }) => {
  return (
    <>
      {title && (
        <header className="bg-secondary bg-opacity-75 container-fluid px-3 ps-5 h-25 align-items-lg-start">
          <h1 className="display-6">{title}</h1>
        </header>
      )}
      <main className="container-fluid ">
        {children}
      </main>
      <Navigation/>
      <Background/>
    </>
  );
};
