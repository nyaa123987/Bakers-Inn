import Image from 'next/image';
import H3 from './Heading3';
import P from './Paragraph';

type RecipeCardProps = {
  title: string;
  prep: string;
  serves: string;
  img: string;
  onClick: () => void;
};

export default function RecipeCard({ title, prep, serves, img, onClick }: RecipeCardProps) {
  return (
    <div
      onClick={onClick}
      className="cursor-pointer bg-white rounded shadow-xl overflow-hidden"
    >
      <Image src={img} alt={title} width={150} height={75} className="w-full object-cover px-[2%] py-[2vh]" />
      <div className='flex justify-between pb-[1vh] md:pb-[3vh]'>
        <div className="px-[3%]">
          <H3>{title}</H3>
          <P>Prep Time: {prep}</P>
          <P>Serves: {serves}</P>
        </div>
        <div className="flex justify-end align-bottom items-end px-[3%]">
            <button className="bg-[#B2904C] text-white rounded-full px-1 md:px-4 md:py-3">→</button>
        </div>
      </div>
    </div>
  );
}
