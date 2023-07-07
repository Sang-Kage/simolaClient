import TheFooter from "../components/TheFooter";
import TheHeader from "../components/TheHeader";
import TheSideBar from "../components/TheSideBar";
import { useEffect } from "react";

declare const feather: any;
declare const $: any;
interface Props {
  children: React.ReactNode;
}


export default function App({children}: Props) {
    useEffect(()=> {
        feather.replace();
        $("#sidebar-menu").metisMenu({
          activeClass: "mm-active",
        });
    });
  return (
    <div id="layout-wrapper">
      <TheHeader></TheHeader>
      <TheSideBar></TheSideBar>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            {children}
          </div>
        </div>
        <TheFooter></TheFooter>
      </div>
    </div>
  );
}
