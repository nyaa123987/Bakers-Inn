import { IoClose } from 'react-icons/io5';

type RecipeModalProps = {
  onClose: () => void;
  title: string;
  time: string;
  serves: string;
  ingredients: string[];
  directions: string[];
  img: string;
  gallery: string[];
};

export default function RecipeModal({
  onClose,
  title,
  time,
  serves,
  ingredients,
  directions,
  gallery,
}: RecipeModalProps) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white max-w-4xl w-full rounded p-6 relative overflow-y-auto max-h-[90vh]">
        {/* Close button */}
        <button onClick={onClose} className="absolute top-4 right-4 text-[#261B6C] text-2xl">
          <IoClose />
        </button>

        <div className="flex flex-col md:flex-row gap-4">
          {/* Main image & gallery */}
          <div className="flex-1">
            <img src="/images/sandwiches.png" alt="Shwarma" className="rounded w-[20] h-[10]" />
            <div className="grid grid-cols-3 gap-2 mt-2">
              {gallery.map((g, idx) => (
                <img key={idx} src={g} alt="" className="rounded w-[20] h-[10]" />
              ))}
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 text-[#261B6C]">
            <h2 className="text-xl md:text-2xl font-bold mb-2">{title}</h2>
            <div className="flex gap-4 mb-4 text-[#B2904C] font-semibold">
              <span>🕒 {time}</span>
              <span>🍽 {serves}</span>
            </div>
            <h3 className="font-semibold mb-1">Ingredients</h3>
            <ul className="mb-3 border-t border-[#B2904C] pt-2 text-sm space-y-1">
              {ingredients.map((item, idx) => <li key={idx}>{item}</li>)}
            </ul>
            <h3 className="font-semibold mb-1">Directions</h3>
            <div className="border-t border-[#B2904C] pt-2 text-sm space-y-2">
              {directions.map((step, idx) => (
                <p key={idx}><strong>Step {idx+1}:</strong> {step}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
