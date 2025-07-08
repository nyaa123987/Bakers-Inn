import Image from 'next/image';
import P from './Paragraph';

export default function AboutSection() {
    return(
        <main className='flex align-middle px-[3%] justify-between gap-[5%] bg-[#F7F5E8] w-[100%] py-[10vh] md:p-[20vh] md:my-[20vh]'>
            <div className='flex gap-[3%]'>
                <div>
                    <Image src="/images/brown-flag.png" alt="Mission" width={150} height={150} />
                </div>
                <div>
                    <h2 className='text-lg md:text-3xl font-semibold text-[#261B6C] mb-3'>Our Mission</h2>
                    <P className="text-[13px] md:text-[18px]">To sharpen our edge in the manufacture and marketing of quality baked products.</P>
                </div>
            </div>
            <div className='flex gap-[3%]'>
                <div>
                    <Image src="/images/brown-eye.png" alt="Vision" width={150} height={150} />
                </div>
                <div>
                    <h2 className='text-lg md:text-3xl font-semibold text-[#261B6C] mb-3'>Our Vision</h2>
                    <P className="text-[13px] md:text-[18px]"  >To provide a nourishing, convenient and accessible answer to hunger’s call.</P>
                </div>
            </div>
        </main>
    )
}