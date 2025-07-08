import Image from 'next/image';
import H2 from './Heading2';
import P from './Paragraph';

const PromiseQuality = () => {
    return(
        <main className='bg-white flex flex-col-reverse md:flex-row justify-center align-middle px-[3%] gap-[4%] py-[5vh]'>
            <div className='flex justify-center align-middle'>
                <Image src="/images/CEO.png" alt="The C.E.O." width={3000} height={2500} />
            </div>
            <div className='flex flex-col justify-center align-middle'>
                <H2 className='text-center md:text-start'>PROMISE OF QUALITY</H2>
                <P className='pb-[1.5vh]'>Thank you for visiting our website. At Baker’s Inn, we are committed to delivering quality premium bread to our customers. We work with a team of over 1500 employees nationwide. Our aim is to uphold the highest ethical standards and perpetuate excellence in the delivery of our products. For us at Baker’s Inn, we aim to improve the accessibility of our bread. We are accountable to our stakeholders to deliver what we promise.</P>
                <P className='pb-[1.5vh]'>We translate plans into actions; dreams into reality; strategies into achievements and tangible returns. We strive to be the best in our business and in our partnerships. We are committed to every retail outlet, tuckshop, vendor and consumer in Zimbabwe who stock or consume our nourishing bread throughout Zimbabwe. We have built our top-quality brand and continue to grow as a company because of you. Thank you for your continued support of our brand.</P>
                <P className='pb-[1.5vh]'>We set inspiring goals that we pursue with passion, unity and focus. We support each other, build on our strengths and ensure that every player in our team contributes fully. We play to win and realise that synergy, communication and alignment bind us together.</P>
                <div className='flex justify-center align-center py-[2vh]'>
                    <div className='pr-[5%] flex align-bottom'>
                        <H2 className='sm:text-xl'>C.E.O:</H2>
                    </div>
                    <div>
                        <Image className='pb-[5vh]' src="/images/signature.png" alt='Signature' width={180} height={40} />
                        <Image src="/images/line.png" alt="Line" width={180} height={2} />
                    </div>
                </div>
            </div>
        </main>
    )
}

export default PromiseQuality;