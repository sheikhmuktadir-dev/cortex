import { Link, NavLink } from "react-router-dom";
import Style from "./sidebar.module.css";
import { NavContext } from "../../Context/NavContext";
import { useContext, forwardRef, useEffect } from "react";
import { sidebarLinks } from "../../Data/Sidebar";
import { MdClose } from "react-icons/md";

const Sidebar = forwardRef((props, ref) => {
  const { navCollapse, setNavCollapse } = useContext(NavContext);

  //  Allow sidebar scroll, stop bubbling to window
  useEffect(() => {
    const sidebar = ref?.current;
    if (!sidebar) return;

    const stopScrollPropagation = (e) => {
      e.stopPropagation();
    };

    sidebar.addEventListener("wheel", stopScrollPropagation);
    sidebar.addEventListener("touchmove", stopScrollPropagation);

    return () => {
      sidebar.removeEventListener("wheel", stopScrollPropagation);
      sidebar.removeEventListener("touchmove", stopScrollPropagation);
    };
  }, [ref]);

  return (
    <div
      ref={ref}
      className={`${Style.sideBar} ${navCollapse ? Style.sideBarExpand : ""}`}
    >
      <div className={Style.sideBarTopFlex}>
        <div className={Style.sidebarLogoArea}>
          <Link to="." className={Style.sidebarLogo}>
            CorteX
          </Link>

          <button
            className={Style.sideBarClose}
            onClick={() => setNavCollapse(false)}
          >
            <MdClose />
          </button>
        </div>

        {/* SCROLLABLE AREA */}
        <ul className={Style.sideBarList}>
          {sidebarLinks?.map((list, index) => {
            const Icon = list.icon;

            return (
              <li className={Style.sideBarItem} key={list.name || index}>
                <NavLink
                  to={list.path}
                  end={list.end || false}
                  onClick={() => setNavCollapse(false)}
                  className={({ isActive }) =>
                    `${Style.sidebarLink} ${
                      isActive ? Style.sidebarLinkActive : ""
                    }`
                  }
                >
                  <div className={Style.sidebarIcon}>
                    <Icon />
                  </div>
                  <span>{list.name}</span>
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
});

export default Sidebar;
