import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import FH1 from "./FooterHeading1";
import FP from './FooterParagraph';
import Link from 'next/link';
import { Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[#261B6C] text-white px-[3%]">

      <div className="flex items-end justify-center">
        <hr className="flex-1 border-t border-[white]" />
        <Link href="/"><Image src="/images/icon.png" alt="Logo" width={100} height={100} className="mx-2 md:mx-4 w-[30px] md:w-[100px]" /></Link>
        <hr className="flex-1 border-t border-[white]" />
      </div>

      <div className="flex justify-between pt-[3vh] md:pt-[5vh] pb-[2vh] gap-3 md:gap-8 text-sm">

        <div>
          <FH1>Instagram Feed</FH1>
          <div className="flex space-x-0.5 md:space-x-2 mb-3">
            <Image src="/images/bean-bowel.png" alt="Baked product" width={110} height={100} className="w-[20px] md:w-[120px] h-[15px] md:h-[100px]" />
            <Image src="/images/two-sandwiches.png" alt="Baked product" width={110} height={100} className="w-[20px] md:w-[120px] h-[15px] md:h-[100px]" />
            <Image src="/images/salad.png" alt="Baked product" width={110} height={100} className="w-[20px] md:w-[120px] h-[15px] md:h-[100px]" />
          </div>
        </div>

        <div>
          <FH1>Our Location</FH1>
          <FP>1 Shepperton Road, Graniteside,<br />Harare, Zimbabwe.</FP>
        </div>

        <div>
          <FH1>Get In Touch With Us</FH1>
          <ul className="space-y-1 text-[9px] md:text-base text-[white]">
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
              08080151
            </li>
            <li className="flex items-center gap-2">
              <Phone className="w-4 h-4 md:w-5 md:h-5 text-white" />
              08080152
            </li>
            <li>   +263 242 751 481</li>
            <li>   +263 242 710 334</li>
            <li> marketing@bakersinnzim.com</li>
          </ul>
        </div>

        <div>
          <FH1>Sitemap</FH1>
          <ul className="space-y-1 text-[9px] md:text-base text-[white] cursor-pointer">
            <Link className='hover:underline active:opacity-50' href="/"><li>Home</li></Link>
            <Link className='hover:underline active:opacity-50' href="/about"><li>About Us</li></Link>
            <Link className='hover:underline active:opacity-50' href="/products"><li>Products</li></Link>
            <Link className='hover:underline active:opacity-50' href="/recipes"><li>Recipes</li></Link>
            <Link className='hover:underline active:opacity-50' href="/kids"><li>Kids Corner</li></Link>
          </ul>
        </div>
      </div>

      <div className="flex space-x-3 text-[12px] md:text-xl py-[2vh]">
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-[2vh] border-t border-[white] text-xs">
        <div className="flex items-end space-x-2 mb-2 md:mb-0">
          <span className='text-[9px] md:text-base text-[white]'>Subsidiary of</span>
          <Image src="/images/inscor-logo.png" alt="Innscor Logo" width={71} height={33} className="w-[50px] md:w-[100px]" />
        </div>
        <FP className="text-center md:text-left">
          Copyright © 2022 Bakers Inn. All rights reserved. 
          Site by <span className="text-yellow-400 font-semibold">NoWalls Pan Africa</span>
        </FP>
      </div>
    </footer>
  );
}
