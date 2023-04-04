import { agroServices, agroServicesPlus } from "../components/AgroServicesData";

import ServicesBg from "../assets/ServicesBg.webp";
import WhiteBean from "../assets/whiteBean.webp";
import RightArrow from "../assets/Aerrow.svg";

export default function Services() {
  return (
    <>
      {/* ------------------- Services Header Background Start ------------------*/}
      <div className="w-full h-full relative lg:hidden">
        <img
          className="w-full h-full object-cover"
          src={ServicesBg}
          alt="about image"
        />
        <h2 className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-[25px] font-bold text-[#274C5B] md:text-[40px]">
          Services
        </h2>
      </div>
      {/* ------------------- Services Header Background End ------------------*/}
      {/* ------------------- What We Grow Start ------------------*/}
      <div className="w-[300px] md:w-full mx-[auto] text-center my-[2rem] lg:mt-[5rem]">
        <p className="cursive text-[#7EB693] md:text-[36px]">What we Grow</p>
        <h2 className="text-[25px] font-bold text-[#274C5B] md:text-[40px] md:w-[385px] md:mx-auto">
          Better Agricultural for Better Future
        </h2>
      </div>
      <div className="lg:w-full lg:flex lg:justify-center lg:items-center lg:px-[10rem]">
        <div className="lg:flex lg:flex-col lg:text-right">
          {agroServices.map((agroEl, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[585px] flex flex-col justify-center items-center gap-[5px] my-[2rem] md:gap-[20px] mx-[auto] lg:items-end lg:gap-[5px] lg:p-[30px] hover:lg:shadow-[0_5px_15px_rgba(0,0,0,0.35)] lg:duration-[150ms] lg:w-full lg:rounded-[30px] lg:my-[10px] group"
            >
              <img
                className="md:w-[100px] lg:w-[60px] group-hover:lg:scale-[1.2] lg:duration-[200ms]"
                src={agroEl.image}
                alt="agro services images"
              />
              <h2 className="text-[20px] font-[900] text-[#274C5B] md:text-[30px]">
                {agroEl.title}
              </h2>
              <p className="leading-[30px] md:text-[20px] md:leading-[40px] lg:w-[400px]">
                {agroEl.text}
              </p>
              <div className="flex gap-[5px] px-[10px] py-[15px] bg-[#274C5B] rounded-[10px] text-[#fff] group-hover:lg:bg-[#EFD372] group-hover:lg:text-[#274C5B] group-lg:duration-[200ms] lg:cursor-pointer">
                <button>Read More</button>
                <img src={RightArrow} alt="rightArrow" />
              </div>
            </div>
          ))}
        </div>
        <img
          className="mx-[auto] lg:object-cover"
          src={WhiteBean}
          alt="agro services backgroubd"
        />
        <div className="lg:flex lg:flex-col">
          {agroServicesPlus.map((plusEl, index) => (
            <div
              key={index}
              className="w-[300px] md:w-[585px] flex flex-col justify-center items-center gap-[5px] my-[2rem] md:gap-[20px] mx-[auto] lg:items-start lg:gap-[5px] hover:lg:shadow-[0_5px_15px_rgba(0,0,0,0.35)] lg:duration-[150ms] lg:p-[30px] lg:w-full lg:rounded-[30px] lg:my-[10px] group"
            >
              <img
                className="md:w-[100px] lg:w-[60px] group-hover:lg:scale-[1.2] lg:duration-[200ms]"
                src={plusEl.image}
                alt="agro services images"
              />
              <h2 className="text-[20px] font-[900] text-[#274C5B] md:text-[30px]">
                {plusEl.title}
              </h2>
              <p className="leading-[30px] md:text-[20px] md:leading-[40px] lg:w-[400px]">
                {plusEl.text}
              </p>
              <div className="flex gap-[5px] px-[10px] py-[15px] bg-[#274C5B] rounded-[10px] text-[#fff] group-hover:lg:bg-[#EFD372] group-hover:lg:text-[#274C5B] group-lg:duration-[200ms] lg:cursor-pointer">
                <button>Read More</button>
                <img src={RightArrow} alt="rightArrow" />
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex items-center border border-[#274C5B] hover:lg:bg-[#EFD372] hover:lg:border-[#fff] px-[20px] py-[15px] gap-[10px] w-[200px] rounded-[16px] mx-[auto] lg:mt-[2rem] lg:cursor-pointer lg:px-[25px] lg:py-[20px] lg:w-[210px] group">
        <button className="text-[#274C5B] text-[20px] font-bold">
          Explore More
        </button>
        <img
          className="group-hover:lg:translate-x-[10px] group-hover:lg:scale-[1.2] lg:duration-[200ms]"
          src={RightArrow}
          alt="rightArrow"
        />
      </div>
      {/* ------------------- What We Grow End ------------------*/}
    </>
  );
}
