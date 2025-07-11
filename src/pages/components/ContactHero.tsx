import H1 from './Heading1';

const ContactHero = () => {
    return(
        <section
            className="bg-white relative w-[100%] h-[50vh] md:h-[80vh] pt-[2vh] px-[5%] flex items-end justify-start"
            style={{
                backgroundImage: "url('/images/Contact-home.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                imageRendering: "auto",
            }}>

            <div className="absolute inset-0 bg-black opacity-20"></div>

            <div className="relative z-10">
                <H1>Contact Us</H1>
            </div>
        </section>
    )
}

export default ContactHero;