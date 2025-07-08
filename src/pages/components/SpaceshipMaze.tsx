import Image from 'next/image';
import Button from './Buttons';
import H2 from './Heading2';
import P from './Paragraph';

const SpaceshipMaze = () => {
    return(
        <main className='bg-[#018BF1] flex flex-col text-center md:text-start md:flex-row md:h-[80vh] px-[3%] py-[2vh] md:my-[6vh] gap-[15%] justify-between align-middle'>
            <div className='flex flex-col justify-center'>
                <H2 className='text-white'>Spaceship Maze</H2>
                <P className='pb-[2vh] text-white text-[15px] md:text-[20px]'>Help the spaceship through the maze to get back to earth. Move through levels with increasing difficulty; each puzzle starts the ship in a different location.</P>
                <P className='pb-[2vh] text-white text-[15px] md:text-[20px]'>Develop kids’ skills in strategizing, spatial awareness, hand-eye coordination, problem solving and more! Free to play, priceless for learning.</P>
                <div>
                    <a href="https://toytheater.com/maze/" target="_blank" rel="noopener noreferrer">
                        <Button>play game</Button>
                    </a>
                </div>
            </div>
            <div className='flex justify-center align-middle p-[5vh]'>
                <Image src="/images/Maze.png" alt="Spaceship maze" width={1500} height={1000} />
            </div>
        </main>
    )
}

export default SpaceshipMaze;