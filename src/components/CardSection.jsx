import React from "react";
import { Link } from "react-router-dom";

const CardSection = ({
  gradientTitle,
  title,
  text,
  buttonColor,
  imageUrl,
  gradientBottom,
  gradientTitleColor,
  flexDirection,
  URL,
}) => {
  return (
    <div
      id="gorsellestir"
      className={`section container mx-auto flex flex-col gap-8 ${flexDirection}  min-h-screen items-center w-full my-24 relative`}
    >
      <div>
        <h1 className="text-[28px] md:text-[32px] lg:text-[40px]  md:text-start">
          <span className={`${gradientTitleColor}  font-bold !pl-0`}>
            {gradientTitle}
          </span>
          {title}
        </h1>
        <p className="mt-3 text-[#a2acbe] leading-[150%]    text-xl lg:text-[22px]   tracking-wide text-center md:text-start">
          {text}
        </p>
        <button className={`${buttonColor} mt-6 tracking-wide mx-auto md:mx-0`}>
          <Link to={URL} className="h-full w-full block ">
            Hemen Öğren
          </Link>
        </button>
      </div>
      <div className="h-72 md:h-auto max-h-72 md:max-h-96 w-full md:w-1/2  flex justify-start md:justify-end relative">
        <img
          className="h-full rounded-xl w-full object-cover"
          src={imageUrl}
          alt="photo1"
        />
      </div>
      <div
        className={`${gradientBottom} rounded-full h-24 !w-96 fixed flex items-center justify-center !right-0`}
      ></div>
    </div>
  );
};

export default CardSection;
