import { Call, Send } from "@mui/icons-material";
import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col gap-20 lg:flex-row justify-between my-20 mx-6 lg:mx-28">
      <div className="flex flex-col gap-3">
        <h1 className="h11">
          <Call
            style={{ fontSize: "50px" }}
            className="rounded-full bg-red-500 text-white p-2"
          />{" "}
          call us
        </h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        <p>+123456789</p>
        <hr />
        <h1 className="h11">
          <Send
            style={{ fontSize: "50px" }}
            className="rounded-full bg-red-500 text-white p-2"
          />{" "}
          write us
        </h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <p>Lorem ipsum dolor sit.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </div>
      <div className="flex flex-col gap-5 items-end">
        <div className="flex w-full flex-col lg:flex-row gap-5">
          <input
            className="bg-gray-300 p-2 rounded-md"
            type="text"
            name=""
            id=""
            placeholder="name"
          />
          <input
            className="bg-gray-300 p-2 rounded-md"
            type="email"
            name=""
            id=""
            placeholder="email"
          />
          <input
            className="bg-gray-300 p-2 rounded-md"
            type="text"
            name=""
            id=""
            placeholder="phone"
          />
        </div>
        <textarea
          className="w-full h-[200px] bg-gray-300 rounded-md p-2"
          name=""
          id=""
          placeholder="your message"
        ></textarea>
        <button className="btn">send message</button>
      </div>
    </div>
  );
};

export default Contact;
