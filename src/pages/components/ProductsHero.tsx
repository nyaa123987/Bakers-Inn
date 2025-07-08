import H1 from './Heading1';

const ProductsHero = () => {
    return(
        <section
            className="relative w-[100%] h-[50vh] md:h-[80vh] pt-[2vh] px-[5%] flex items-end justify-start"
            style={{
                backgroundImage: "url('/images/ProductHero.png')",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
                backgroundPosition: "center",
                imageRendering: "auto",
            }}>

                <div className="absolute inset-0 bg-black opacity-10"></div>

                <div className="relative z-10">
                    <H1>Our Product Range</H1>
                </div>
        </section>
    )
}

export default ProductsHero;