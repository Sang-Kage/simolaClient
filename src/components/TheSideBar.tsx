import { Link, useLocation } from "react-router-dom";
import useUserSlice from "../hooks/useUserSlice";

export default function TheSideBar() {
  const { getUser } = useUserSlice();

  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="text-center mt-2" id="thumbnail">
              <img
                src={`${
                  sessionStorage.getItem("is_simat") == 'true'
                    ? "https://api.unira.ac.id/" + getUser().thumbnail
                    : getUser().thumbnail
                }`}
                alt=""
                className="img-thumbnail rounded-circle"
                width={90}
              />
              <h4 className="mt-3 mb-1 text-white">{getUser().name}</h4>
              <p className="text-white" style={{textTransform: 'uppercase'}}>{getUser().role}</p>
              <hr className="text-white" />
            </li>
            <li className={useLocation().pathname === "/" ? "mm-active" : ""}>
              <Link to="/">
                <i data-feather="home"></i>
                <span data-key="t-dashboard">Dashboard</span>
              </Link>
            </li>
            <li
              className={
                useLocation().pathname.includes("penyewaan") ? "mm-active" : ""
              }
            >
              <Link to="/penyewaan">
                <i data-feather="feather"></i>
                <span data-key="t-mail">Penyewaan</span>
              </Link>
            </li>
            <li
              className={
                useLocation().pathname.includes("calendar") ? "mm-active" : ""
              }
            >
              <Link to="/calendar">
                <i data-feather="calendar"></i>
                <span data-key="t-mail">Kalender</span>
              </Link>
            </li>
            <li
              className={
                useLocation().pathname.includes("settings") ? "mm-active" : ""
              }
            >
              <a href="#" className="has-arrow">
                <i data-feather="settings"></i>
                <span data-key="t-settings">Pengaturan</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li
                  className={
                    useLocation().pathname.includes("room") ? "mm-active" : ""
                  }
                >
                  <Link to="/settings/room" data-key="t-g-maps">
                    Aula
                  </Link>
                </li>
                <li
                  className={
                    useLocation().pathname.includes("car") ? "mm-active" : ""
                  }
                >
                  <Link to="/settings/car" data-key="t-v-maps">
                    Mobil
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
