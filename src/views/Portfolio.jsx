import AboutBg from "../assets/aboutBg.webp";
import LemonsPink from "../assets/lemonPink.webp";
import Carrots from "../assets/carrots.webp";
import Leaf from "../assets/leaves.webp";
import Tomatos from "../assets/tomatos.webp";
import Raspberry from "../assets/raspberry.webp";
import Lemons from "../assets/Lemon.webp";
// import { portfolioData } from "../components/PortfolioData";

export default function Portfolio() {
  return (
    <>
      {/* ------------------- Portfolio header Start ------------------*/}
      <div className="w-full h-full relative lg:hidden">
        <img
          className="w-full h-full object-cover"
          src={AboutBg}
          alt="about image"
        />
        <h2 className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-[25px] font-bold text-[#274C5B] md:text-[40px]">
          Portfolio
        </h2>
      </div>
      <div className="w-[300px] gap-[1rem] text-[20px] md:w-full md:justify-center md:gap-[2rem] mx-auto my-[2rem] flex flex-col md:flex-row md:flex-wrap lg:w-[1200px] lg:gap-[4rem] lg:py-[4rem] lg:text-[26px]">
        <div className="">
          <div className="md:w-[300px] lg:max-w-[350px] lg:rounded-[20px] overflow-hidden">
            <img
              className="hover:lg:scale-[1.4] lg:duration-[200ms]"
              src={LemonsPink}
              alt="lemon pink background"
            />
          </div>
          <div>
            <h2 className="font-[900] text-[#274C5B] mt-[10px]">
              Green & Tasty Lemon
            </h2>
            <p className="cursive text-[#7EB693]">Fruits</p>
          </div>
        </div>
        <div>
          <div className="md:w-[300px] lg:max-w-[350px] lg:rounded-[20px] overflow-hidden">
            <img
              className="hover:lg:scale-[1.4] lg:duration-[200ms]"
              src={Carrots}
              alt="lemon pink background"
            />
          </div>
          <div>
            <h2 className="font-[900] text-[#274C5B] mt-[10px]">
              Organic Carrot
            </h2>
            <p className="cursive text-[#7EB693]">Farmer</p>
          </div>
        </div>
        <div>
          <div className="md:w-[300px] lg:max-w-[350px] lg:rounded-[20px] overflow-hidden">
            <img
              className="hover:lg:scale-[1.4] lg:duration-[200ms]"
              src={Leaf}
              alt="lemon pink background"
            />
          </div>
          <div>
            <h2 className="font-[900] text-[#274C5B] mt-[10px]">
              Organic Betel Leaf
            </h2>
            <p className="cursive text-[#7EB693]">Leaf</p>
          </div>
        </div>
        <div>
          <div className="md:w-[300px] lg:max-w-[350px] lg:rounded-[20px] overflow-hidden">
            <img
              className="hover:lg:scale-[1.4] lg:duration-[200ms]"
              src={Tomatos}
              alt="lemon pink background"
            />
          </div>
          <div>
            <h2 className="font-[900] text-[#274C5B] mt-[10px]">
              Natural Tomato
            </h2>
            <p className="cursive text-[#7EB693]">Fruits</p>
          </div>
        </div>
        <div>
          <div className="md:w-[300px] lg:max-w-[350px] lg:rounded-[20px] overflow-hidden">
            <img
              className="hover:lg:scale-[1.4] lg:duration-[200ms]"
              src={Raspberry}
              alt="lemon pink background"
            />
          </div>
          <div>
            <h2 className="font-[900] text-[#274C5B] mt-[10px]">
              Black Raspberry
            </h2>
            <p className="cursive text-[#7EB693]">Farmer</p>
          </div>
        </div>
        <div>
          <div className="md:w-[300px] lg:max-w-[350px] lg:rounded-[20px] overflow-hidden">
            <img
              className="hover:lg:scale-[1.4] lg:duration-[200ms]"
              src={Lemons}
              alt="lemon pink background"
            />
          </div>
          <div>
            <h2 className="font-[900] text-[#274C5B] mt-[10px]">
              Honey Orange
            </h2>
            <p className="cursive text-[#7EB693]">Farmer</p>
          </div>
        </div>
      </div>
      {/* {portfolioData.map((dataEl, index) => (
        <div key={index} className="w-[300px] mx-auto my-[2rem]">
          <div className="md:w-[612px] md:mx-auto">
            <img
              className="rounded-[20px]"
              src={dataEl.image}
              alt="green veg"
            />
          </div>
          <h2 className="text-[20px] font-[900] text-[#274C5B] mt-[10px]">
            {dataEl.title}
          </h2>
          <p className="cursive text-[#7EB693]">{dataEl.category}</p>
        </div>
      ))} */}

      {/* ------------------- Portfolio header End ------------------*/}
    </>
  );
}
