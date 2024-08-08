import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { BsLinkedin } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="flex max-sm:flex-col font-inter">
          <div className="py-5 text-white w-1/2 max-sm:w-full flex flex-col justify-center items-center bg-[#1F2937]">
            <h2 className="font-semibold text-lg">CONTACT US</h2>
            <ul className="text-center">
              <li>123 ABS Street, Uni 21, Bangladesh</li>
              <li>+88 123456789</li>
              <li>Mon - Fri: 08:00 - 22:00</li>
              <li>Sat - Sun: 10:00 - 23:00</li>
            </ul>
          </div>
          <div className="py-5 text-white w-1/2 max-sm:w-full flex flex-col justify-center items-center gap-3 bg-[#111827]">
            <h2 className="font-semibold text-lg">Follow US</h2>
            <p>Join us on social media</p>
            <div className="flex gap-4">
              <FaFacebook />
              <FaSquareInstagram />
              <BsLinkedin />
            </div>
          </div>
        </div>
        <div className="bg-[#151515] p-3">
          <p className="text-white text-center">
            Copyright © LogiCaffeBD. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
