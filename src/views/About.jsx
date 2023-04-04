import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import { teamData } from "../components/TeamData";

import "swiper/css";
import "swiper/css/pagination";
import AboutBg from "../assets/aboutBg.webp";
import SaladBg from "../assets/saladAbout.webp";
import TracktorIcon from "../assets/tracktor.svg";
import BuildingIcon from "../assets/building.svg";
import RightArrow from "../assets/Aerrow.svg";
import GreenVeg from "../assets/greenVeg.webp";
import Circle from "../assets/circle.svg";
import ReturnImg from "../assets/return.svg";
import FreshImg from "../assets/fresh.svg";
import SupportImg from "../assets/support.svg";
import SecuredImg from "../assets/secured.svg";

export default function About() {
  return (
    <>
      {/* ------------------- About Header Background Start ------------------*/}
      <div className="w-full h-full relative lg:hidden">
        <img
          className="w-full h-full object-cover"
          src={AboutBg}
          alt="about image"
        />
        <h2 className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-[25px] md:text-[40px] font-bold text-[#274C5B]">
          About Us
        </h2>
      </div>
      {/* ------------------- About Header Background End ------------------*/}
      {/* ------------------- About Us Start ------------------*/}
      <div className="lg:flex lg:justify-center lg:items-center lg:pt-[2rem]">
        <div className="w-[222px] md:w-[580px] mx-auto lg:w-[840px]">
          <img src={SaladBg} alt="salad background" />
        </div>
        <div className="w-[300px] md:w-full mx-[auto] md:mx-[3rem] lg:w-[775px] lg:mx-auto">
          <p className="cursive text-[#7EB693] md:text-[36px]">About Us</p>
          <h2 className="text-[25px] font-bold w-[230px] md:w-[400px] text-[#274C5B] md:text-[40px]">
            We do Creative Things for Success
          </h2>
          <div className="md:w-[660px] md:text-[20px]">
            <p className="my-[1rem]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
            <p className="mb-[1rem]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley.
            </p>
          </div>
          <div className="md:flex md:items-center-center">
            <div className="flex items-center gap-[20px] md:w-[292px]">
              <img src={TracktorIcon} alt="traktor icon" />
              <p className="text-[#274C5B] text-[20px] font-bold">
                Modern Agriculture Equipment
              </p>
            </div>
            <div className="flex items-center gap-[20px] my-[2rem] md:w-[260px]">
              <img src={BuildingIcon} alt="building icon" />
              <p className="text-[#274C5B] text-[20px] font-bold">
                No growth hormones are used
              </p>
            </div>
          </div>
          <div className="flex items-center md:mx-[0px] bg-[#274C5B] hover:lg:bg-[#EFD372] px-[20px] py-[15px] lg:px-[25px] lg:py-[20px] gap-[10px] w-[200px] rounded-[16px] mx-[auto] group lg:cursor-pointer">
            <button className="text-[#fff] text-[20px] font-bold group-hover:lg:text-[#274C5B]">
              Explore More
            </button>
            <img
              className="group-hover:lg:translate-x-[10px] group-hover:lg:scale-[1.2] lg:duration-[200ms]"
              src={RightArrow}
              alt="rightArrow"
            />
          </div>
        </div>
      </div>
      {/* ------------------- About Us End ------------------*/}
      {/* ------------------- Why Choose Us Start ------------------*/}
      <div className="lg:bg-[#f8f8f8] lg:pt-[120px] lg:pb-[40px] lg:px-[10rem]">
        <div className="lg:flex lg:justify-center lg:items-center lg:w-full lg:flex-row-reverse">
          <div className="w-[300px] md:w-[678px] h-full mx-[auto] mt-[70px] mb-[28px] lg:mt-[0px] lg:mb-[0px]">
            <img
              className="w-full h-full object-cover rounded-[20px]"
              src={GreenVeg}
              alt="green vegetables"
            />
          </div>
          <div className="w-[300px] md:w-full md:px-[3rem] mx-auto lg:basis-[50%] lg:px-[0px]">
            <p className="cursive text-[#7EB693] md:text-[36px]">
              Why Choose us?
            </p>
            <h2 className="text-[20px] w-[230px] md:w-[500px] font-[900] text-[#274C5B] md:text-[40px]">
              We do not buy from the open market & traders.
            </h2>
            <p className="my-[1rem] md:text-[20px] md:w-[650px]">
              Simply dummy text of the printing and typesetting industry. Lorem
              had ceased to been the industry's standard the 1500s, when an
              unknown
            </p>
            <div className="bg-[#ECECEC] w-[230px] md:w-[270px] flex items-center gap-[7px] py-[20px] px-[15px] rounded-[50px] font-bold">
              <img src={Circle} alt="circle" />
              <p className="md:text-[20px]">100% Natural Product</p>
            </div>
            <p className="my-[1rem] md:ml-[3rem]">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
            <div className="bg-[#ECECEC] w-[230px] md:w-[270px] flex items-center gap-[7px] py-[20px] px-[15px] rounded-[50px] font-bold">
              <img src={Circle} alt="circle" />
              <p className="md:text-[20px]">Increases resistance</p>
            </div>
            <p className="my-[1rem] md:ml-[3rem]">
              Simply dummy text of the printing and typesetting industry Lorem
              Ipsum
            </p>
          </div>
        </div>
        <div className="w-[300px] md:w-full md:px-[3rem] mx-auto">
          <div className="text-center flex flex-col gap-[2rem] md:gap-[6rem] my-[4rem] md:my-[6rem] md:flex-row md:flex-wrap md:w-[539px] md:justify-center md:mx-auto md:w-full">
            <div className="lg:bg-[#fff] lg:px-[20px] lg:py-[40px] lg:rounded-[30px] hover:lg:drop-shadow-lg lg:duration-[200ms]">
              <img
                className="mx-[auto] px-[20px] py-[20px] bg-[#F9F8F8] rounded-[20px] mb-[10px]"
                src={ReturnImg}
                alt="return icon"
              />
              <h2 className="text-[20px] md:text-[25px] font-bold text-[#274C5B]">
                Return Policy
              </h2>
              <p className="md:w-[180px] md:mx-auto">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
            <div className="lg:bg-[#fff] lg:px-[20px] lg:py-[40px] lg:rounded-[30px] hover:lg:drop-shadow-lg lg:duration-[200ms]">
              <img
                className="mx-[auto] px-[20px] py-[20px] bg-[#F9F8F8] rounded-[20px] mb-[10px]"
                src={FreshImg}
                alt="fresh icon"
              />
              <h2 className="text-[20px] md:text-[25px] font-bold text-[#274C5B]">
                100% Fresh
              </h2>
              <p className="md:w-[180px] md:mx-auto">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
            <div className="lg:bg-[#fff] lg:px-[20px] lg:py-[40px] lg:rounded-[30px] hover:lg:drop-shadow-lg lg:duration-[200ms]">
              <img
                className="mx-[auto] px-[20px] py-[20px] bg-[#F9F8F8] rounded-[20px] mb-[10px]"
                src={SupportImg}
                alt="support icon"
              />
              <h2 className="text-[20px] md:text-[25px] font-bold text-[#274C5B]">
                Support 24/7
              </h2>
              <p className="md:w-[180px] md:mx-auto">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
            <div className="lg:bg-[#fff] lg:px-[20px] lg:py-[40px] lg:rounded-[30px] hover:lg:drop-shadow-lg lg:duration-[200ms]">
              <img
                className="mx-[auto] px-[20px] py-[20px] bg-[#F9F8F8] rounded-[20px] mb-[10px]"
                src={SecuredImg}
                alt="secured icon"
              />
              <h2 className="text-[20px] md:text-[25px] font-bold text-[#274C5B]">
                Secured Payment
              </h2>
              <p className="md:w-[180px] md:mx-auto">
                Simply dummy text of the printintypesetting industry.
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------- Why Choose Us End ------------------*/}
      {/* ------------------- Team Start ------------------*/}
      <div className="w-[320px] md:w-full mx-[auto] md:px-[4rem] lg:mt-[4rem]">
        <div className="lg:w-[852px] lg:mx-auto lg:text-center">
          <p className="cursive text-[#7EB693] md:text-[36px]">Team</p>
          <h2 className="text-[20px] font-[900] text-[#274C5B] md:text-[40px]">
            Our Organic Experts
          </h2>
          <p className="md:text-[20px] text-[#525C60]">
            Simply dummy text of the printing and typesetting industry. Lorem
            had ceased to been the industry's standard dummy text ever since the
            1500s, when an unknown printer took a galley.
          </p>
        </div>
        <Swiper
          breakpoints={{
            768: {
              width: 768,
              slidesPerView: 2,
            },
            1024: {
              width: 1024,
              slidesPerView: 4,
              spaceBetween: 90,
            },
          }}
          slidesPerView={1}
          spaceBetween={30}
          pagination={{ clickable: true }}
          modules={[Pagination]}
          className="mySwiperAbout"
        >
          {teamData.map((teamEl, index) => (
            <SwiperSlide key={index}>
              <div>
                <div className="flex flex-col justify-center md:w-[260px] md:mx-[0]">
                  <div className="w-[260px] h-[300px] lg:w-full mx-auto">
                    <img
                      className="md:w-full md:h-full md:object-cover "
                      src={teamEl.image}
                      alt="Giovani"
                    />
                  </div>
                  <h2 className="text-[20px] font-[900] text-[#274C5B]">
                    {teamEl.fullname}
                  </h2>
                  <div className="flex justify-between items-center">
                    <p className="cursive text-[#7EB693] md:text-[22px]">
                      {teamEl.profession}
                    </p>
                    <div className="flex justify-center items-center gap-[15px] imgIcons">
                      <img src={teamEl.instagramIcon} alt="social media" />
                      <img src={teamEl.facebookIcon} alt="social media" />
                      <img src={teamEl.twiterIcon} alt="social media" />
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      {/* ------------------- Team End ------------------*/}
    </>
  );
}
