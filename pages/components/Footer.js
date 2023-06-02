import React from "react";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";

const Footer = () => {
  return (
    <div className="w-full h-16 fixed bottom-0 left-0 flex flex-row gap-4 justify-center items-center transition-all bg-[rgb(13,5,2)] bg-opacity-50 md:flex-row md:fixed">
      <div className="p-2 bg-[rgb(23,9,3)] rounded-full hover:cursor-pointer hover:animate-[ping_1s_ease-out] ">
        <AiOutlineWhatsApp />
      </div>
      <div className="p-2 bg-[rgb(23,9,3)] rounded-full hover:cursor-pointer hover:animate-[ping_1s_ease-out]">
        <AiFillLinkedin />
      </div>
      <div className="p-2 bg-[rgb(23,9,3)] rounded-full hover:cursor-pointer hover:animate-[ping_1s_ease-out]">
        <VscGithubAlt />
      </div>
      <div className="p-2 bg-[rgb(23,9,3)] rounded-full hover:cursor-pointer hover:animate-[ping_1s_ease-out]">
        <FiMail />
      </div>
    </div>
  );
};

export default Footer;
