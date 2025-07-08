"use client";

import { usePathname } from "next/navigation";
import { useState, useEffect } from "react"; // Import useEffect for potential future use or debugging

import Image from 'next/image';
import Link from 'next/link';
import Button from "./Buttons"; // Assuming this is your custom Button component
import { Menu, X } from "lucide-react";

export default function Navbar() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    // Debugging: Log pathname to console
    useEffect(() => {
        console.log("Current pathname:", pathname);
    }, [pathname]);

    // Function to close mobile menu
    const closeMobileMenu = () => {
        setOpen(false);
    };

    return (
        <nav className='relative flex justify-between items-center bg-white text-[#261B6C] text-[10px] md:text-[20px]'>
            <Link href="/" onClick={closeMobileMenu}> {/* Close menu if clicking logo */}
                <Image src="/images/logo.png" alt="Baker's Inn Logo" width={167} height={167} className='cursor-pointer w-[30%] md:w-[80%]' />
            </Link>

            <div className='flex items-center gap-[0.6rem] md:gap-[2rem]'>
                <Link href="/about">
                    <span className={pathname?.startsWith("/about") ? "text-[#261B6C] font-bold !important" : "font-light"}>About Us</span>
                </Link>
                <Link href="/products">
                    <span className={pathname?.startsWith("/products") ? "text-[#261B6C] font-bold !important" : "font-light"}>Products</span>
                </Link>
                <Link href="/recipes">
                    <span className={pathname?.startsWith("/recipes") ? "text-[#261B6C] font-bold !important" : "font-light"}>Recipes</span>
                </Link>
                <Link href="/kids">
                    <span className={pathname?.startsWith("/kids") ? "text-[#261B6C] font-bold !important" : "font-light"}>Kid's Corner</span>
                </Link>
                <Link href="/contact">
                    <Button>CONTACT US</Button>
                </Link>
            </div>
       </nav>
    );
}