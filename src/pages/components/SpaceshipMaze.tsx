import Image from 'next/image';
import Button from './Buttons';
import H3 from './Heading3';

const SpaceshipMaze = () => {
    return(
        <main className='bg-[#018BF1] flex flex-col text-center md:text-start md:flex-row md:h-[80vh] px-[3%] py-[2vh] md:my-[6vh] gap-[15%] justify-between align-middle'>
            <div className='flex flex-col justify-center'>
                <H3 className='text-white'>Spaceship Maze</H3>
                <p className='pb-[2vh] md:pt-[4vh] text-white text-[12px] md:text-[20px]'>Help the spaceship through the maze to get back to earth. Move through levels with increasing difficulty; each puzzle starts the ship in a different location.</p>
                <p className='pb-[2vh] md:pb-[4vh] text-white text-[12px] md:text-[20px]'>Develop kids’ skills in strategizing, spatial awareness, hand-eye coordination, problem solving and more! Free to play, priceless for learning.</p>
                <div>
                    <a href="https://toytheater.com/maze/" target="_blank" rel="noopener noreferrer">
                        <Button>play game</Button>
                    </a>
                </div>
            </div>
            <div className='flex justify-center align-middle p-[5vh]'>
                <Image src="/images/Maze.png" alt="Spaceship maze" width={1500} height={1000} className='w-25 md:w-200' />
            </div>
        </main>
    )
}

export default SpaceshipMaze;
