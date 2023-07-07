import { Link } from "react-router-dom";

function clickedSideBar() {
  document.body.classList.toggle("sidebar-enable");
  if (window.innerWidth >= 992) {
    const bodySidebarSize = document.body.getAttribute("data-sidebar-size");
    if (!bodySidebarSize || bodySidebarSize === 'lg' || bodySidebarSize === 'md') {
      document.body.setAttribute('data-sidebar-size', 'sm');
    } else if (bodySidebarSize === 'sm') {
      document.body.setAttribute('data-sidebar-size', 'lg');
    }

    const thumbnail = document.getElementById("thumbnail");
    if(document.body.getAttribute("data-sidebar-size") === "lg") {
      thumbnail?.classList.remove("d-none");
    } else {
      thumbnail?.classList.add("d-none");
      thumbnail?.classList.remove("mt-2");
    }
  }
}

export default function TheHeader() {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <Link to={'/'} className="logo logo-dark">
              <span className="logo-sm">
                <img src="/assets/images/logo-sm.svg" alt="" height="24" />
              </span>
              <span className="logo-lg">
                <img src="/assets/images/logo-sm.svg" alt="" height="24" />{" "}
                <span className="logo-txt">SIMORA</span>
              </span>
            </Link>
            <Link to={'/'} className="logo logo-light">
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

          <div className="dropdown d-inline-block px-1">
            <button
              type="button"
              className="btn header-item noti-icon position-relative"
              id="page-header-notifications-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="bell" className="icon-lg"></i>
              <span className="badge bg-danger rounded-pill">5</span>
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-notifications-dropdown"
            >
              <div className="p-3">
                <div className="row align-items-center">
                  <div className="col">
                    <h6 className="m-0"> Notifications </h6>
                  </div>
                  <div className="col-auto">
                    <a
                      href="#!"
                      className="small text-reset text-decoration-underline"
                    >
                      {" "}
                      Unread (3)
                    </a>
                  </div>
                </div>
              </div>
              <div
                data-simplebar
                style={{ maxHeight: "230px" }}
                id="simple-bar"
              >
                <Link to="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src="/assets/images/users/avatar-3.jpg"
                        className="rounded-circle avatar-sm"
                        alt="user-pic"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">James Lemire</h6>
                      <div className="font-size-13 text-muted">
                        <p className="mb-1">
                          It will seem like simplified English.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>1 hour ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar-sm me-3">
                      <span className="avatar-title bg-primary rounded-circle font-size-16">
                        <i className="bx bx-cart"></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Your order is placed</h6>
                      <div className="font-size-13 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
                <Link to="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 avatar-sm me-3">
                      <span className="avatar-title bg-success rounded-circle font-size-16">
                        <i className="bx bx-badge-check"></i>
                      </span>
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Your item is shipped</h6>
                      <div className="font-size-13 text-muted">
                        <p className="mb-1">
                          If several languages coalesce the grammar
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>3 min ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>

                <Link to="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src="/assets/images/users/avatar-6.jpg"
                        className="rounded-circle avatar-sm"
                        alt="user-pic"
                      />
                    </div>
                    <div className="flex-grow-1">
                      <h6 className="mb-1">Salena Layfield</h6>
                      <div className="font-size-13 text-muted">
                        <p className="mb-1">
                          As a skeptical Cambridge friend of mine occidental.
                        </p>
                        <p className="mb-0">
                          <i className="mdi mdi-clock-outline"></i>{" "}
                          <span>1 hour ago</span>
                        </p>
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
              <div className="p-2 border-top d-grid">
                <a
                  className="btn btn-sm btn-link font-size-14 text-center"
                  href="#"
                >
                  <i className="mdi mdi-arrow-right-circle me-1"></i>{" "}
                  <span>View More..</span>
                </a>
              </div>
            </div>
          </div>

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
