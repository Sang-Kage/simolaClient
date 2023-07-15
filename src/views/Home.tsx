import TheFooter from "../components/TheFooter";
import TheHeader from "../components/TheHeader";
import TheSideBar from "../components/TheSideBar";
import { useEffect } from "react";
import UseToken from "../composables/UseToken";
import { setUser } from "../features/user/userSlice";
import { useDispatch } from "react-redux";

declare const feather: any;
declare const $: any;
interface Props {
  children: React.ReactNode;
}

export default function App({ children }: Props) {
  const { getSaya } = UseToken();
  const dispatch = useDispatch();
  const whoami = async () => {
    const me = await getSaya();
    if (sessionStorage.getItem("is_simat") == "true") {
      dispatch(
        setUser({
          id: Number(me.id),
          name: me.attributes.nama,
          role: "mahasiswa",
          thumbnail: me.attributes.thumbnail,
        })
      );
      return;
    }
    dispatch(
      setUser({
        id: me.id,
        name: me.name,
        role: "Administrator",
        thumbnail: me.thumbnail,
      })
    );
  };

  useEffect(() => {
    whoami();
  }, []);

  useEffect(() => {
    feather.replace();
    $("#sidebar-menu").metisMenu({
      activeClass: "",
    });
  }, []);
  return (
    <div id="layout-wrapper">
      <TheHeader />
      <TheSideBar />
      <div className="main-content">
        <div className="page-content">
          <div className="container-fluid">{children}</div>
        </div>
        <TheFooter />
      </div>
    </div>
  );
}
