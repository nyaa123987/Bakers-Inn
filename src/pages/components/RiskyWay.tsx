import Image from 'next/image';
import H2 from './Heading2';
import P from './Paragraph';

const RiskyWay = () => {
    return(
        <main className='bg-[#FF4655] flex flex-col text-center md:text-start md:flex-row md:h-[80vh] px-[3%] py-[2vh] md:my-[6vh] gap-[15%] justify-between align-middle'>
                    <div className='flex flex-col justify-center'>
                        <H2 className='text-white'>Risky Way</H2>
                        <P className='pb-[2vh] text-white text-[15px] md:text-[20px]'>Risky Way is a free instant game. The highways of the future are risky and if you want to survive you&apos;ll need to be smarter than all of them combined. All you have to do in this nerve-tingling racing game is click, hold, and let go. Of course, if you want to be an effective driver who is able to survive you&apos;ll have to know when to click, how long to hold, and only let go at the appropriate time.</P>
                        <div>
                            <a href="https://www.addictinggames.com/action/risky-way#url" target="_blank" rel="noopener noreferrer">
                                <button className='uppercase text-[10px] py-[4px] px-[20px] md:py-[8px] md:px-[40px] cursor:pointer md:text-[20px] bg-[white] text-[#FF4655] rounded'>play game</button>
                            </a>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Image src="/images/RiskyWay.png" alt="Risky way" width={2500} height={2000} />
                    </div>
                </main>
    )
}

export default RiskyWay;