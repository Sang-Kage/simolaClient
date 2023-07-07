export default function TheHeader() {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <div className="navbar-brand-box">
            <a href="index.html" className="logo logo-dark">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.svg" alt="" height="24" />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-sm.svg" alt="" height="24" />{" "}
                <span className="logo-txt">Minia</span>
              </span>
            </a>

            <a href="index.html" className="logo logo-light">
              <span className="logo-sm">
                <img src="assets/images/logo-sm.svg" alt="" height="24" />
              </span>
              <span className="logo-lg">
                <img src="assets/images/logo-sm.svg" alt="" height="24" />{" "}
                <span className="logo-txt">Minia</span>
              </span>
            </a>
          </div>

          <button
            type="button"
            className="btn btn-sm px-3 font-size-16 header-item"
            id="vertical-menu-btn"
          >
            <i className="fa fa-fw fa-bars"></i>
          </button>
        </div>

        <div className="d-flex">
          <div className="dropdown d-inline-block d-lg-none ms-2">
            <button
              type="button"
              className="btn header-item"
              id="page-header-search-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <i data-feather="search" className="icon-lg"></i>
            </button>
            <div
              className="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0"
              aria-labelledby="page-header-search-dropdown"
            >
              <form className="p-3">
                <div className="form-group m-0">
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search ..."
                      aria-label="Search Result"
                    />

                    <button className="btn btn-primary" type="submit">
                      <i className="mdi mdi-magnify"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div className="dropdown d-none d-sm-inline-block">
            <button
              type="button"
              className="btn header-item"
              id="mode-setting-btn"
            >
              <i data-feather="moon" className="icon-lg layout-mode-dark"></i>
              <i data-feather="sun" className="icon-lg layout-mode-light"></i>
            </button>
          </div>

          <div className="dropdown d-inline-block">
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
                <a href="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src="assets/images/users/avatar-3.jpg"
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
                </a>
                <a href="#!" className="text-reset notification-item">
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
                </a>
                <a href="#!" className="text-reset notification-item">
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
                </a>

                <a href="#!" className="text-reset notification-item">
                  <div className="d-flex">
                    <div className="flex-shrink-0 me-3">
                      <img
                        src="assets/images/users/avatar-6.jpg"
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
                </a>
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

          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item right-bar-toggle me-2"
            >
              <i data-feather="settings" className="icon-lg"></i>
            </button>
          </div>

          <div className="dropdown d-inline-block">
            <button
              type="button"
              className="btn header-item topbar-light bg-light-subtle border-start border-end"
              id="page-header-user-dropdown"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <img
                className="rounded-circle header-profile-user"
                src="assets/images/users/avatar-1.jpg"
                alt="Header Avatar"
              />
              <span className="d-none d-xl-inline-block ms-1 fw-medium">
                Shawn L.
              </span>
              <i className="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
            </button>
            <div className="dropdown-menu dropdown-menu-end">
              <a className="dropdown-item" href="apps-contacts-profile.html">
                <i className="mdi mdi-face-man font-size-16 align-middle me-1"></i>{" "}
                Profile
              </a>
              <a className="dropdown-item" href="auth-lock-screen.html">
                <i className="mdi mdi-lock font-size-16 align-middle me-1"></i>{" "}
                Lock Screen
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="auth-logout.html">
                <i className="mdi mdi-logout font-size-16 align-middle me-1"></i>{" "}
                Logout
              </a>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
