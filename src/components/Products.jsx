import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa";

const Products = () => {
  const data = [
    {
      img: "/src/assets/medicine/gs-cal.png",
      name: "জিএস – ক্যাল",
      title: "ন্যাচারাল ক্যালসিয়াম",
    },
    {
      img: "/src/assets/medicine/m-shas.png",
      name: "এম – শ্বাস চিন্তামণি",
      title: "এ্যাজমা ও শ্বাসকষ্ট প্রশমক",
    },
    {
      img: "/src/assets/medicine/chirota.png",
      name: "চিরতা",
      title: "শারীরিক দুর্বলতা প্রশমক",
    },
    {
      img: "/src/assets/medicine/urix.png",
      name: "ইউরিক্স",
      title: "যৌন দুর্বলতা প্রশমক",
    },
    {
      img: "/src/assets/medicine/sukrosonjiboni.png",
      name: "শুক্রসঞ্জীবনী",
      title: "শুক্রপাত ও বলক্ষয় প্রশমক",
    },
  ];

  const slider = useRef(null);

  const settings = {
    accessibility: true,
    dots: true,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 2,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
    ],
  };

  return (
    <div className=" flex flex-col justify-center lg:px-32 px-5 pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between mb-10 lg:mb-0">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            আমাদের পণ্যসমূহ
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            সেবনবিধি : রেজিঃ চিকিৎসকের পরামর্শ অনুযায়ী সেব্য ।
          </p>
        </div>
        <div className="flex gap-5 mt-4 lg:mt-0">
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickPrev()}
          >
            <FaArrowLeft size={25} />
          </button>
          <button
            className=" bg-[#d5f2ec] text-backgroundColor px-4 py-2 rounded-lg active:bg-[#ade9dc]"
            onClick={() => slider.current.slickNext()}
          >
            <FaArrowRight size={25} />
          </button>
        </div>
      </div>
      <div className="mt-5">
        <Slider ref={slider} {...settings}>
          {data.map((e, index) => (
            <div
              className="text-black rounded-xl shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] mb-2 cursor-pointer"
              key={index}
            >
              <div>
                <img
                  src={e.img}
                  alt="img"
                  className=" md:h-[350px] rounded-t-xl w-full"
                />
              </div>

              <div className=" flex flex-col justify-center items-center pb-5">
                <h1 className=" font-semibold text-xl pt-4">{e.name}</h1>
                <h3 className=" pt-2">{e.title}</h3>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Products;
