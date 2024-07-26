import React from "react";
import Button from "../layouts/Button";
import { RiMicroscopeLine } from "react-icons/ri";
import ServicesCard from "../layouts/ServicesCard";
import { MdHealthAndSafety } from "react-icons/md";
import { FaHeartbeat } from "react-icons/fa";

const Services = () => {
  const icon1 = (
    <RiMicroscopeLine size={35} className=" text-backgroundColor" />
  );
  const icon2 = (
    <MdHealthAndSafety size={35} className=" text-backgroundColor" />
  );
  const icon3 = <FaHeartbeat size={35} className=" text-backgroundColor" />;

  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-24 lg:pt-16">
      <div className=" flex flex-col items-center lg:flex-row justify-between">
        <div>
          <h1 className=" text-4xl font-semibold text-center lg:text-start">
            আমাদের সেবাসমূহ
          </h1>
          <p className=" mt-2 text-center lg:text-start">
            আমাদের মূল উদ্দেশ্য হল শারীরিক ও মানসিক, জটিল এবং কঠিন রোগির চিকিৎসা
            ও সুচিকিৎসা প্রদান। <br />
            <span className="text-[#418a4b] bold">মানবসেবাই আমাদের ধর্ম</span>
          </p>
        </div>
        <div className=" mt-4 lg:mt-0">
          <Button title="See Services" />
        </div>
      </div>
      <div className=" flex flex-col lg:flex-row gap-5 pt-14">
        <ServicesCard
          icon={icon1}
          title="ল্যাব পরীক্ষা"
          description={`একটি ল্যাব পরীক্ষা হল একটি ডায়াগনস্টিক পদ্ধতি যেখানে রক্ত, প্রস্রাব বা টিস্যুর মতো নমুনাগুলি স্বাস্থ্যের অবস্থা সনাক্ত করতে, রোগগুলি পর্যবেক্ষণ করতে বা সামগ্রিক স্বাস্থ্যের মূল্যায়ন করতে বিশ্লেষণ করা হয়। এই পরীক্ষাগুলি গুরুত্বপূর্ণ অন্তর্দৃষ্টি প্রদান করে যা চিকিত্সার সিদ্ধান্তগুলিকে গাইড করতে এবং সঠিক, কার্যকর যত্ন নিশ্চিত করতে সহায়তা করে।`}
        />
        <ServicesCard
          icon={icon2}
          title="স্বাস্থ্য পরীক্ষা"
          description={`একটি স্বাস্থ্য পরীক্ষা আপনার সামগ্রিক সুস্থতা নিরীক্ষণ করার জন্য একটি নিয়মিত মূল্যায়ন। এটি প্রাথমিক পরীক্ষা এবং স্ক্রীনিং জড়িত সম্ভাব্য সমস্যাগুলিকে প্রাথমিকভাবে চিহ্নিত করতে, একটি স্বাস্থ্যকর জীবনের জন্য সময়মত হস্তক্ষেপ এবং ব্যক্তিগতকৃত যত্ন নিশ্চিত করে।`}
        />
        <ServicesCard
          icon={icon3}
          title="অন্যান্য রোগী"
          description={`"সমস্ত রোগীদের সঠিক এবং সর্বোত্তম পরামর্শ দেওয়া হয়" 
            প্রযোজনএ কল করুন: 01677717777`}
        />
      </div>
    </div>
  );
};

export default Services;
