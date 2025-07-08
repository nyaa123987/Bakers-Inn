import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function HighlightImages() {
  const images = [
    '/images/img1.png',
    '/images/img2.png',
    '/images/img3.png',
    '/images/img4.png',
  ];

  const [activeIndex, setActiveIndex] = useState<number | null>(0);

  useEffect(() => {
    let current = 0;
    let showAll = false;

    const interval = setInterval(() => {
      if (showAll) {
        showAll = false;
        setActiveIndex(0);
        current = 0;
      } else if (current === images.length - 1) {
        setActiveIndex(null); // null = show all at full opacity
        showAll = true;
      } else {
        current += 1;
        setActiveIndex(current);
      }
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <main className='bg-white flex px-[3%] items-center py-[3vh]'>
        <div className='flex flex-col justify-center'>
            <h1 className='font-bold text-2xl md:text-5xl text-[#261B6C] mb-[2vh]'>The Finest of Baker’s Tik Tok Community Recipes</h1>
            <p className='text-sm md:text-lg text-[#261B6C] pb-[1vh]'>Make the finest croissants worthy of    Paris from your     home</p>
            <p className='text-sm md:text-lg text-[#261B6C] pb-[1vh]'>#Croissant #Zimbabwe #Paris #Baker’s_Inn</p>
            <div className='flex'>
                <p className='text-sm md:text-xl text-[#B2904C] text-bold'>@The_Bakers_Inn</p>
            </div>
        </div>
        <div className="flex gap-2 md:gap-4 justify-center">
        {/* First column: images 0 and 1 */}
        <div className="flex flex-col gap-2 md:gap-4">
            {[0, 1].map((idx) => (
            <div key={idx} className="relative w-25 h-25 md:w-60 md:h-60">
                <Image
                src={images[idx]}
                alt={`Image ${idx + 1}`}
                fill
                className={`object-cover rounded transition-opacity duration-500 ${
                    activeIndex === null || activeIndex === idx ? 'opacity-100' : 'opacity-50'
                }`}
                />
            </div>
            ))}
        </div>

        {/* Second column: images 2 and 3 */}
        <div className="flex flex-col gap-2 md:gap-4">
            {[2, 3].map((idx) => (
            <div key={idx} className="relative w-25 h-25 md:w-60 md:h-60">
                <Image
                src={images[idx]}
                alt={`Image ${idx + 1}`}
                fill
                className={`object-cover rounded transition-opacity duration-500 ${
                    activeIndex === null || activeIndex === idx ? 'opacity-100' : 'opacity-50'
                }`}
                />
            </div>
            ))}
        </div>
        </div>
    </main>
  );
}
