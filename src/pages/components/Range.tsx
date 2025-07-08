import Image from "next/image";
import Button from "./Buttons";
import H2 from "./Heading2";
import Link from "next/link";

export default function Range() {
    return(
        <>
            <section className="bg-[#F8F8F8] px-[3%] py-[10vh] md:py-[17vh] flex flex-col justify-center">
                <div className="flex justify-center">
                    <H2 className="pb-[5vh]">Our Product Range</H2>
                </div>
                <div className="flex justify-between">
                    <Image src="/images/slices-of-bread.png" alt="Slices of bread" width={300} height={300} className="w-[23%] h-[10vh] md:h-[38vh]" />
                    <Image src="/images/meat-pies.png" alt="Meat Pies" width={300} height={300} className="w-[23%] h-[10vh] md:h-[38vh]" />
                    <Image src="/images/scones.png" alt="Scones" width={300} height={300} className="w-[23%] h-[10vh] md:h-[38vh]" />
                    <Image src="/images/round-doughnuts.png" alt="Doughnuts" width={300} height={300} className="w-[23%] h-[10vh] md:h-[38vh]" />
                </div>
                <div className="flex justify-center pt-[8vh]">
                    <Link href="/products"><Button>VIEW COMPLETE RANGE</Button></Link>
                </div>
            </section>
        </>
    )
}
