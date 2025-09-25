import Image from 'next/image';

const KidsHero = () => {
    return(
        <main className='bg-white pl-[6%] md:pl-[10%] pb-[5vh] md:pb-[15vh] pt-[2vh] md:pt-0'>
            <Image src="/images/kids-picture.png" alt="Kids' Section" width={1150} height={900} />
        </main>
    )
}

export default KidsHero;
