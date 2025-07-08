import Image from 'next/image';
import H3 from './Heading3';
import P from './Paragraph';

const Email = () => {
    return(
        <main className='flex flex-col bg-[#F8F8F8] px-[3%] justify-center align-middle py-[7vh] my-[4vh] md:my-[8vh]'>
            <div className='flex justify-center mb-[6vh]'>
                <Image src='/images/contact-employees.png' alt="Employees working" width={1000} height={200} />
            </div>
            <section className='flex justify-center align-middle gap-[15%]'>
                <div>
                    <H3>For job enquiries , email your CV to</H3>
                    <P className='underline hover:cursor-pointer'>hr@bakersinnzim.com</P>
                </div>
                <div>
                    <H3>For general enquiries, email</H3>
                    <P className='underline hover:cursor-pointer'>marketing@bakersinnzim.com</P>
                </div>
            </section>
        </main>
    )
}

export default Email;