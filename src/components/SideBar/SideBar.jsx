import React, { useEffect, useState } from "react";
import { BsChevronRight } from "react-icons/bs";
import { navLinks } from "../Content/index";
import { CiLogout } from "react-icons/ci";
import { Link, useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { IoMenu } from "react-icons/io5";

const SideBar = () => {
  const [open, setOpen] = useState(true);
  const [active, setActive] = useState(null);
  const [openSubMenu, setOpenSubMenu] = useState(null);
  const navigate = useNavigate();

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleLogout = () => {
    console.log("logout ....");
  };

  const handleSelectOption = (linkId, isSubLink = false) => {
    setActive(linkId);
    localStorage.setItem("activeLinkId", linkId.toString());
    if (!isSubLink) {
      setOpenSubMenu(openSubMenu === linkId ? null : linkId);
    }
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 835) {
        setOpen(false);
      } else {
        setOpen(true);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const location = useLocation();
  useEffect(() => {
    const paths = {
      "/projects": 2,
    };
    const activeLinkId = paths[location.pathname];
    setActive(activeLinkId);

    if (activeLinkId && !Number.isInteger(activeLinkId)) {
      const mainLinkId = Math.floor(activeLinkId);
      setOpenSubMenu(mainLinkId);
    }
  }, [location.pathname]);

  useEffect(() => {
    const savedActiveLinkId = localStorage.getItem("activeLinkId");
    if (savedActiveLinkId !== null) {
      setActive(parseInt(savedActiveLinkId, 10));
    }
  }, [active]);
  useEffect(() => {
    const savedActiveLinkId = localStorage.getItem("activeLinkId");
    if (savedActiveLinkId !== null) {
      setActive(parseInt(savedActiveLinkId, 10));
    }
  }, []);
  return (
    <aside
      className={`h-screen bg-white pt-8 ${
        open ? "w-1/4" : "w-16"
      } transition-all duration-300 ease-in-out flex flex-col relative z-50 border shadow-lg border-r-secondary`}
    >
      <div
        className="absolute right-[-45px] text-secondary top-7 z-50 cursor-pointer transition-transform duration-300 ease-in-out"
        style={{ transform: open ? "rotate(180deg)" : "none" }}
        onClick={handleOpen}
      >
        <IoMenu className="text-secondary w-8 h-8" />
      </div>
      <div className="flex items-center gap-4 justify-center">
        <img
          src={""}
          alt="logo"
          className={`object-contain mb-5 ${open ? "w-22 h-10" : "w-14 h-7"}`}
        />
        <h2
          className={`${
            open ? "block" : "hidden"
          } mb-6 text-xl text-gray-800 font-bold`}
        >
          Dashboard
        </h2>
      </div>
      <hr className="border-secondary mx-8 border-opacity-25" />
      <ul className="flex flex-col mt-8 gap-1 text-gray-800 overflow-y-auto">
        {navLinks.map((link) => (
          <div key={link._id}>
            <li
              className={`flex items-center justify-between p-2 rounded-md mx-3 my-1 transition-all duration-300 ease-in-out ${
                link._id === active
                  ? "bg-secondary text-white font-bold"
                  : "hover:bg-secondary hover:text-white"
              }`}
              onClick={() => {
                handleSelectOption(link._id);
                if (link.id) {
                  navigate(link.id);
                }
              }}
            >
              <div className="flex items-center">
                <link.icon className="w-5 h-5 mr-2" />
                {open && <h4 className="mr-2 cursor-pointer">{link.title}</h4>}
              </div>
              {link.subLinks && link.subLinks.length > 0 && (
                <BsChevronRight
                  className={`w-5 h-5 transition-transform duration-200 ease-in ${
                    openSubMenu === link._id ? "rotate-90" : ""
                  }`}
                />
              )}
            </li>
            {link.subLinks &&
              link.subLinks.length > 0 &&
              openSubMenu === link._id && (
                <ul className="pl-4">
                  {link.subLinks.map((subLink) => (
                    <Link to={subLink.id} key={subLink._id}>
                      <li
                        className={`flex items-center p-2 rounded-md mx-3 my-1 transition-all duration-300 ease-in-out ${
                          subLink._id === active
                            ? "bg-secondary text-white font-bold"
                            : "bg-transparent text-gray-800 opacity-60 hover:opacity-100 hover:bg-secondary hover:text-white"
                        }`}
                        onClick={() => handleSelectOption(subLink._id, true)}
                      >
                        <subLink.icon className="w-5 h-5" />
                        {open && (
                          <h4 className="mr-2 cursor-pointer">
                            {subLink.title}
                          </h4>
                        )}
                      </li>
                    </Link>
                  ))}
                </ul>
              )}
          </div>
        ))}
      </ul>
      <ul className="flex flex-col mt-auto mb-4">
        <li
          className="flex items-center p-2 rounded-md mx-3 my-1 transition-opacity duration-300 ease-in-out hover:bg-secondary hover:text-white cursor-pointer"
          onClick={handleLogout}
        >
          <CiLogout className="w-5 h-5 mr-2" />
          {open && <h4 className="mr-2 ">Logout</h4>}
        </li>
      </ul>
    </aside>
  );
};

export default SideBar;
