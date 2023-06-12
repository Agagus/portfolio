import React from "react";
import { AiOutlineWhatsApp, AiFillLinkedin } from "react-icons/ai";
import { VscGithubAlt } from "react-icons/vsc";
import { FiMail } from "react-icons/fi";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="w-full h-16 fixed bottom-0 left-0 flex flex-row gap-4 justify-center items-center transition-all bg-[rgb(13,5,2)] bg-opacity-50 md:flex-row md:fixed">
      <Link
        href="https://wa.link/w9i7cb"
        target="_blank"
        className="p-2 bg-[rgb(23,9,3)] rounded-full hover:cursor-pointer hover:animate-[ping_1s_ease-out] "
      >
        <AiOutlineWhatsApp />
      </Link>
      <Link
        href="https://www.linkedin.com/in/agustina-zanetti-4b7a67204/"
        target="_blank"
        className="p-2 bg-[rgb(23,9,3)] rounded-full hover:cursor-pointer hover:animate-[ping_1s_ease-out]"
      >
        <AiFillLinkedin />
      </Link>
      <Link
        href="https://github.com/Agagus"
        target="_blank"
        className="p-2 bg-[rgb(23,9,3)] rounded-full hover:cursor-pointer hover:animate-[ping_1s_ease-out]"
      >
        <VscGithubAlt />
      </Link>
      <Link
        href="mailto:agus.zanett@gmail.com"
        target="_blank"
        className="p-2 bg-[rgb(23,9,3)] rounded-full hover:cursor-pointer hover:animate-[ping_1s_ease-out]"
      >
        <FiMail />
      </Link>
    </div>
  );
};

export default Footer;
