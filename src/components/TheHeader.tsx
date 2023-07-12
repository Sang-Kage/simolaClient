import { Link } from "react-router-dom";
import { useEffect } from "react";
import { clickedSideBar, defaultSideBar } from "../../public/assets/pages/app";

export default function TheHeader() {
  useEffect(() => {
    clickedSideBar();
    defaultSideBar();
  }, []);

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link to={"/"} className="logo logo-dark">
              <span className="logo-sm">
                <img src="/assets/images/logo-sm.svg" alt="" height="24" />
              </span>
              <span className="logo-lg">
                <img src="/assets/images/logo-sm.svg" alt="" height="24" />{" "}
                <span className="logo-txt">SIMORA</span>
              </span>
            </Link>
            <Link to={"/"} className="logo logo-light">
              <span className="logo-sm">
                <img src="/assets/images/logo-sm.svg" alt="" height="24" />
              </span>
              <span className="logo-lg">
                <img src="/assets/images/logo-sm.svg" alt="" height="24" />{" "}
                <span className="logo-txt">SIMORA</span>
              </span>
            </Link>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item"
            id="vertical-menu-btn"
            onClick={clickedSideBar}
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>
        </div>

        <div className="d-flex">
          <div className="d-inline-block">
            <button
              type="button"
              className="btn header-item right-bar-toggle mx-2"
            >
              <i data-feather="power" className="icon-lg"></i>
            </button>
          </div>

          <div className=" d-inline-block">
            <button
              type="button"
              className="btn header-item topbar-light border-start border-end"
            >
              <img
                className="rounded-circle header-profile-user"
                src="/assets/images/users/avatar-1.jpg"
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-3 fw-medium">
                MUHAMMAD UMAR MANSYUR
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
