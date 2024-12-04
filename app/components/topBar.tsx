import React from "react";
import Link from "next/link";
import { LiaFacebookF } from "react-icons/lia";
import { FaInstagram } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { TbMessages } from "react-icons/tb";

interface TopBarProps {
  className?: string;
}

const TopBar: React.FC<TopBarProps> = ({ className }) => {
  return (
    <div className={`bg-blue-950 text-white font-semibold py-2 ${className}`}>
      <div className="mx-auto max-w-7xl px-2 sm:px-4 lg:px-8 pr-[180px]">
        <div className="flex justify-between items-center pl-40">
          <div className="flex gap-8">
            <div className="flex items-center gap-2 text-sm">
              <span className="text-blue-500">
                <FaPhone />
              </span>
              Call for help:{" "}
              <Link href="tel:+447979593633" className="text-indigo-200">
                (+44) 07979 593633
              </Link>
            </div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-blue-500 text-lg">
                <TbMessages />
              </span>
              Message to us:{" "}
              <Link
                href="mailto:skinners@skinners.com"
                className="text-indigo-200"
              >
                skinners@skinners.com
              </Link>
            </div>
          </div>
          <div className="flex gap-4">
            {/* set hover duration transition to 200*/}
            <Link
              href="https://www.facebook.com/SkinnersProfessionalWindowCleaning/"
              target="_blank"
              className="text-indigo-400 hover:text-blue-200 transition duration-400 text-lg"
            >
              <LiaFacebookF />
            </Link>
            <Link
              href="https://www.instagram.com/skinners.window.cleaning"
              target="_blank"
              className="text-indigo-400 hover:text-blue-200 transition duration-400 text-lg"
            >
              <FaInstagram />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
