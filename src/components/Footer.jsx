import React from "react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <div className=" bg-backgroundColor text-white rounded-t-3xl mt-8 md:mt-0">
      <div className="flex flex-col md:flex-row justify-between p-8 md:px-32 px-5">
        <div className=" w-full md:w-1/4">
          <h1 className=" font-semibold text-xl pb-4">
            <img className="rounded-md" src="/logo.png" alt="" />
          </h1>
          <p className=" text-sm pb-4">
            আমাদের ডেডিকেটেড ডাক্তারদের দল, প্রত্যেকেই আয়ুর্বেদ চিকিৎসা,
            চর্মরোগবিদ্যা এবং আরও অনেক কিছুর মতো অনন্য ক্ষেত্রে বিশেষজ্ঞ।
          </p>
          <a
            target="_blank"
            href="http://facebook.com/josim550"
            className="cursor-pointer"
          >
            <span className="rounded-sm bg-[#0863F7] px-3 py-1 text-[20px]">
              f
            </span>{" "}
            Facebook
          </a>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            আমার সম্পর্কে
          </h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="about"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              আমি
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              সেবাসমূহ
            </Link>
            <Link
              to="doctors"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              পণ্যসমূহ
            </Link>
          </nav>
        </div>
        <div>
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">
            আমাদের সেবাসমূহ
          </h1>
          <nav className=" flex flex-col gap-2">
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              ল্যাব পরীক্ষা
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              স্বাস্থ্য পরীক্ষা
            </Link>
            <Link
              to="services"
              spy={true}
              smooth={true}
              duration={500}
              className=" hover:text-hoverColor transition-all cursor-pointer"
            >
              অন্যান্য রোগী
            </Link>
          </nav>
        </div>
        <div className=" w-full md:w-1/4">
          <h1 className=" font-medium text-xl pb-4 pt-5 md:pt-0">Contact Us</h1>
          <nav className=" flex flex-col gap-2">
            <Link to="/" spy={true} smooth={true} duration={500}>
              অন্নদানগর, পীরগাছা, রংপুর
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              mr.josimuddin@gmail.com
            </Link>
            <Link to="/" spy={true} smooth={true} duration={500}>
              01677717777 / 01713825262
            </Link>
          </nav>
        </div>
      </div>
      <div>
        <p className=" text-center py-4">
          Developed By Md Rokon. <br />
          Mobile: 01713886535
        </p>
      </div>
    </div>
  );
};

export default Footer;
