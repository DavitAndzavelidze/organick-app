import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards } from "swiper";
import { useState } from "react";
import { swiperData } from "./SwiperData";
import { newsData } from "./NewsData";
import { Pagination } from "swiper";

import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/effect-cards";

import HomeBg from "../assets/homeBg.webp";
import RightArrow from "../assets/Aerrow.svg";
import Fruits from "../assets/fruits.webp";
import Vegetables from "../assets/vegetables.webp";
import IconOrganic from "../assets/iconOrganic.svg";
import IconQuality from "../assets/iconQuality.svg";
import TestimonialsBg from "../assets/testimonialsBg.webp";
import TestimonialsAvatar from "../assets/testimonialAvatar.webp";
import FieldBg from "../assets/fieldBg.webp";
import JuiceBg from "../assets/JuiceBg.webp";
import FoodBg from "../assets/foodBg.webp";
import CookisBg from "../assets/cookisBg.webp";
import Stars from "../assets/Star.svg";
import Flowers from "../assets/flowers.webp";

const organicList = [
  {
    id: 0,
    image: [JuiceBg],
    text: "Organic Juice",
  },
  {
    id: 1,
    image: [FoodBg],
    text: "Organic Food",
  },
  {
    id: 2,
    image: [CookisBg],
    text: "Organic Cookis",
  },
];

export default function Home() {
  const [noElement, setNoElement] = useState(2);
  const slice = newsData.slice(0, noElement);
  const loadMore = () => {
    setNoElement(noElement + noElement);
  };
  const moreNews = function addNews() {
    loadMore();
  };

  return (
    <>
      {/* ------------------- Hero Start ------------------*/}
      <div className="relative">
        <div className="h-[328px] lg:h-[898px]">
          <img
            className="object-cover object-right h-full w-full"
            src={HomeBg}
            alt="Home Background"
          />
        </div>
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center md:items-start md:ml-[42px] h-full w-full bg-white/25 lg:bg-transparent lg:ml-[260px]">
          <p className="cursive text-[#7EB693] md:text-[20px] lg:text-[36px]">
            100% Natural Food
          </p>
          <h1 className="text-[35px] md:text-[40px] text-[#274C5B] font-[900] w-[274px] md:w-[370px] lg:w-[530px] leading-[41px] md:leading-[50px] mb-[23px] lg:text-[70px] lg:leading-[82px]">
            Choose the best healthier way of life
          </h1>
          <div className="flex items-center bg-[#EFD372] px-[20px] py-[15px] gap-[10px] md:w-[180px] rounded-[16px] lg:px-[35px] lg:py-[20px] lg:w-[230px] lg:cursor-pointer group hover:lg:bg-[#274C5B]">
            <button className="text-[#274C5B] group-hover:lg:text-[#fff] lg:text-[20px] font-bold">
              Explore Now
            </button>
            <img
              className="group-hover:lg:translate-x-[10px] group-hover:lg:scale-[1.2] lg:duration-[200ms]"
              src={RightArrow}
              alt="rightArrow"
            />
          </div>
        </div>
      </div>
      {/* ------------------- Hero End ------------------*/}
      {/* ------------------- Card Start ------------------*/}
      <div className="mt-[58px] flex flex-col justify-center items-center mx-[15px] md:mx-[99px] text-[16px] md:text-[30px] gap-[28px] lg:flex-row">
        <div className="relative text-[#fff]">
          <img src={Fruits} alt="Fruits image" />
          <div className="absolute top-0 left-0 flex flex-col justify-center items-left h-full pl-[28px] w-[145px] md:w-[230px]">
            <p className="cursive">Natural!!</p>
            <h2 className="font-[900]">Get Garden Fresh Fruits</h2>
          </div>
        </div>
        <div className="relative">
          <img src={Vegetables} alt="Vegetables image" />
          <div className="absolute top-0 left-0 flex flex-col justify-center items-left h-full pl-[28px] w-[157px] md:w-[230px]">
            <p className="cursive text-[#7EB693]">Offer!!</p>
            <h2 className="font-[900] text-[#274c5b]">
              Get 10% off on Vegetables
            </h2>
          </div>
        </div>
      </div>
      {/* ------------------- Card End ------------------*/}
      {/* ------------------- About Us Start ------------------*/}
      <div className="flex flex-col justify-center items-center mx-[30px] md:mx-[60px] md:w-full md:justify-left md:items-start mt-[67px] gap-[26px] lg:flex-row">
        <div className="lg:flex lg:flex-row lg:justify-center lg:items-center">
          <div className="hidden lg:block">
            <img src={Flowers} alt="citrus background" />
          </div>
          <div className="about-page1">
            <div>
              <div className="w-[272px] md:w-[550px]">
                <p className="cursive text-[#7EB693] md:text-[36px]">
                  About Us
                </p>
                <h2
                  className="text-[25px] md:text-[40px] text-[#274C5B] font-[900] leading-[29px] md:leading-[50px] mt-[8px]
            mb-[14px]"
                >
                  We Believe in Working Accredited Farmers
                </h2>
              </div>
              <p className="leading-[30px] md:w-[645px] md:text-[20px]">
                Simply dummy text of the printing and typesetting industry.
                Lorem had ceased to been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley.
              </p>
            </div>
            <div className="mx-[10px] md:flex md:gap-[20px] md:w-full">
              <div className="flex justify-center">
                <img src={IconOrganic} alt="Icon Organic" />
              </div>
              <div>
                <h2 className="text-[25px] text-[#274C5B] font-[900] mt-[26px] mb-[7px] ">
                  Organic Foods Only
                </h2>
                <p className="leading-[30px] md:w-[444px] md:text-[20px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="mx-[10px] md:flex md:gap-[20px] md:w-full">
              <div className="flex justify-center">
                <img src={IconQuality} alt="Icon Quality" />
              </div>
              <div>
                <h2 className="text-[25px] text-[#274C5B] font-[900]  mt-[26px] mb-[7px]">
                  Quality Standards
                </h2>
                <p className="leading-[30px] md:w-[444px] md:text-[20px]">
                  Simply dummy text of the printing and typesetting industry.
                  Lorem Ipsum
                </p>
              </div>
            </div>
            <div className="flex items-center justify-center bg-[#EFD372] hover:lg:bg-[#EFD372] md:bg-[#274C5B] px-[20px] py-[15px] md:py-[25px] gap-[10px] w-[150px] md:w-[200px] rounded-[16px] group mt-[40px]">
              <button className="text-[#274C5B] md:text-[#fff] group-hover:lg:text-[#274C5B] font-bold md:text-[20px]">
                See more
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
      {/* ------------------- About Us End ------------------*/}
      {/* ------------------- Categories Start ------------------*/}
      <div className="flex flex-col justify-center items-center mt-[98px]">
        <p className="cursive text-[#7EB693] md:text-[36px]">Categories </p>
        <h2 className="font-[900] text-[20px] md:text-[40px]">Our Products</h2>
      </div>
      {/* -----------------Swiper settings on Mobile view Start ---------------*/}
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="mySwiper md:hidden"
      >
        {swiperData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-[#F9F8F8] h-full">
              <div className="absolute top-0 left-0 bg-[#F9F8F8] w-[150px] rounded-[30px]">
                <p className="bg-[#274C5B] ml-[20px] mt-[20px] w-[96px] text-[15px] text-[#fff] text-center rounded-[8px] py-[5px]">
                  {data.subtitle}
                </p>
                <div className="w-[240px] h-[150px] text-center mt-[5px]">
                  <img
                    className="object-cover h-full w-[150px] mt-[1rem] mx-auto"
                    src={data.image}
                    alt={data.imgAlt}
                  />
                  <h3 className="text-[20px] my-[13px] text-[#274C5B] font-bold">
                    {data.title}
                  </h3>
                  <div className="flex justify-center items-center gap-[10px] py-[10px] border-t-[1px] border-[#DEDDDD] mx-[20px] mt-[1rem]">
                    <p className="text-[15px] text-[#B8B8B8]">
                      {data.oldPrice}
                    </p>
                    <p className="text-[18px] text-[#274C5B] font-bold">
                      {data.newPrice}
                    </p>
                    <div className="w-[62px]">
                      <img
                        className="object-cover object-right h-full w-full"
                        src={data.stars}
                        alt="Stars"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* -----------------Swiper settings on Mobile view End ---------------*/}
      {/* -----------Swiper settings on Tablet and Desktop views Start--------*/}

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{ clickable: true }}
        modules={[Pagination]}
        className="mySwiper hidden md:block"
      >
        {swiperData.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative bg-[#F9F8F8] h-full md:rounded-[20px]">
              <div className="absolute top-0 left-0 bg-[#F9F8F8] w-[150px] rounded-[30px]">
                <p className="bg-[#274C5B] ml-[20px] mt-[20px] w-[96px] text-[15px] text-[#fff] text-center rounded-[8px] py-[5px]">
                  {data.subtitle}
                </p>
                <div className="w-[200px] h-[150px] lg:w-[350px] lg:h-[300px] text-center mt-[5px]">
                  <img
                    className="object-cover h-full w-[150px] lg:w-full mt-[1rem] mx-auto"
                    src={data.image}
                    alt={data.imgAlt}
                  />
                  <h3 className="text-[20px] my-[13px] text-[#274C5B] font-bold">
                    {data.title}
                  </h3>
                  <div className="flex justify-center items-center gap-[10px] py-[10px] border-t-[1px] border-[#DEDDDD] mx-[20px] mt-[1rem]">
                    <p className="text-[15px] text-[#B8B8B8]">
                      {data.oldPrice}
                    </p>
                    <p className="text-[18px] text-[#274C5B] font-bold">
                      {data.newPrice}
                    </p>
                    <div className="w-[62px]">
                      <img
                        className="object-cover object-right h-full w-full"
                        src={data.stars}
                        alt="Stars"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* -----------Swiper settings on Tablet and Desktop views End--------*/}
      {/* ------------------- Categories End ------------------*/}
      {/* ------------------- Testimonials Start ------------------*/}
      <div className="relative text-center mt-[72px] mb-[52px] ">
        <div className="h-[238px] md:h-[320px] w-full lg:h-[617px]">
          <img
            className="h-full w-full object-cover"
            src={TestimonialsBg}
            alt="testimonial background"
          />
        </div>
        <div className="absolute top-0 left-0 flex flex-col justify-center items-center w-full h-full gap-[10px]">
          <p className="cursive text-[#7EB693] md:text-[30px] md:mt-[2rem]">
            Testimonial
          </p>
          <h2 className="font-[900] text-[20px] w-[272px] md:w-full mx-[auto] text-[#274c5b] md:text-[30px]">
            What Our Customer Saying?
          </h2>
          {}
          <img
            className="mx-[auto] rounded-[50%] md:w-[80px]"
            src={TestimonialsAvatar}
            alt="testimonial avatar"
          />
          <img className="hidden md:block" src={Stars} alt="start icon" />
          <p className="w-[272px] md:w-[450px] mx-[auto] leading-[30px] md:text-[20px]">
            Simply dummy text of the printing and typesetting industry.
          </p>
          <h2 className="font-[900] md:text-[20px] text-[#274c5b] md:text-[25px]">
            Sara Taylor
          </h2>
        </div>
      </div>
      {/* ------------------- Testimonials End ------------------*/}
      {/* ------------------- Company History Start ------------------*/}
      <div className="bg-slate-200 py-[50px] lg:flex lg:justify-center lg:items-center lg:py-[0px]">
        <div className="h-[670px] md:h-[930px] w-full lg:w-[50%]">
          <img
            className="w-full h-full object-cover"
            src={FieldBg}
            alt="field background"
          />
        </div>
        <div className="lg:bg-[#fff] lg:rounded-[30px] lg:pb-[2rem] lg:translate-x-[-4rem]">
          <div className="w-[252px] md:w-[434px] md:mx-[138px] mx-[auto] my-[33px]">
            <p className="cursive text-[#7EB693] md:text-[36px]">
              Eco Friendly
            </p>
            <h2 className="font-[900] text-[20px] w-[252px] md:w-full mx-[auto] md:text-[40px] text-[#274c5b]">
              Econis is a Friendly Organic Store
            </h2>
          </div>
          <div className="flex justify-center items-center md:mx-[138px] md:justify-start">
            <div className="w-[320px] md:w-[490px] md:mx-[0px] mx-[20px]">
              <div>
                <h3 className="font-[800] text-[18px] md:text-[25px] text-[#274c5b]">
                  Start with Our Company First
                </h3>
                <p className="md:text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptas architecto, quaerat voluptatem quo commodi
                  fugiat quis vel asperiores quasi.
                </p>
              </div>
              <div className="my-[35px]">
                <h3 className="font-[800] text-[18px] md:text-[25px] text-[#274c5b]">
                  Learn How to Grow Yourself
                </h3>
                <p className="md:text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptas architecto, quaerat voluptatem quo commodi
                  fugiat quis vel asperiores quasi.
                </p>
              </div>
              <div>
                <h3 className="font-[800] text-[18px] md:text-[25px] text-[#274c5b]">
                  Farming Strategies of Today
                </h3>
                <p className="md:text-[20px]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Deserunt voluptas architecto, quaerat voluptatem quo commodi
                  fugiat quis vel asperiores quasi.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ------------------- Company History End ------------------*/}
      {/* ------------------- Organic List Start ------------------*/}
      <div className="bg-[#f1f8f4] py-[5rem] lg:flex lg:justify-evenly lg:gap-[1rem]">
        {organicList.map((listEl, index) => (
          <div key={index} className="pt-[19px]">
            <div className=" relative">
              <div className="h-[409px] md:h-[612px] md:w-[612px] md:mx-auto w-full lg:w-[512px] lg:h-[512px]">
                <img
                  className="h-full w-full object-cover"
                  src={listEl.image}
                  alt="frt"
                />
              </div>
              <div className="absolute top-0 left-0 flex justify-center items-center w-full h-full group">
                <h3 className="text-[25px] px-[35px] py-[19px] md:px-[60px] md:py-[30px] bg-white rounded-[20px] group-hover:lg:bg-[#fff]/50  lg:duration-[200ms] group-hover:lg:px-[80px] group-hover:lg:py-[40px] text-[#274c5b] font-bold">
                  {listEl.text}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
      {/* ------------------- Organic List End ------------------*/}
      {/* ------------------- News Start------------------*/}
      <div className="w-[272px] md:w-[612px] mx-[auto] lg:w-[1400px] my-[56px]">
        <p className="cursive text-[#7EB693] md:text-[36px]">News</p>
        <h2 className="font-[900] text-[20px] md:text-[40px] text-[#274C5B]">
          Discover weekly content about organic food & more
        </h2>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center lg:flex-wrap lg:gap-[2rem]">
        {slice.map((data, index) => (
          <div key={index} className="mb-[10rem]">
            <div className="relative drop-shadow-md flex flex-col justify-center items-center">
              <div className="relative">
                <div className="h-[440px] w-full md:w-[677px]">
                  <img
                    className="h-full w-full object-cover md:rounded-[20px]"
                    src={data.imageBg}
                    alt="veg"
                  />
                </div>
                <div className="absolute top-0 leflt-0 w-full">
                  <div className="w-[69px] h-[69px] md:w-[82px] md:h-[82px] bg-white rounded-[50%] flex flex-col justify-center items-center mt-[10px] ml-[10px] md:text-[20px] md:font-bold">
                    <p>{data.number}</p>
                    <p>{data.month}</p>
                  </div>
                </div>
              </div>
              <div className="absolute top-0 left-0 mt-[20rem] md:mt-[14rem] w-full">
                <div className="max-w-[340px] md:max-w-[612px] md:px-[40px] md:py-[40px] mx-[auto] bg-white px-[20px] py-[20px] rounded-[20px] flex flex-col md:gap-[10px]">
                  <div className="flex items-center gap-[10px]">
                    <img src={data.icon} alt="icon" />
                    <p className="md:text-[20px]">{data.author}</p>
                  </div>
                  <div>
                    <h2 className="font-[900] text-[20px] md:text-[25px] w-[252px] md:w-full text-[#274C5B]">
                      {data.title}
                    </h2>
                    <p className="my-[10px] md:w-[465px] md:text-[20px]">
                      {data.text}
                    </p>
                  </div>
                  <div className="flex items-center bg-[#EFD372] hover:lg:bg-[#274C5B] px-[20px] py-[15px] gap-[10px] w-[160px] md:w-[180px] rounded-[16px] md:px-[35px] md:py-[25px] group">
                    <button className="text-[#274C5B] group-hover:lg:text-[#fff] font-bold">
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
      <div className="flex items-center border border-[#274C5B] hover:lg:border-[#fff] hover:lg:bg-[#EFD372] px-[20px] py-[15px] gap-[10px] w-[160px] md:w-[250px] md:px-[40px] md:py-[30px] rounded-[16px] mt-[11rem] lg:mt-[0px] mx-[auto] group">
        <button
          onClick={moreNews}
          className="text-[#274C5B] font-bold md:text-[25px]"
        >
          More News
        </button>
        <img
          className="group-hover:lg:translate-x-[10px] group-hover:lg:scale-[1.2] lg:duration-[200ms]"
          src={RightArrow}
          alt="rightArrow"
        />
      </div>
      {/* ------------------- News End ------------------*/}
    </>
  );
}
