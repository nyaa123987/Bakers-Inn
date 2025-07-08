import Image from 'next/image';
import Button from './Buttons';
import Link from 'next/link';

export default function KidsCorner() {
    return(
        <main className='bg-white relative flex justify-center items-center'>
            <Image src="/images/kids-corner.jpg" alt="Picture of kids' games" width={7000} height={10} />
            <div className='absolute pl-[45%] pt-[10vh] md:pt-[20vh] lg:pt-[35vh]'>
                <Link href="/kids"><Button>play games</Button></Link>
            </div>
        </main>
    )
}

