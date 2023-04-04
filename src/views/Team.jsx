// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/pagination";
// import { Pagination } from "swiper";
// import { teamData } from "../components/TeamData";
import { teamData } from "../components/TeamData";
import TeamBg from "../assets/teamBg.webp";

export default function Team() {
  return (
    <>
      <div className="w-full h-full relative lg:hidden">
        <img
          className="w-full h-full object-cover"
          src={TeamBg}
          alt="about image"
        />
        <h2 className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-[25px] font-bold text-[#274C5B] md:text-[40px]">
          Our Team
        </h2>
      </div>
      <div className="w-[300px] md:w-full mx-auto flex flex-col justify-center items-center text-center my-[2rem] gap-[5px]">
        <p className="cursive text-[#7EB693] md:text-[36px] lg:mt-[2rem]">
          Team
        </p>
        <h2 className="text-[20px] font-[900] text-[#274C5B] md:text-[40px]">
          Our Organic Experts
        </h2>
        <p className="leading-[30px] md:mx-[4rem] md:text-[20px] text-[#525C60] lg:w-[852px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores
          tenetur inventore quae itaque numquam illum sint maiores quas vitae
          possimus pariatur magni recusandae officiis reprehenderit quasi
          doloribus ut natus suscipit ea perspiciatis quo cupiditate porro, iste
          at? Molestias, veritatis aut.
        </p>
      </div>
      {/* <Swiper
        slidesPerView={2}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="myS"
      >
        {teamData.map((teamEl, index) => (
          <SwiperSlide key={index}>
            <div>
              <div className="flex flex-col justify-center">
                <img
                  className="md:w-[350px] md:mx-auto"
                  src={teamEl.image}
                  alt="Giovani"
                />
                <h2 className="text-[20px] font-[900] text-[#274C5B]">
                  {teamEl.fullname}
                </h2>
                <div className="flex justify-between items-center">
                  <p className="cursive text-[#7EB693] text-[22px]">
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
      </Swiper> */}
      <div className="lg:flex lg:gap-[25px] lg:w-[950px] lg:flex-wrap lg:mx-auto">
        {teamData.map((teamEl, index) => (
          <div key={index} className="my-[3rem]">
            <div className="flex flex-col justify-center items-center">
              <div>
                <div className="lg:max-w-[350px] lg:overflow-hidden lg:rounded-t-[30px]">
                  <img
                    className="w-[300px] hover:lg:scale-[1.1] lg:duration-[200ms]"
                    src={teamEl.image}
                    alt="Team member"
                  />
                </div>
                <div className="self-start">
                  <h2 className="text-[20px]  md:text-[30px] font-[900] text-[#274C5B] md:pt-[2rem]">
                    {teamEl.fullname}
                  </h2>
                </div>
              </div>
              <div className="flex justify-between items-center w-[300px]">
                <p className="cursive text-[#7EB693] text-[22px] md:text-[30px]">
                  {teamEl.profession}
                </p>
                <div className="flex justify-center items-center gap-[15px] imgIcons ">
                  <img src={teamEl.instagramIcon} alt="social media" />
                  <img src={teamEl.facebookIcon} alt="social media" />
                  <img src={teamEl.twiterIcon} alt="social media" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
