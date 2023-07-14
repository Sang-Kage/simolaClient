import TheFooter from "../components/TheFooter";
import TheHeader from "../components/TheHeader";
import TheSideBar from "../components/TheSideBar";
import { useEffect } from "react";
import UseToken from "../composables/UseToken";
import useUserSlice from "../hooks/useUserSlice";

declare const feather: any;
declare const $: any;
interface Props {
  children: React.ReactNode;
}

export default function App({ children }: Props) {
  const { getSaya } = UseToken();
  const { setUser, getUser } = useUserSlice();

  const whoami = async () => {
    const me = await getSaya();
    if (sessionStorage.getItem("is_simat") == "true") {
      await setUser({
        id: Number(me.id),
        name: me.attributes.nama,
        role: "mahasiswa",
        thumbnail: me.attributes.thumbnail,
      });
      return;
    }
    await setUser({
      id: me.id,
      name: me.name,
      role: "Administrator",
      thumbnail: me.thumbnail,
    });
  }

  useEffect(() => {
    feather.replace();
    $("#sidebar-menu").metisMenu({
      activeClass: "mm-active",
    });
    whoami();
  }, []);
  return (
    <div id="layout-wrapper">
      <TheHeader></TheHeader>
      <TheSideBar></TheSideBar>
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">{children}</div>
        </div>
        <TheFooter></TheFooter>
      </div>
    </div>
  );
}
