import Style from "./navbar.module.css";
import { IoChevronDown } from "react-icons/io5";
import { Link } from "react-router-dom";
import LogoutBtn from "../Button/LogoutBtn";
import useLogout from "../../CustomHooks/useLogout";
import { useState, useRef, useEffect } from "react";
import { NavContext } from "../../Context/NavContext";
import { useContext } from "react";
import { forwardRef } from "react";
import { profileMenu } from "../../Data/Navbar";
import menu from "/images/menu.png";
import profile from "/images/person.png";

const Navbar = forwardRef((props, ref) => {
  const profileRef = useRef(null);

  const { isLoggingOut, logoutHandler } = useLogout();
  const [profileToggle, setProfileToggle] = useState(false);

  const { navCollapse, collapseHandler } = useContext(NavContext);

  const user = JSON.parse(localStorage.getItem("currentUser"));

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (profileRef.current && !profileRef.current.contains(e.target)) {
        setProfileToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav
      ref={ref}
      className={`${Style.navBar} ${navCollapse ? Style.navBarCollapse : ""}`}
    >
      <button className={Style.navToggle} onClick={collapseHandler}>
        <img src={menu} alt="menu" className={Style.navToggleImage} />
      </button>
      <div className={Style.profileArea} ref={profileRef}>
        <div
          className={Style.profileFlex}
          onClick={() => setProfileToggle((prev) => !prev)}
        >
          <img src={profile} alt="profile" className={Style.profileImage} />
          <span className={Style.profileName}>{user?.username || "Guest"}</span>
          <span className={Style.profileIcon}>
            <IoChevronDown />
          </span>

          <ul
            className={`${Style.profileList} ${profileToggle ? Style.profileToggleActive : ""}`}
          >
            {profileMenu?.map((list, index) => {
              return (
                <li className={Style.profileItem} key={list?.label || index}>
                  {list?.action === "logout" ? (
                    <LogoutBtn handler={logoutHandler} loader={isLoggingOut}>
                      {list?.label}
                    </LogoutBtn>
                  ) : (
                    <Link to={list?.path} className={Style.profileLink}>
                      {list?.label}
                    </Link>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Navbar;
