import Image from 'next/image';
import P from './Paragraph';

const HarareBulawayo = () => {
    return(
        <main className='flex justify-center gap-[10%] bg-[#F7F5E8] px-[5%] py-[8vh] my-[5vh] md:my-[20vh]'>
            <div>
                <Image src="/images/harare-factory.png" alt='Bread products in a Harare shop' width={500} height={250} />
                <h2 className='text-xl md:text-3xl font-semibold text-[#261B6C] my-4'>Harare Bread Factory</h2>
                <P className='whitespace-pre-line'>{`1 Shepperton Road, Graniteside, Harare

+263 242 710334, +263 242 751481, 
+263 242 751572, +263 242 758659

VOIP: 08677006178
Econet Toll Free: 08080151, 08080152`}</P>
            </div>
            <div>
                <Image src="/images/bulawayo-factory.png" alt='Bread products in a Bulawayo shop' width={500} height={250} />
                <h2 className='text-xl md:text-3xl font-semibold text-[#261B6C] my-4'>Bulawayo Bread Factory</h2>
                <P className='whitespace-pre-line'>{`22 A Bellevue Road, Belmont, Bulawayo

+263 9 78279, +263 9 68826, +263 9 68381, 
+263 9 68383, +263 9 69592, +263 9 76693

VOIP: 08677006179
Econet Toll Free: 08080151, 08080152`}</P>
            </div>
        </main>
    )
}

export default HarareBulawayo;
