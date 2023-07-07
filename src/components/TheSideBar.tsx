export default function TheSideBar() {
  return (
    <div className="vertical-menu">
      <div data-simplebar className="h-100">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title" data-key="t-menu">
              Menu
            </li>
            <li>
              <a href="index.html">
                <i data-feather="home"></i>
                <span data-key="t-dashboard">Dashboard</span>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
