import Image from 'next/image';
import { FaTwitter, FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import FH1 from "./FooterHeading1";
import FP from './FooterParagraph';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-[#261B6C] text-white px-[3%]">

      <div className="flex items-end justify-center">
        <hr className="flex-1 border-t border-[white]" />
        <Link href="/"><Image src="/images/icon.png" alt="Logo" width={100} height={100} className=" mx-2 md:mx-4 w-[50px] md:w-[100px]" /></Link>
        <hr className="flex-1 border-t border-[white]" />
      </div>

      <div className="flex justify-between pt-[3vh] md:pt-[5vh] pb-[2vh] gap-8 text-sm">

        <div>
          <FH1>Instagram Feed</FH1>
          <div className="flex space-x-2 mb-3">
            <Image src="/images/bean-bowel.png" alt="Baked product" width={110} height={100} className="w-[30px] md:w-[120px] h-[20px] md:h-[100px]" />
            <Image src="/images/two-sandwiches.png" alt="Baked product" width={110} height={100} className="w-[30px] md:w-[120px] h-[20px] md:h-[100px]" />
            <Image src="/images/salad.png" alt="Baked product" width={110} height={100} className="w-[30px] md:w-[120px] h-[20px] md:h-[100px]" />
          </div>
        </div>

        <div>
          <FH1>Our Location</FH1>
          <FP>1 Shepperton Road, Graniteside,<br />Harare, Zimbabwe.</FP>
        </div>

        <div>
          <FH1>Get In Touch With Us</FH1>
          <ul className="space-y-1 text-[9px] md:text-base text-[white]">
            <li>📞 08080151</li>
            <li>📞 08080152</li>
            <li>   +263 242 751 481</li>
            <li>   +263 242 710 334</li>
            <li>📧 marketing@bakersinnzim.com</li>
          </ul>
        </div>

        <div>
          <FH1>Sitemap</FH1>
          <ul className="space-y-1 text-[9px] md:text-base text-[white]">
            <Link href="/"><li>Home</li></Link>
            <Link href="/about"><li>About Us</li></Link>
            <Link href="/products"><li>Products</li></Link>
            <Link href="/recipes"><li>Recipes</li></Link>
            <Link href="/kids"><li>Kids Corner</li></Link>
          </ul>
        </div>
      </div>

      <div className="flex space-x-3 text-sm md:text-xl py-[2vh]">
        <a href="#"><FaTwitter /></a>
        <a href="#"><FaFacebookF /></a>
        <a href="#"><FaLinkedinIn /></a>
      </div>

      <div className="flex flex-col md:flex-row justify-between items-center py-[2vh] border-t border-[white] text-xs">
        <div className="flex items-end space-x-2 mb-2 md:mb-0">
          <span className='text-[9px] md:text-base text-[white]'>Subsidiary of</span>
          <Image src="/images/inscor-logo.png" alt="Innscor Logo" width={71} height={33} />
        </div>
        <FP className="text-center md:text-left">
          Copyright © 2022 Bakers Inn. All rights reserved. 
          Site by <span className="text-yellow-400 font-semibold">NoWalls Pan Africa</span>
        </FP>
      </div>
    </footer>
  );
}
