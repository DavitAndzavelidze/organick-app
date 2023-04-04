import ContactBg from "../assets/contactBg.webp";
import GreenVeg from "../assets/greenVeg.webp";
import ContactBanana from "../assets/contactBanana.webp";
import LocationIcon from "../assets/location.svg";
import EmailIcon from "../assets/email.svg";
import PhoneIcon from "../assets/phone.svg";

export default function Contact() {
  return (
    <>
      <div className="w-full h-full relative lg:hidden">
        <img
          className="w-full h-full object-cover"
          src={ContactBg}
          alt="about image"
        />
        <h2 className="absolute top-0 left-0 w-full h-full flex justify-center items-center text-[25px] font-bold text-[#274C5B] md:text-[40px]">
          Contact Us
        </h2>
      </div>
      <div className="lg:flex lg:justify-center lg:items-center lg:py-[4rem] lg:gap-[2rem] lg:mx-auto lg:w-[1200px]">
        <div className="w-[320px] md:w-[623px] h-[300px] md:h-[640px] lg:h-[540px] mx-auto lg:basis-[50%] lg:mr-[1rem]">
          <img
            className="w-full h-full object-cover rounded-[10px] mt-[1rem] lg:mt-[0px] "
            src={ContactBanana}
            alt="green veg"
          />
        </div>
        <div className="w-[320px] md:w-full md:px-[5rem] flex flex-col items-center mx-auto lg:px-[0px] lg:basis-[50%] lg:justify-center lg:items-start ">
          <div className="w-[300px] md:w-full mx-auto lg:w-[702px] lg:mx-[0px]">
            <h2 className="text-[20px] md:text-[40px] md:mt-[2rem] font-[900] text-[#274C5B] mt-[1rem] mb-[5px]">
              We'd love to talk about how we can work together.
            </h2>
            <p className="md:text-[20px] md:leading-[30px]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minus
              fugit aspernatur laborum labore inventore tenetur, fuga doloribus
              atque enim distinctio incidunt sequi architecto voluptatem odit
              consectetur accusantium repellat reprehenderit nam.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-[20px] my-[2rem] lg:flex-col">
            <div className="flex justify-center items-center gap-[20px] bg-[#fff] drop-shadow-[0_12px_19px_rgba(201,201,201,0.25)] px-[10px] py-[10px] rounded-[16px]">
              <div className="rounded-[10px] w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-[#f4f4f4] px-[20px] py-[20px]">
                <img
                  className="w-full h-full"
                  src={EmailIcon}
                  alt="building icon"
                />
              </div>
              <div className="pr-[10px]">
                <h2 className="font-bold text-[20px]">Massege</h2>
                <p>support@organic.com</p>
              </div>
            </div>
            <div className="flex justify-center items-center gap-[20px] bg-[#fff] drop-shadow-[0_12px_19px_rgba(201,201,201,0.25)] px-[10px] py-[10px] rounded-[16px]">
              <div className="rounded-[10px] w-[70px] h-[70px] md:w-[100px] md:h-[100px] bg-[#f4f4f4] px-[20px] py-[20px]">
                <img
                  className="w-full h-full"
                  src={PhoneIcon}
                  alt="building icon"
                />
              </div>
              <div className="pr-[10px]">
                <h2 className="font-bold text-[20px]">Contact Us</h2>
                <p>support@organic.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="h-[600px] w-full">
          <img
            className="h-full w-full object-cover"
            src={GreenVeg}
            alt="green veg"
          />
        </div>
        <div className="w-full h-full mx-auto absolute top-0 left-0 flex flex-col justify-center items-center">
          <div className=" w-[320px] md:w-[512px] bg-[#fff] px-[2rem] py-[1.5rem] rounded-[30px] lg:w-[812px] lg:py-[2rem] lg:px-[4rem]">
            <p className="cursive text-[#7EB693] md:text-[36px]">Location</p>
            <h2 className="text-[20px] font-[900] text-[#274C5B] md:text-[40px]">
              Our Farms
            </h2>
            <p className="leading-[30px] text-[#525c60] md:pr-[1rem]">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Fugiat
              repellendus suscipit et illum necessitatibus eum alias
              consequuntur repellat laborum provident amet.
            </p>
            <div className="flex flex-col my-[1rem] gap-[1rem]">
              <div className="flex justify-center md:justify-start gap-[10px]">
                <div>
                  <img className="w-[35px]" src={LocationIcon} alt="building" />
                </div>
                <div className="w-[200px]">
                  <h2 className="font-bold text-[#274C5B]">New York, USA:</h2>
                  <p className="text-[#525c60]">
                    299 Park Avenue New York, New York 10171
                  </p>
                </div>
              </div>
              <div className="flex justify-center md:justify-start gap-[10px]">
                <div>
                  <img className="w-[35px]" src={LocationIcon} alt="building" />
                </div>
                <div className="w-[200px]">
                  <h2 className="font-bold text-[#274C5B]">London, UK:</h2>
                  <p className="text-[#525c60]">
                    30 Streamford Street, London SE1 9LQ
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div>
        <form
          action="#"
          className="flex flex-col gap-[20px] w-[320px]  md:w-[570px] lg:w-[1120px] mx-auto mt-[3rem]"
        >
          <div className="flex flex-col gap-[20px] lg:flex-row lg:justify-between">
            <div className="flex flex-col">
              <label className="mb-[10px]" htmlFor="#">
                Full Name *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                required
                placeholder="Your full name"
                className="inputStyle"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-[10px]" htmlFor="#">
                Your Email *
              </label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="example@youremail.com"
                className="inputStyle"
              />
            </div>
          </div>
          <div className="flex flex-col gap-[20px] lg:justify-between lg:flex-row">
            <div className="flex flex-col">
              <label className="mb-[10px]" htmlFor="#">
                Company
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Your company name"
                className="inputStyle"
              />
            </div>
            <div className="flex flex-col">
              <label className="mb-[10px]" htmlFor="#">
                Subject *
              </label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="How can we help?"
                className="inputStyle"
              />
            </div>
          </div>
          <div className="flex flex-col">
            <label className="mb-[10px]" htmlFor="#">
              Message *
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="10"
              placeholder="Hello there, I would like to talk about how to..."
              className="inputStyle lg:w-full resizeNone"
            ></textarea>
          </div>
          <div className="mx-auto md:mx-[0px] mt-[1rem]">
            <button className="text-[#fff] py-[20px] px-[40px] rounded-[16px] bg-[#274C5B] font-bold hover:lg:bg-[#EFD372] hover:lg:text-[#274C5B] lg:duration-[200ms]">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
