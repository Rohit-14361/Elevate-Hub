import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { useStore } from "zustand";
import useUserStore from "../store/user";
import { Dropdown, Menu } from "antd";
import { removeToken } from "../helper";
function Nav() {
  const { user, setUser } = useUserStore();
  const navigate = useNavigate();

  const signUpMentorBtn = () => {
    navigate("/signup/mentor");
  };
  const signInButtonClick = () => {
    navigate("/login");
  };

  const signUpStudentBtn = () => {
    navigate("/signup/student");
  };

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const onLogoutButtonClick = () => {
    removeToken();
    setUser(null);
    navigate("/");
  };
  const menu = (
    <Menu>
      {/* Dashboard Menu Item */}
      <Menu.Item>
        <NavLink to="/dashboard/profile">Dashboard </NavLink>
      </Menu.Item>

      <Menu.Item>
        <button onClick={onLogoutButtonClick}>Logout</button>
      </Menu.Item>
    </Menu>
  );
  return (
    <div className="bg-white">
      <div className="px-4 py-5 mx-auto sm:max-w-xl  lg:max-w-screen md:px-24 ">
        <div className="relative flex items-center justify-between">
          <div className="flex items-center">
            <NavLink>
              <span className="ml-2 text-2xl font-bold text-green-700">
                Elevate Hub
              </span>
            </NavLink>
          </div>
          {/* mobile-menu button */}

          {!user && (
            <div className="lg:hidden flex items-center">
              <button
                className="text-gray-600 focus:outline-none"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="text-2xl">&#9776;</span>
              </button>
            </div>
          )}
          {/* desktop navigation when user is not  logged in*/}
          {!user ? (
            <ul className="items-center hidden space-x-8 lg:flex">
              <li>
                <button
                  onClick={signUpMentorBtn}
                  className="h-12 rounded-md px-6 font-medium tracking-wide hover:text-green-700 text-gray cursor-pointer border-4 border-green-400 bg-green-500"
                >
                  Become a Mentor with Us
                </button>
              </li>
              <li>
                <button
                  className="h-12 px-6 font-medium tracking-wide hover:text-green-700 cursor-pointer text-gray rounded-md border-none"
                  onClick={signInButtonClick}
                >
                  Sign in
                </button>
              </li>
              <li>
                <button
                  className="text-white rounded-md h-12 px-6 font-medium tracking-wide cursor-pointer hover:text-green-700  border-4 border-green-500 bg-green-500"
                  onClick={signUpStudentBtn}
                >
                  Sign up
                </button>
              </li>
            </ul>
          ) : (
            <Dropdown trigger={["hover"]} overlay={menu}>
              <button>{user.name.charAt(0).toUpperCase()}</button>
            </Dropdown>
          )}
          {/* when isMobileIsOpen true */}

          {!user && isMobileMenuOpen && (
            <div className="absolute top-16 left-0  w-full bg-white shadow-lg p-4 space-y-4 lg:hidden z-10">
              <button
                onClick={signUpMentorBtn}
                className="block w-full text-center py-2 font-medium tracking-wide text-black bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white"
              >
                Become a Mentor with Us
              </button>

              {/* signin */}
              <button
                onClick={signInButtonClick}
                className="block w-full text-center py-2 font-medium tracking-wide text-green-700 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white"
              >
                Sign In
              </button>
              {/* signup */}
              <button
                onClick={signUpStudentBtn}
                className="block w-full text-center py-2 font-medium tracking-wide text-black bg-green-500 rounded-md hover:bg-green-600 transition-all duration-300 hover:text-white"
              >
                Sign Up
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Nav;
