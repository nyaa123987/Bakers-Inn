import Image from 'next/image';
import H1 from './Heading1';

export default function AboutHero() {
    return(
        <section
        className="relative w-[100%] h-[50vh] md:h-[80vh] pt-[2vh] px-[5%] flex items-end justify-start"
        style={{
            backgroundImage: "url('/images/about-us-hero.png')",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            imageRendering: "auto",
        }}>

            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="relative z-10">
                <H1>About Us</H1>
            </div>
        </section>
    )
}