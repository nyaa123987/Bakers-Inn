import Image from 'next/image';
import H3 from './Heading3';
import P from './Paragraph';

type ProductCardProps = {
  title: string;
  info: string;
  img: string;
  onClick: () => void;
};

export default function ProductCard({ title, info, img, onClick }: ProductCardProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col items-center rounded bg-[#F7F5E8] relative"
    >
      <div className='pt-[2vh]'>
        <Image 
          src={img} 
          alt={title} 
          width={200} 
          height={75} 
          className="object-cover"
        />
      </div>
      <div className='pb-[3vh] flex flex-col text-center px-[3%] mt-2'>
        <H3 className='text-[12px]'>{title}</H3>
        <P className='text-[8px]'>{info}</P>
      </div>
    </div>
  );
}
 