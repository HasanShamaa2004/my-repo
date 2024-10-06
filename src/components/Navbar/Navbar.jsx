import { useState } from "react";
// import { useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import { BsChevronRight } from "react-icons/bs";
import { BiSearch } from "react-icons/bi";
// import { useUser } from "../../hooks/UserName";

import { FiLogOut } from "react-icons/fi";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  //   const navigate = useNavigate();
  const searchOptions = [{ label: "projects", path: "/main-page/projects" }];

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const filteredOptions = searchOptions.filter((option) =>
    option.label.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOptionClick = (path) => {
    setSearchTerm("");
    navigate(path);
  };

  // const { user } = useUser();
  const handelLogout = () => {
    console.log("logout ....");
  };

  return (
    <nav style={{ backgroundColor: "white" }} className="sticky top-0 z-10">
      <div className="text-gray-600 font-bold py-6 px-12 flex justify-between items-center shadow-md">
        <div className="relative pl-4 w-[34%]">
          <input
            type="search"
            value={searchTerm}
            onChange={handleSearchChange}
            className="placeholder:text-[#A6A6A6] text-gray-800 placeholder:text-left p-2 pl-8 bg-[#f5f6fa] rounded-lg w-[100%] outline-[#D5D5D5]"
            placeholder="Search"
          />
          <BiSearch className="text-[#A6A6A6] absolute left-6 top-3" />
          {searchTerm && (
            <ul className="absolute z-10 h-[300px] overflow-y-scroll bg-white w-full mt-1 rounded-lg shadow-lg">
              {filteredOptions.length > 0 ? (
                filteredOptions.map((option, index) => (
                  <li
                    key={index}
                    className="px-4 py-2 hover:bg-gray-200 cursor-pointer text-left"
                    onClick={() => handleOptionClick(option.path)}
                  >
                    {option.label}
                  </li>
                ))
              ) : (
                <li className="px-4 py-2 text-gray-500 text-left">
                  No results found
                </li>
              )}
            </ul>
          )}
        </div>
        <div className="relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="flex items-center focus:outline-none"
          >
            <div
              className={`flex items-center ml-2 transition-all duration-300 ease-in-out`}
            >
              <BsChevronRight
                className={`${
                  dropdownOpen ? "rotate-90" : ""
                } text-primary w-4 mr-2 h-4 transition-all duration-200 ease-in`}
              />
            </div>
            <FaUserCircle className="w-8 h-8" />
          </button>
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-56 bg-white text-gray-800 rounded-md shadow-lg py-2">
              <div className="px-4 py-2 hover:bg-gray-200">
                <div className="flex flex-col">
                  <span className="text-gray-500">Username</span>
                  <span className="font-bold">Admin</span>
                </div>
              </div>
              <div
                className="flex items-center justify-between px-4 py-2 hover:bg-gray-200 cursor-pointer"
                onClick={handelLogout}
              >
                <span>Logout</span>
                <FiLogOut className="h-5 w-5 text-primary" />
              </div>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
