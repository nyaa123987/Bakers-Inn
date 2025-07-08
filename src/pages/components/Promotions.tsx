import Image from 'next/image';
import H2 from './Heading2';

export default function Promotions() {
  return (
    <section className="bg-[#B2904C] rounded px-6 md:px-12 py-8 md:py-10 flex items-center justify-between max-w-6xl mx-[3%]">
      {/* Left side: text & form */}
      <div className="flex-1 mb-6 md:mb-0 md:mr-8">
        <H2 className="text-white py-[3vh] w-[60%]">
          Get Notified About Promotions We Offer
        </H2>
        <form className="flex">
          <input
            type="email"
            placeholder="your email"
            className=" px-2 py-1 md:px-4 md:py-2 rounded-l bg-[#EAD7A5] text-[#261B6C] w-full md:w-auto focus:outline-none"
          />
          <button
            type="submit"
            className="bg-[#261B6C] text-white font-semibold px-1 md:px-4 md:py-2 rounded-r uppercase"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right side: bread images */}
      <div className="flex-1 flex justify-center md:justify-end gap-4">
        <Image src="/images/three-loaves.png" alt="Premium Baker's Inn loaves" width={580} height={200} />
      </div>
    </section>
  );
}
