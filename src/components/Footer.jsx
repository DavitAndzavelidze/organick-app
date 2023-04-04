import Logo from "../assets/Logo.svg";
import OrangeBg from "../assets/orangeBg.webp";
import iconInsta from "../assets/Insta.svg";
import iconFb from "../assets/Fb.svg";
import iconTw from "../assets/Twiter.svg";
import iconPinterest from "../assets/Pintrest.svg";

export default function Footer() {
  <>
    <div className="relative mt-[4rem]">
      <div className="h-[264px]">
        <img
          className="h-full w-full object-cover"
          src={OrangeBg}
          alt="orange background"
        />
      </div>
      <div className=" w-full h-full absolute top-0 left-0 flex flex-col justify-center items-center gap-[13px] md:mx-auto">
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
    <footer className="my-[2rem] md:relative">
      <div className="md:absolute md:top-0 md:left-0 md:mx-auto md:w-full md:mt-[2rem]">
        <div className="text-[32px] flex justify-center items-center gap-[10px]">
          <img className="h-[50px]" src={Logo} alt="Company Logo" />
          <p className="font-bold text-[#274C5B]">Organick</p>
        </div>
        <p className="w-[300px] mx-auto my-[1rem] md:w-[200px]">
          Simply dummy text of the printing and typesetting industry. Lorem
          Ipsum simply dummy text of the printing{" "}
        </p>
        <div className="w-[300px] mx-auto my-[1rem] ">
          <div className="flex justify-between items-center mt-[2rem] md:mt-[4rem] w-[285px] mx-[auto]">
            <img
              className="bg-[#EFF6F1] px-[20px] py-[20px] rounded-[50%]"
              src={iconInsta}
              alt="Instagram icon"
            />
            <img
              className="bg-[#EFF6F1] px-[20px] py-[20px] rounded-[50%]"
              src={iconFb}
              alt="Facebook icon"
            />
            <img
              className="bg-[#EFF6F1] px-[20px] py-[20px] rounded-[50%]"
              src={iconTw}
              alt="Twiter icon"
            />
            <img
              className="bg-[#EFF6F1] px-[20px] py-[20px] rounded-[50%]"
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
          Copyright © <span className="font-bold">Organick</span> | Designed by
          <span className="font-bold"> VictorFlow</span> Templates - Powered by
          <span className="font-bold"> Webflow</span>
        </p>
      </div>
    </footer>
  </>;
}
