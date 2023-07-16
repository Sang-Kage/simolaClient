import { Link, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { clickedSideBar, defaultSideBar } from "../helpers/HandleSidebar";
import useUserSlice from "../hooks/useUserSlice";

export default function TheHeader() {
  const { getUser } = useUserSlice();
  useEffect(() => {
    defaultSideBar();
  }, []);

  const navigate = useNavigate();
  const { setUser } = useUserSlice();
  const logout = async () => {
    sessionStorage.clear();
    // hapus semua state redux
    setUser({
      id: 0,
      name: "",
      role: "",
      thumbnail: "",
    });
    navigate("/login", { replace: true });
  };

 
  

  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link to={"/"} className="logo logo-dark">
              <span className="logo-sm">
                <img src="https://simat.unira.ac.id/img/logo-small.png" alt="" height="24" />
              </span>
              <span className="logo-lg">
                <img src="https://simat.unira.ac.id/img/logo-small.png" alt="" height="24" />{" "}
                <span className="logo-txt">SIMOLA</span>
              </span>
            </Link>
            <Link to={"/"} className="logo logo-light">
              <span className="logo-sm">
                <img src="https://simat.unira.ac.id/img/logo-small.png" alt="" height="24" />
              </span>
              <span className="logo-lg">
                <img src="https://simat.unira.ac.id/img/logo-small.png" alt="" height="24" />{" "}
                <span className="logo-txt">SIMOLA</span>
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
              onClick={logout}
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
                src={`${
                  sessionStorage.getItem("is_simat") == "true"
                    ? "https://api.unira.ac.id/" + getUser().thumbnail
                    : getUser().thumbnail
                }`}
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-3 fw-medium">
                {getUser().name}
              </span>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
