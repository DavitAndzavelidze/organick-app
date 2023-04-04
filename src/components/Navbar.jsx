import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { NavLink, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

import Logo from "../assets/Logo.svg";

import OrangeBg from "../assets/orangeBg.webp";

import iconFb from "../assets/Fb.svg";
import iconTw from "../assets/Twiter.svg";
import iconPinterest from "../assets/Pintrest.svg";

const Instagram = (props) => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    className={props.class}
    fill={props.fill}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.6585 2.26209C14.7231 2.26515 15.7431 2.67374 16.4958 3.3986C17.2486 4.12347 17.6729 5.10572 17.6761 6.13084V13.8675C17.6729 14.8926 17.2486 15.8749 16.4958 16.5997C15.7431 17.3246 14.7231 17.7332 13.6585 17.7362H5.6243C4.55976 17.7332 3.53973 17.3246 2.78698 16.5997C2.03423 15.8749 1.60994 14.8926 1.60676 13.8675V6.13084C1.60994 5.10572 2.03423 4.12347 2.78698 3.3986C3.53973 2.67374 4.55976 2.26515 5.6243 2.26209H13.6585ZM13.6585 0.714844H5.6243C2.53087 0.714844 0 3.15198 0 6.13084V13.8675C0 16.8464 2.53087 19.2835 5.6243 19.2835H13.6585C16.752 19.2835 19.2828 16.8464 19.2828 13.8675V6.13084C19.2828 3.15198 16.752 0.714844 13.6585 0.714844Z"
      fill="#274C5B"
    />
    <path
      d="M14.8638 6.13358C14.6254 6.13358 14.3924 6.06552 14.1942 5.938C13.996 5.81047 13.8416 5.62922 13.7504 5.41716C13.6591 5.2051 13.6353 4.97175 13.6818 4.74663C13.7283 4.52151 13.8431 4.31472 14.0116 4.15241C14.1802 3.99011 14.3949 3.87958 14.6287 3.8348C14.8625 3.79002 15.1048 3.813 15.325 3.90084C15.5452 3.98868 15.7334 4.13743 15.8659 4.32828C15.9983 4.51913 16.069 4.74351 16.069 4.97304C16.0693 5.12554 16.0384 5.2766 15.9779 5.41755C15.9175 5.5585 15.8287 5.68657 15.7167 5.7944C15.6048 5.90223 15.4718 5.9877 15.3254 6.04591C15.179 6.10411 15.0222 6.13391 14.8638 6.13358ZM9.64151 6.907C10.2772 6.907 10.8986 7.08851 11.4271 7.42859C11.9556 7.76866 12.3676 8.25202 12.6108 8.81754C12.8541 9.38306 12.9177 10.0053 12.7937 10.6057C12.6697 11.2061 12.3636 11.7575 11.9141 12.1903C11.4646 12.6232 10.892 12.9179 10.2685 13.0374C9.64507 13.1568 8.99886 13.0955 8.41158 12.8612C7.82431 12.627 7.32236 12.2303 6.96921 11.7214C6.61606 11.2124 6.42756 10.614 6.42756 10.0019C6.42847 9.18136 6.76738 8.39467 7.36991 7.81445C7.97245 7.23423 8.7894 6.90788 9.64151 6.907ZM9.64151 5.35975C8.68806 5.35975 7.75603 5.63201 6.96327 6.14209C6.17051 6.65218 5.55263 7.37719 5.18776 8.22543C4.82289 9.07368 4.72742 10.0071 4.91343 10.9076C5.09944 11.808 5.55857 12.6352 6.23275 13.2844C6.90694 13.9336 7.76591 14.3758 8.70104 14.5549C9.63616 14.734 10.6054 14.6421 11.4863 14.2907C12.3672 13.9394 13.1201 13.3444 13.6498 12.581C14.1795 11.8176 14.4622 10.92 14.4622 10.0019C14.4622 8.77073 13.9543 7.58998 13.0503 6.71941C12.1462 5.84883 10.92 5.35975 9.64151 5.35975Z"
      fill="#274C5B"
    />
  </svg>
);

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const { pathname } = useLocation();

  return (
    <>
      <nav>
        {nav ? (
          <div className="bg-black/80 fixed w-full h-full z-10 top-0 left-0 md:hidden"></div>
        ) : (
          ""
        )}
        <div>
          <div className="w-full items-center px-[14px] lg:px-[36px] flex justify-between h-[64px] bg-white lg:h-[76px] fixed top-0 left-0 z-[100] ">
            <div className="text-[32px] md:text-[20px] md:items-center flex gap-[10px]">
              <img className="h-[50px]" src={Logo} alt="Company Logo" />
              <p className="font-bold text-[#274C5B]">Organick</p>
            </div>
            <div onClick={handleNav}>
              {!nav ? (
                <FaBars
                  size="40px"
                  color="#2D672F"
                  className="md:hidden cursor-pointer"
                />
              ) : (
                <FaTimes
                  color="#2D672F"
                  size="40px"
                  className="absolute top-0 right-0 mt-[10px] mr-[10px] cursor-pointer z-[100] md:hidden"
                />
              )}
            </div>
            <ul className="hidden md:flex md:items-center md:text-[20px] md:space-x-6 ">
              <NavLink to="/" className={pathname === "/" ? "activeCl" : ""}>
                <li className="navlink nav-item">
                  <button>Home</button>
                </li>
              </NavLink>
              <NavLink
                to="/about"
                className={pathname === "/about" ? "activeCl" : ""}
              >
                <li className="navlink nav-item">
                  <button>About</button>
                </li>
              </NavLink>
              <NavLink
                to="/services"
                className={pathname === "/services" ? "activeCl" : ""}
              >
                <li className="navlink nav-item">
                  <button>Services</button>
                </li>
              </NavLink>
              <NavLink
                to="/portfolio"
                className={pathname === "/portfolio" ? "activeCl" : ""}
              >
                <li className="navlink nav-item">
                  <button>Portfolio</button>
                </li>
              </NavLink>
              <NavLink
                to="/team"
                className={pathname === "/team" ? "activeCl" : ""}
              >
                <li className="navlink nav-item">
                  <button>Team</button>
                </li>
              </NavLink>
              <NavLink
                to="/blog"
                className={pathname === "/blog" ? "activeCl" : ""}
              >
                <li className="navlink nav-item">
                  <button>Blog</button>
                </li>
              </NavLink>
              <NavLink
                to="/contact"
                className={pathname === "/contact" ? "activeCl" : ""}
              >
                <li className="navlink nav-item">
                  <button>Contact</button>
                </li>
              </NavLink>
            </ul>
          </div>

          <ul
            className={
              nav
                ? `fixed top-0 left-0 z-[50] w-full font-bold text-[22px] text-center duration-300 md:hidden`
                : `fixed top-[-100%] left-0 z-[50] w-full font-bold text-[22px] text-center  duration-300 md:hidden overflow-hidden`
            }
          >
            <div className="flex flex-col gap-[20px] md:flex pt-[5rem] pb-[2rem] md:mt-[0px] text-white text-[22px] items-left w-full bg-slate-700 md:h-full z-100">
              <NavLink to="/">
                <li className="navlinkm" onClick={handleNav}>
                  Home
                </li>
              </NavLink>
              <NavLink to="/about">
                <li className="navlinkm" onClick={handleNav}>
                  About
                </li>
              </NavLink>
              <NavLink to="/services">
                <li className="navlinkm" onClick={handleNav}>
                  Services
                </li>
              </NavLink>
              <NavLink to="/portfolio">
                <li className="navlinkm" onClick={handleNav}>
                  Portfolio
                </li>
              </NavLink>
              <NavLink to="/team">
                <li className="navlinkm" onClick={handleNav}>
                  Team
                </li>
              </NavLink>
              <NavLink to="/blog">
                <li className="navlinkm" onClick={handleNav}>
                  Blog
                </li>
              </NavLink>
              <NavLink to="/contact">
                <li className="navlinkm" onClick={handleNav}>
                  Contact
                </li>
              </NavLink>
            </div>
          </ul>
        </div>
      </nav>

      <div className="mt-[4rem]">
        <Outlet />
      </div>

      {/*---------------------- Footer Start -------------------*/}
      <div className="relative mt-[4rem]">
        <div className="h-[264px]">
          <img
            className="h-full w-full object-cover"
            src={OrangeBg}
            alt="orange background"
          />
        </div>
        <div className=" w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center gap-[13px] md:mx-auto lg:flex-row">
          <div className="md:w-[568px]">
            <h2 className="text-[25px] md:text-[40px] text-[#fff] font-bold w-[170px] md:w-[290px]">
              Subscribe to our Newsletter
            </h2>
          </div>
          <div className="md:flex md:justify-start md:items-center md:w-[568px] md:gap-[10px]">
            <form action="#">
              <input
                className="px-[20px] py-[10px] md:px-[40px] md:py-[20px] rounded-[16px] focus:outline-none"
                type="email"
                name="email"
                id="email"
                placeholder="Your Email Address"
              />
            </form>
            <button className="bg-[#274C5B] text-[#fff] px-[20px] py-[10px] rounded-[16px] text-[20px] font-bold mt-[20px] md:px-[40px] md:py-[17px] md:mt-[0px]">
              Subscribe
            </button>
          </div>
        </div>
      </div>
      <footer className="my-[2rem] md:relative lg:w-[1024px] lg:mx-auto">
        <div className="md:absolute md:top-0 md:left-0 md:mx-auto md:w-full md:mt-[2rem]">
          <div className="text-[32px] flex justify-center items-center gap-[10px]">
            <img className="h-[50px]" src={Logo} alt="Company Logo" />
            <p className="font-bold text-[#274C5B]">Organick</p>
          </div>
          <p className="w-[300px] mx-auto my-[1rem] md:w-[200px] lg:w-[400px]">
            Simply dummy text of the printing and typesetting industry. Lorem
            Ipsum simply dummy text of the printing{" "}
          </p>
          <div className="w-[300px] mx-auto my-[1rem] ">
            <div className="flex justify-between items-center mt-[2rem] md:mt-[4rem] w-[285px] mx-[auto]">
              <div className="bg-[#EFF6F1] px-[20px] py-[20px] rounded-[50%] hover:lg:bg-[#EFD372] lg:duration-[200ms] hover:lg:translate-y-[-10px]">
                <Instagram />
              </div>
              <img
                className="bg-[#EFF6F1] px-[20px] py-[20px] rounded-[50%] hover:lg:bg-[#EFD372] lg:duration-[200ms] hover:lg:translate-y-[-10px]"
                src={iconFb}
                alt="Facebook icon"
              />
              <img
                className="bg-[#EFF6F1] px-[20px] py-[20px] rounded-[50%] hover:lg:bg-[#EFD372] lg:duration-[200ms] hover:lg:translate-y-[-10px]"
                src={iconTw}
                alt="Twiter icon"
              />
              <img
                className="bg-[#EFF6F1] px-[20px] py-[20px] rounded-[50%] hover:lg:bg-[#EFD372] lg:duration-[200ms] hover:lg:translate-y-[-10px]"
                src={iconPinterest}
                alt="Pintereset icon"
              />
            </div>
          </div>
        </div>
        <div className="w-[285px] flex flex-col justify-center mx-auto md:flex-row md:justify-between md:w-full md:px-[2rem]">
          <div className="my-[2rem] flex flex-col gap-[20px] md:w-[210px] md:border-r-2 md:border-[#d4d4d4] md:pr-[1rem] md:text-end">
            <h2 className="text-[20px] font-bold">Contact Us</h2>
            <div>
              <h3>Email</h3>
              <p>needhelp@Organia.com</p>
            </div>
            <div>
              <h3>Phone</h3>
              <p>888 888 888</p>
            </div>
            <div>
              <h3>Address</h3>
              <p>88 road, borklyn street, USA</p>
            </div>
          </div>
          <div className="my-[2rem] flex flex-col gap-[20px] md:w-[210px] md:border-l-2 md:border-[#d4d4d4] md:pl-[1rem]">
            <h2 className="text-[20px] font-bold">Utility Pages</h2>
            <h3>Style Guide</h3>
            <h3>404 Not Found</h3>
            <h3>Password Protected</h3>
            <h3>Licences</h3>
            <h3>Changelog</h3>
          </div>
        </div>
        <div className="text-center border-t-2 pt-[1rem] md:mt-[3rem]">
          <p>
            Copyright © <span className="font-bold">Organick</span> | Designed
            by
            <span className="font-bold"> VictorFlow</span> Templates - Powered
            by
            <span className="font-bold"> Webflow</span>
          </p>
        </div>
      </footer>
      {/*---------------------- Footer End -------------------*/}
    </>
  );
}
