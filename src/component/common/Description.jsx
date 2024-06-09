import React from "react";
import {
  LocationOutline,
  LogoFacebook,
  LogoInstagram,
  LogoTwitter,
  LogoYoutube,
  MailOutline,
} from "react-ionicons";
import { Link } from "react-router-dom";


export function SocialLinks() {
  return (
    <div className="flex gap-x-4 h-10">
      <div className="w-8 h-8 rounded-full cursor-pointer transition-colors ease-in-out duration-150 bg-primary-light hover:bg-primary grid place-items-center text-white">
        <LogoFacebook color={"#fff"} width={"15px"} height={"15px"} />
      </div>
      <div className="w-8 h-8 rounded-full cursor-pointer transition-colors ease-in-out duration-150 bg-primary-light hover:bg-primary grid place-items-center text-white">
        <LogoTwitter color={"#fff"} width={"15px"} height={"15px"} />
      </div>
      <div className="w-8 h-8 rounded-full cursor-pointer transition-colors ease-in-out duration-150 bg-primary-light hover:bg-primary grid place-items-center text-white">
        <LogoInstagram color={"#fff"} width={"15px"} height={"15px"} />
      </div>
      <div className="w-8 h-8 rounded-full cursor-pointer transition-colors ease-in-out duration-150 bg-primary-light hover:bg-primary grid place-items-center text-white">
        <LogoYoutube color={"#fff"} width={"15px"} height={"15px"} />
      </div>
    </div>
  );
}

export function Description() {
  return (
    <div className="w-full hidden sm:flex justify-center lg:justify-between py-5 px-0 lg:px-20 bg-white shadow-md">
      <div className="flex gap-x-10">
        <span className="text-secondary">
          <LocationOutline
            color={"#00000"}
            title={"location"}
            height="22px"
            width="22px"
            cssClasses={"inline-block mx-2 pb-1 text-primary"}
          />
          Muscat, Oman
        </span>

        <Link 
        to="#"
       onClick={(e) => {
        e.preventDefault();
        window.location.href ='mailto:example@email.com';}}
        className="text-secondary cursor-pointer">
          <MailOutline
            color={"#00000"}
            title={"mail"}
            height="22px"
            width="22px"
            cssClasses={"inline-block mx-2 pb-1 text-primary"}
          />
         support@globalstrategyfinanceconsulting.co
        </Link>
      </div>

      <SocialLinks/>
    </div>
  );
}
