import { useState } from 'react';
import RecipeCard from './RecipeCard';
import RecipeModal from './RecipeModal';

export default function RecipesSection() {
  const [activeTab, setActiveTab] = useState('kids');
  const [selectedRecipe, setSelectedRecipe] = useState<null | any>(null);

  const tabs = [
    { key: 'kids', label: 'For Kids' },
    { key: 'vegans', label: 'For Vegans' },
    { key: 'family', label: 'For Family' },
  ];

  // In RecipesSection.tsx
  const recipesData: Record<string, any[]> = {
    kids: [
      {
      title: 'Shwarma Sandwich',
      prep: '20 min',
      serves: '6 people',
      img: '/images/sandwich.png',
      gallery: ['/images/sandwich.png', '/images/sandwich.png', '/images/sandwich.png'],
      ingredients: [
        '½ cup olive oil', '½ cup ranch dressing', '3 tbsp Worcestershire sauce',
        '1 tbsp minced fresh rosemary', '2 tsp salt', '1 tsp lemon juice',
        '1 tsp white vinegar', '¼ tsp ground black pepper'
      ],
      directions: [
        'In a bowl, mix together ingredients. Let stand 5 min.',
        'Preheat grill, thread chicken, discard marinade.',
        'Grill 8–12 min until cooked through.'
      ]
    },
    {}, {}, // just placeholders to create 3 cards
  ],
  vegans: [
    {
      title: 'Sweet Shortbread',
      prep: '15 min',
      serves: '8 people',
      img: '/images/shortbread.png',
      gallery: ['/images/shortbread.png', '/images/shortbread.png', '/images/shortbread.png'],
      ingredients: [
        '2 cups all-purpose flour', '1 cup butter', '½ cup powdered sugar',
        '1 tsp vanilla extract', 'Pinch of salt'
      ],
      directions: [
        'Preheat oven to 350°F (175°C).',
        'Mix butter and sugar until creamy. Add vanilla.',
        'Add flour and salt, mix well. Shape and bake for 12–15 minutes.'
      ]
    },
    {}, {},
  ],
  family: [
    {
      title: 'Salmon Strips',
      prep: '25 min',
      serves: '4 people',
      img: '/images/fish-like.png',
      gallery: ['/images/fish-like.png', '/images/fish-like.png', '/images/fish-like.png'],
      ingredients: [
        '500g salmon fillet', '1 tbsp olive oil', 'Salt and pepper to taste',
        '1 tsp lemon zest', '½ tsp garlic powder'
      ],
      directions: [
        'Preheat oven to 400°F (200°C).',
        'Season salmon with salt, pepper, lemon zest and garlic powder.',
        'Bake for 12–15 minutes until flaky.'
      ]
    },
    {}, {},
  ],
};

  return (
    <section className="bg-white px-4 md:px-12 py-10 mt-[15vh]">
      <h2 className="text-center text-2xl md:text-3xl font-semibold text-[#261B6C] mb-6">
        Baker’s Recipes
      </h2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 text-[#261B6C] text-base md:text-lg">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-1 border-b-2 transition-colors duration-300 ${
              activeTab === tab.key
                ? 'border-[#B2904C] font-bold'
                : 'border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className='w-[100%] h-[0.02vh] bg-[gray] mb-10'></div>

      {/* Recipe Cards */}
      <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-1.5 md:gap-6 mb-12">
        {recipesData[activeTab].map((recipe, idx) => (
          <RecipeCard
            key={idx}
            title={recipesData[activeTab][0].title}
            prep={recipesData[activeTab][0].prep}
            serves={recipesData[activeTab][0].serves}
            img={recipesData[activeTab][0].img}
            onClick={() => setSelectedRecipe(recipesData[activeTab][0])}
          />
        ))}
      </div>

      {/* Modal */}
      {selectedRecipe && (
        <RecipeModal
          onClose={() => setSelectedRecipe(null)}
          title={selectedRecipe.title}
          time={selectedRecipe.prep}
          serves={selectedRecipe.serves}
          ingredients={selectedRecipe.ingredients}
          directions={selectedRecipe.directions}
          img={selectedRecipe.img}
          gallery={selectedRecipe.gallery}
        />
      )}
    </section>
  );
}
