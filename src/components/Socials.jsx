import React from "react";

export default function Socials() {
  return (
    <>
      <p className="text-gray-200 hover:text-white text-sm my-3 gap-4 mt-12 font-mono flex justify-center items-center">
        <img
          src="src/assets/call.svg"
          alt=""
          width={18}
          height={18}
          className="text-gray-200 hover:text-white invert"
        />
        <span className="">+91 8338927571</span>
      </p>
      <div className="w-full py-3 gap-8 flex justify-center items-center">
        <a
          href="https://www.instagram.com/pritish_ranjan_sahoo/"
          target="_blank"
          className="text-gray-250 hover:text-white"
        >
          <img
            src="/src/assets/insta.svg"
            alt="insta"
            width={25}
            height={25}
            className="invert"
          />
        </a>
        <a
          href="https://github.com/pritish-ranjan-sahoo/"
          target="_blank"
          className="text-gray-200 hover:text-white"
        >
          <img
            src="/src/assets/github.svg"
            alt=""
            width={25}
            height={25}
            className="invert"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/pritish-sahoo-074b07246/"
          target="_blank"
          className="text-gray-250 hover:text-white"
        >
          <img
            src="/src/assets/linkedin.svg"
            alt="linkedin"
            width={25}
            height={25}
            className="invert"
          />
        </a>
      </div>
    </>
  );
}
