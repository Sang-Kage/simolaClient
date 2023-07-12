import TheFooter from "../components/TheFooter";
import TheHeader from "../components/TheHeader";
import TheSideBar from "../components/TheSideBar";
import { useEffect } from "react";
declare const feather: any;

export default function App() {
    useEffect(()=> {
        feather.replace();
    });
  return (
    <div id="layout-wrapper">
      <TheHeader></TheHeader>
      <TheSideBar></TheSideBar>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">
            <slot>
              
            </slot>
          </div>
        </div>
        <TheFooter></TheFooter>
      </div>
    </div>
  );
}
