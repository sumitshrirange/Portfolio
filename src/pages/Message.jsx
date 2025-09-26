import React, { useRef, useState } from "react";
import Heading from "../components/ui/Heading";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";
import { PulseLoader } from "react-spinners";

function Message() {
  const defaultInputStyle =
    "border border-gray-500 py-1.5 px-3 rounded-md outline-none focus:border-[#07e1c1] duration-200 w-full";
  const defaultLabelStyle =
    "absolute -top-2 left-4 md:left-5 text-xs px-1 bg-[#151312] uppercase text-[#07bea2]";

  const [loading, setLoading] = useState(false)
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    setLoading(true)
    emailjs
      .sendForm("service_38h3lvl", "template_97xalrz", form.current, {
        publicKey: "Xn44s8pL3k20P_ZaL",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          toast.success("Message Sent.");

          form.current.reset();

          setLoading(false)
        },
        (error) => {
          console.log("FAILED...", error.text);
          toast.error("Failed to send!");
        }
      );
  };
  return (
    <section className="flex flex-col items-center justify-center lg:inline">
      <Heading text1="YOUR" text2="QUERIES" />

      <form
        ref={form}
        onSubmit={sendEmail}
        className="rounded-xl grid grid-cols-1 gap-5 mt-8 w-full"
      >
        <div className="relative">
          <input
            className={defaultInputStyle}
            type="text"
            name="name"
            required
          />
          <label className={defaultLabelStyle} htmlFor="name">
            Name
          </label>
        </div>

        <div className="relative">
          <input
            className={defaultInputStyle}
            type="email"
            name="email"
            required
          />
          <label className={defaultLabelStyle} htmlFor="email">
            Email
          </label>
        </div>

        <div className="relative">
          <input
            className={defaultInputStyle}
            type="text"
            name="subject"
            required
          />
          <label className={defaultLabelStyle} htmlFor="subject">
            Subject
          </label>
        </div>

        <div className="relative">
          <textarea
            className={defaultInputStyle}
            name="message"
            cols={30}
            rows={5}
            required
          />
          <label className={defaultLabelStyle} htmlFor="message">
            Message
          </label>
        </div>

        <button
          className="p-2 bg-[#07bea2] rounded-md font-semibold cursor-pointer"
          type="submit"
        > {loading ? (<PulseLoader color="white" loading={loading} size={10}/>) : 'Send'}
        </button>
      </form>    
    </section>
  );
}

export default Message;
