import NotFoundBg from "../assets/404Bg.webp";
import RightArrow from "../assets/Aerrow.svg";
import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <div>
      <div className="relative w-full h-full">
        <div className="w-full h-[280px] lg:h-full">
          <img
            className="w-full h-full object-cover"
            src={NotFoundBg}
            alt="Not Found Page"
          />
        </div>
        <div className="absolute top-0 right-0 flex flex-col justify-center items-end md:pr-[10rem] lg:pr-[0px] lg:mr-[25rem] w-full h-full px-[10px]">
          <div>
            <h1 className="text-[50px] lg:text-[170px] text-[#8FA8A8] font-[900]">
              404
            </h1>
            <h2 className="text-[25px] lg:text-[50px] text-[#274C5B] font-bold">
              Page not found
            </h2>
            <p className="w-[144px] text-[#525C60] lg:w-full">
              The page you are looking for doesn't exist or has been moved
            </p>
            <div className="bg-[#EFD372] px-[10px] py-[15px] w-[180px] lg:w-[200px] lg:px-[20px] lg:py-[20px] rounded-[16px] mt-[5px] md:mt-[1.3rem] group">
              <NavLink to="/" className="flex gap-[10px]">
                <button className="text-[#274C5B] font-bold pl-[5px]">
                  Go to Homepage
                </button>
                <img
                  className="group-hover:lg:translate-x-[10px] group-hover:lg:scale-[1.2] lg:duration-[200ms]"
                  src={RightArrow}
                  alt="rightArrow"
                />
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
