import { newsData } from "../components/NewsData";

import BlogBg from "../assets/newsBg.webp";
import RightArrow from "../assets/Aerrow.svg";

export default function Blog() {
  return (
    <>
      <div className="w-full h-full relative lg:hidden">
        <img
          className="w-full h-full object-cover"
          src={BlogBg}
          alt="about image"
        />
        <h2 className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-[25px] font-bold text-[#274C5B] md:text-[40px]">
          News
        </h2>
      </div>
      <div className="lg:pt-[4rem] lg:flex lg:gap-[2rem] lg:flex-wrap lg:justify-center">
        {newsData.map((data, index) => (
          <div key={index} className="mb-[10rem] mt-[1rem]">
            <div className="relative drop-shadow-md flex flex-col justify-center items-center md:w-[670px] md:mx-auto">
              <div className="h-[260px] md:h-[524px] w-full lg:h-[320px]">
                <img
                  className="h-full w-full object-cover rounded-[20px]"
                  src={data.imageBg}
                  alt="veg"
                />
              </div>
              <div className="absolute top-0 leflt-0 w-full">
                <div className="w-[69px] h-[69px] bg-white rounded-[50%] flex flex-col justify-center items-center mt-[10px] ml-[10px]">
                  <p>{data.number}</p>
                  <p>{data.month}</p>
                </div>
              </div>
              <div className="absolute top-0 left-0 mt-[8rem] md:mt-[18rem] lg:mt-[10rem] w-full">
                <div className="max-w-[340px] md:max-w-[612px] md:h-[282px] mx-[auto] bg-white px-[20px] py-[20px] md:px-[40px] md:py-[40px] rounded-[20px]">
                  <div className="flex items-center gap-[10px]">
                    <img src={data.icon} alt="icon" />
                    <p>{data.author}</p>
                  </div>
                  <div>
                    <h2 className="font-[900] text-[20px] w-[252px] md:text-[25px] md:w-full text-[#274C5B]">
                      {data.title}
                    </h2>
                    <p className="my-[10px] md:w-[444px] md:text-[20px]">
                      {data.text}
                    </p>
                  </div>
                  <div className="flex items-center bg-[#EFD372] px-[20px] py-[15px] gap-[10px] w-[160px] rounded-[16px] md:mt-[1.3rem] group">
                    <button className="text-[#274C5B] font-bold">
                      Read More
                    </button>
                    <img
                      className="group-hover:lg:translate-x-[10px] group-hover:lg:scale-[1.2] lg:duration-[200ms]"
                      src={RightArrow}
                      alt="rightArrow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
