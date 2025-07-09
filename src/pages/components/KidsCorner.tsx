import Image from 'next/image';
import Link from 'next/link';

export default function KidsCorner() {
    return(
        <main className='bg-white relative flex justify-center items-center'>
            <Image src="/images/kids-corner.jpg" alt="Picture of kids' games" width={7000} height={10} />
            <div className='absolute pl-[45%] pt-[10vh] md:pt-[20vh] lg:pt-[35vh]'>
                <Link href="/kids"><button className='uppercase text-[10px] py-[4px] px-[20px] md:py-[8px] md:px-[40px] cursor-pointer md:text-[20px] bg-[#FF4655] hover:bg-[#d31525] active:bg-[#d31525]/80 text-white rounded'>play games</button></Link>
            </div>
        </main>
    )
}
