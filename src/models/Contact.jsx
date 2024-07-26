import React, { useRef } from "react";
import Button from "../layouts/Button";
import emailjs from "@emailjs/browser";

const Contact = ({ closeForm }) => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_ff9ylsg", "template_15c6i5r", form.current, {
        publicKey: "x0CvtvNCFbutboU9c",
      })
      .then(
        () => {
          console.log("SUCCESS!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <div className="popup-form absolute mt-12 text-black">
        <form
          ref={form}
          onSubmit={sendEmail}
          className=" w-80 md:w-96 space-y-5 bg-white p-5 rounded-xl"
        >
          <h1 className="text-4xl font-semibold text-center text-backgroundColor">
            Book Now
          </h1>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="text"
              name="userName"
              id="userLastName"
              placeholder="Full Name"
              required
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="email"
              name="userEmail"
              id="userEmail"
              placeholder="Your Email (optional)"
            />
          </div>
          <div className=" flex flex-col">
            <input
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              type="number"
              name="userNumber"
              id="userNumber"
              placeholder="Phone No."
              required
            />
          </div>
          <div className=" flex flex-col">
            <textarea
              className="py-3 px-2 bg-[#d5f2ec] rounded-lg"
              name="message"
              id=""
              placeholder="রোগ/কি কারণে অসুস্থ?"
              required
            ></textarea>
          </div>
          <p>
            সরাসরি আমাদের সাথে কথা বলতে কল করুন <br />
            <span className="text-[20px] text-[#6cbf0d] font-semibold">👉 01677717777</span>
            <br />
            <span className="text-[20px] text-[#6cbf0d] font-semibold">👉 01713825262</span>
          </p>
          <div className=" flex gap-5">
            <Button title="Send Mail" />
            <button
              className=" bg-backgroundColor text-white px-10 rounded-md active:bg-red-500"
              onClick={closeForm}
            >
              Close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Contact;
