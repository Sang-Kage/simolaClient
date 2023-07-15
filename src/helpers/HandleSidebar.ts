function clickedSideBar() {
  document.body.classList.toggle("sidebar-enable");
  const bodySidebarSize = document.body.getAttribute("data-sidebar-size");
  if (window.innerWidth >= 992) {
    if (
      !bodySidebarSize ||
      bodySidebarSize === "lg" ||
      bodySidebarSize === "md"
    ) {
      document.body.setAttribute("data-sidebar-size", "sm");
    } else if (bodySidebarSize === "sm" || bodySidebarSize === null) {
      document.body.setAttribute("data-sidebar-size", "lg");
    }
    const thumbnail = document.getElementById("thumbnail");
    if (document.body.getAttribute("data-sidebar-size") === "lg") {
      thumbnail?.classList.remove("d-none");
    } else {
      thumbnail?.classList.add("d-none");
      thumbnail?.classList.remove("mt-2");
    }
  }
}

function defaultSideBar() {
  const bodySidebarSize = document.body.getAttribute("data-sidebar-size");
  if(window.innerWidth <= 992 && bodySidebarSize === null) {
    document.body.classList.remove("sidebar-enable");
  }
}

export {
  clickedSideBar,
  defaultSideBar
}