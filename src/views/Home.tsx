import TheFooter from "../components/TheFooter";
import TheHeader from "../components/TheHeader";
import TheSideBar from "../components/TheSideBar";
import { useEffect } from "react";
import UseToken from "../composables/UseToken";
import { setUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import { checkRole } from "../utils/useAuthentication";

declare const feather: any;
declare const $: any;
interface Props {
  children: React.ReactNode;
}

export default function App({ children }: Props) {
  const { getSaya } = UseToken();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user);
  const whoami = async () => {
    const me = await getSaya();
    if (sessionStorage.getItem("is_simat") == "true") {
      dispatch(
        setUser({
          id: Number(me.id),
          name: me.attributes.nama,
          role: checkRole(me.attributes.type),
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
    feather.replace();
    $("#sidebar-menu").metisMenu({
      activeClass: "",
    });
    if (user.id == 0) {
      whoami();
    }
  }, []);

  return (
    <>
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
    </>
  );
}
