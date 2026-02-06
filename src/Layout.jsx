import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Components/Sidebar/Sidebar";
import Navbar from "./Components/Navbar/Navbar";
import { NavContext } from "./Context/NavContext";
import { useContext, useRef, useEffect } from "react";

export default function Layout() {
  const location = useLocation();
  const { navCollapse } = useContext(NavContext);

  const sidebarRef = useRef(null);
  const navbarRef = useRef(null);

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, [location.pathname]);

  // Block PAGE scroll (not scrollbar)
  useEffect(() => {
    const sidebar = sidebarRef.current;
    const navbar = navbarRef.current;

    if (!sidebar || !navbar) return;

    const preventScroll = (e) => {
      e.preventDefault();
    };

    const disablePageScroll = () => {
      window.addEventListener("wheel", preventScroll, { passive: false });
      window.addEventListener("touchmove", preventScroll, { passive: false });
    };

    const enablePageScroll = () => {
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };

    // Sidebar hover
    sidebar.addEventListener("mouseenter", disablePageScroll);
    sidebar.addEventListener("mouseleave", enablePageScroll);

    // Navbar hover
    navbar.addEventListener("mouseenter", disablePageScroll);
    navbar.addEventListener("mouseleave", enablePageScroll);

    return () => {
      sidebar.removeEventListener("mouseenter", disablePageScroll);
      sidebar.removeEventListener("mouseleave", enablePageScroll);

      navbar.removeEventListener("mouseenter", disablePageScroll);
      navbar.removeEventListener("mouseleave", enablePageScroll);

      enablePageScroll();
    };
  }, []);

  return (
    <>
      <Sidebar ref={sidebarRef} />

      <div className={`layoutContent ${navCollapse ? "layoutCollapse" : ""}`}>
        <Navbar ref={navbarRef} />

        <main className="pageContent">
          <Outlet />
        </main>
      </div>
    </>
  );
}
