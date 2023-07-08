import { Link, useLocation } from "react-router-dom";

export default function TheSideBar() {
  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="text-center mt-2" id="thumbnail">
              <img
                src="/assets/images/users/avatar-1.jpg"
                alt=""
                className="img-thumbnail rounded-circle"
                width={90}
              />
              <h4 className="mt-3 mb-1 text-white">MUHAMMAD UMAR MANSYUR</h4>
              <p className="text-white">Administrator</p>
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
                useLocation().pathname.includes("inbox") ? "mm-active" : ""
              }
            >
              <Link to="/inbox">
                <i data-feather="inbox"></i>
                <span data-key="t-mail">Surat Masuk</span>
              </Link>
            </li>
            <li
              className={
                useLocation().pathname.includes("sent") ? "mm-active" : ""
              }
            >
              <Link to="/sent">
                <i data-feather="send"></i>
                <span data-key="t-sent">Surat Keluar</span>
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
            <li>
              <a href="#" className="has-arrow">
                <i data-feather="settings"></i>
                <span data-key="t-settings">Pengaturan</span>
              </a>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="/settings/room" data-key="t-g-maps">
                    Aula
                  </Link>
                </li>
                <li>
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
