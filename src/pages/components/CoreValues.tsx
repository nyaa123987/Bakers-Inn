import H2 from './Heading2';
import H3 from './Heading3';
import P from './Paragraph';

export default function CoreValues() {
  const values = [
    {
      title: "Teamwork",
      description:
        "We set inspiring goals. We share our skills, passion, and insight freely. We support each other. Built on our curiosity, love and humor, we deeply believe in our team spirit to move fully. We give 50% individual and 50% team responsibility, recognition and alignment lead to loyalty.",
      img: "/images/value-1.png",
    },
    {
      title: "Respect",
      description:
        "We build our success by treating each other fairly, confidentially, directly and respectfully. We stay empathetic, disciplined and build on our values. We create an open environment, creativity and innovation.",
      img: "/images/value-2.png",
    },
    {
      title: "Integrity",
      description:
        "We uphold the highest professional and ethical standards. We do what we say and produce the best bread. Our promise are bankable.",
      img: "/images/value-3.png",
    },
    {
      title: "Commitment",
      description:
        "We associate our bread capabilities and ourselves to deliver what we promise. We strive to achieve sustainable and profitable transactions and long-lasting returns.",
      img: "/images/value-4.png",
    },
    {
      title: "Excellence",
      description:
        "We strive to be the best in our business. We prepare for the future, act together, stay humble and are open to change. We always search for quality in our processes to enrich our offering with pride.",
      img: "/images/value-5.png",
    },
  ];

  return (
    <section className="text-center w-full px-4 md:px-12 py-12 bg-[#F8F8F8]">
      <H2>Our Core Values</H2>
      <div className="grid grid-cols-3 md:grid-cols-3 md:gap-6 max-w-6xl md:mx-auto">
        {/* First row: 3 cards */}
        {values.slice(0, 3).map((value, idx) => (
          <div key={idx} className="flex flex-col items-center text-center rounded p-4">
            <img src={value.img} alt={value.title} className="md:w-80 md:h-50 object-cover rounded mb-4" />
            <H3 className='text-[12px]'>{value.title}</H3>
            <P className='text-[8px]'>{value.description}</P>
          </div>
        ))}

        {/* Second row */}
        <div className="grid grid-cols-2 md:grid-cols-2 md:gap-6 max-w-6xl md:mx-auto">
          {values.slice(2).map((value, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center rounded p-4 w-full">
              <img src={value.img} alt={value.title} className="md:w-full md:h-50 object-cover rounded mb-4" />
              <H3 className='text-[12px]'>{value.title}</H3>
              <P className='text-[8px]'>{value.description}</P>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
