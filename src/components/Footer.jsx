import { BsHouseHeartFill } from 'react-icons/bs';
import { FaFacebookF } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <div className="bg-white w-full  font-plusUltra ">
      <div className="flex w-full text-textDark text-[15px] items-start justify-around py-10 ">
        <span className="flex flex-row gap-2 items-center cursor-pointer  my-auto ">
          <BsHouseHeartFill className="text-secundary" size={'30px'} />
          <p className=" font-bold text-xl  ">Estatery</p>
        </span>
        <ul className="flex flex-col gap-2">
          <li className="font-semibold ">
            <a>SELL A HOME</a>
          </li>
          <li className="li-custom">
            <a>Request an offer</a>
          </li>
          <li className="li-custom">
            <a>Pricing</a>
          </li>
          <li className="li-custom">
            <a>Reviews</a>
          </li>
          <li className="li-custom">
            <a>Stories</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="font-semibold">BUY, RENT AND SELL</li>
          <li className="li-custom">
            <a>Buy and sell properties</a>
          </li>
          <li className="li-custom">
            <a>Rent home</a>
          </li>
          <li className="li-custom">
            <a>Builder trade-up</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="font-semibold">ABOUT</li>
          <li className="li-custom">
            <a>Company</a>
          </li>
          <li className="li-custom">
            <a>How it works</a>
          </li>
          <li className="li-custom">
            <a>Contact</a>
          </li>
          <li className="li-custom">
            <a>Investors</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="font-semibold">
            <a>BUY A HOME</a>
          </li>
          <li className="li-custom">
            <a>Buy</a>
          </li>
          <li className="li-custom">
            <a>Finance</a>
          </li>
        </ul>
        <ul className="flex flex-col gap-2">
          <li className="font-semibold">
            <a>TERMS & PRIVACY</a>
          </li>
          <li className="li-custom">
            <a>Trust & Safety</a>
          </li>
          <li className="li-custom">
            <a>Terms of Service</a>
          </li>
          <li className="li-custom">
            <a>Reviews</a>
          </li>
          <li className="li-custom">
            <a>Privacy Policy</a>
          </li>
        </ul>
      </div>

      <div className="w-full border-t-2  py-6 flex items-center justify-around ">
        <p className="text-sm text-textDark opacity-50">©2021 Estatery. All rights reserved</p>
        <span className="text-textDark opacity-40 flex flex-row gap-6">
          <FaFacebookF className="size-5" />
          <FaInstagram className="size-5" />
          <FaTwitter className="size-5" />
          <FaLinkedin className="size-5" />
        </span>
      </div>
    </div>
  );
};

export default Footer;
