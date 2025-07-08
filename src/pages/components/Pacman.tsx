import Image from 'next/image';
import Button from './Buttons';
import H2 from './Heading2';
import P from './Paragraph';

const SpaceshipMaze = () => {
    return(
        <main className='bg-[#261B6C] flex flex-col text-center md:text-start md:flex-row md:h-[80vh] px-[3%] py-[2vh] md:my-[6vh] gap-[15%] justify-between align-middle'>
            <div className='flex flex-col justify-center'>
                <H2 className='text-white'>Pacman</H2>
                <P className='pb-[2vh] text-white text-[15px] md:text-[20px]'>There's nothing like a little old school Pacman game right? The great arcade game Pac Man was ported to the NES in 1988 and you can play it right here. Never played before?! What?! Eat all the pellets to complete a stage while trying to score as many points as possible by eating fruit and ghosts along the way! But there's more! Ever wonder how Pacman got started? Check out the history of Pacman below and see how it all began.</P>
                <div>
                    <a href="https://www.pacman1.net/" target="_blank" rel="noopener noreferrer">
                        <Button>play game</Button>
                    </a>
                </div>
            </div>
            <div className='flex justify-center pt-[3vh]'>
                <Image src="/images/Pacman.png" alt="Pacman" width={2500} height={2000} />
            </div>
        </main>
    )
}

export default SpaceshipMaze;