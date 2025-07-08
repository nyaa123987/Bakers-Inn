import Button from "./Buttons";
import Image from "next/image";
import H2 from "./Heading2";
import P from "./Paragraph";
import Link from 'next/link';

export default function About() {
    return(
        <main className="bg-white">
            <main>
                <section id="about" className="w-[100%] px-[3%] flex justify-center gap-[5%] md:gap-[15%] pt-[8vh] md:pt-[15vh] pb-[5vh] md:pb-[10vh]">
                    <div>
                    <H2>About Baker's Inn</H2>
                    </div>
                    <div className="w-[50%]">
                    <P className="text-[12px] md:text-[25px] pb-[3vh]">
                        It all started back in the eighties when Baker's Inn was just a small confectionery company that employed 40 people and produced about 30,000 loaves a day. We now aim to provide a nourishing, convenient and accessible answer to hunger’s call.
                    </P>
                    <Link href="/about"><Button>READ MORE</Button></Link>
                    </div>
                </section>
                <section className="flex justify-between px-[3%] pb-[5vh] md:pb-[10vh]">
                    <Image src="/images/sandwiches.png" alt="Sandwiches" width={300} height={300} className="w-[23%] h-[10vh] md:h-[38vh]" />
                    <Image src="/images/meat-pies.png" alt="Meat Pies" width={300} height={300} className="w-[23%] h-[10vh] md:h-[38vh]" />
                    <Image src="/images/doughnut-tea.png" alt="Tea and a doughnut" width={300} height={300} className="w-[23%] h-[10vh] md:h-[38vh]" />
                    <Image src="/images/bread-slices.png" alt="Slices of bread" width={300} height={300} className="w-[23%] h-[10vh] md:h-[38vh]" />
                </section>
            </main>
        </main>
    )
}