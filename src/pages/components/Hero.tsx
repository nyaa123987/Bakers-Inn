import Image from "next/image";
import Button from "./Buttons";
import H1 from "./Heading1";
import P from "./Paragraph";
import Link from "next/link";

export default function Hero() {
    return(
        <main>
            <section className="flex w-[100%] h-[40vh] md:h-[80vh] justify-center items-center bg-[#261B6C] text-[white]">
                <div className="pl-[3%] md:w-[60%]">
                    <H1 className="text-2xl md:text-[60px]">Bringing you the best value at the best prices.</H1>
                    <P className="text-white text-base md:text-[22px] pb-[3vh]">The freshest sandwiches you can make are with Baker’s inn soft white loaf.</P>
                    <Link href="#about"><Button>READ MORE</Button></Link>
                </div>
                <div className="flex">
                <Image src="/images/hero-background.png" alt="Loaves of bread" width={2000} height={2000} className="w-[100%]" />
                </div>
            </section>
        </main>
    )
}