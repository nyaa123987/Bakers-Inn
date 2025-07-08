import { useState } from 'react';
import ProductCard from './ProductCard';
import H2 from './Heading2';

// Define product type
type Product = {
  title: string;
  info: string;
  img: string;
};

export default function ProductsSection() {
  const [activeTab, setActiveTab] = useState('bread');

  const tabs = [
    { key: 'bread', label: 'Bread' },
    { key: 'pies', label: 'Meat Pies' },
    { key: 'scones', label: 'Scones' },
    { key: 'donuts', label: 'Donuts' },
  ];

  const productsData: Record<string, Product[]> = {
    bread: [
      { title: 'Premium Soft White Loaf', info: 'Our Premium Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Standard Loaf has 18 slices.', img: '/images/slantBread.png' },
      { title: 'Family Loaf High Energy Brown', info: 'Our Family Loaf High Energy Brown loaves are a great source of fibre, high in energy and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs – anything! The Family Loaf has 21 slices.', img: '/images/bread1.png' },
      { title: 'Family Loaf Soft White', info: 'Our Family Loaf Soft White loaves are delightfully soft, fresh and delicious. They are loaded with energy and fortified with vitamins and minerals for the classic everyday bread. The Family Loaf has 21 slices.', img: '/images/bread3.png' },
      { title: 'Premium Low Gi Seed-Loaf', info: 'Premium Low Gi Seed-Loaf. The Standard Loaf has 18 slices.', img: '/images/bread4.png' },
      { title: 'Premium High Energy Brown Loaf', info: 'Our Premium High Energy Brown loaves are a great source of fibre, high in energy and fortified with vitamins and minerals! They are perfect for sandwiches, toast, breadcrumbs – anything! The Standard Loaf has 18 slices.', img: '/images/bread5.png' },
      { title: 'Premium Whole Grain Loaf', info: 'Our Premium Whole Grain loaves are packed with nutrients including protein, fibre, B vitamins, antioxidants and trace minerals. A diet with wholegrain has been shown to reduce the risk of heart disease and diabetes. The Standard Loaf has 18 slices.', img: '/images/bread6.png' },
    ],
    pies: [
      { title: 'Premium Soft White Loaf', info: 'Lorem ipsum dolor sit amet...', img: '/images/ProductMeatpie.png' },
      { title: 'Family Loaf High Energy Brown', info: 'Lorem ipsum dolor sit amet...', img: '/images/ProductMeatpie.png' },
      { title: 'Family Loaf Soft White', info: 'Lorem ipsum dolor sit amet...', img: '/images/ProductMeatpie.png' },
    ],
    scones: [
      { title: 'Sugar Free Scone', info: 'Lorem ipsum dolor sit amet...', img: '/images/ProductScone.png' },
      { title: 'Sugar Free Scone', info: 'Lorem ipsum dolor sit amet...', img: '/images/ProductScone.png' },
      { title: 'Sugar Free Scone', info: 'Lorem ipsum dolor sit amet...', img: '/images/ProductScone.png' },
    ],
    donuts: [
      { title: 'Chocolate Donut', info: 'Lorem ipsum dolor sit amet...', img: '/images/ProductBrown.png' },
      { title: 'Chocolate Donut', info: 'Lorem ipsum dolor sit amet...', img: '/images/ProductWhite.png' },
      { title: 'Chocolate Donut', info: 'Lorem ipsum dolor sit amet...', img: '/images/ProductBrown.png' },
    ],
  };

  return (
    <section className="bg-white px-4 md:px-12 md:py-8 pt-[15vh]">
      <H2 className="text-center">Our Products</H2>

      {/* Tabs */}
      <div className="flex justify-center gap-6 text-[#261B6C] text-base md:text-lg">
        {tabs.map(tab => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`pb-1 border-b-2 transition-colors duration-300 ${
              activeTab === tab.key ? 'border-[#B2904C] font-bold' : 'border-transparent'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div className="w-[100%] h-[0.02vh] bg-[gray] mb-10"></div>

      {/* Product Cards */}
      {activeTab === 'bread' ? (
        <div className="flex overflow-x-auto gap-6 pb-14">
          {productsData[activeTab].map((product, idx) => (
            <div key={idx} className="flex-shrink-0 w-[30%] sm:w-[35%] md:w-[30%] lg:w-[30%]">
              <ProductCard
                title={product.title}
                info={product.info}
                img={product.img}
                onClick={() => {}}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 gap-6 pb-1">
          {productsData[activeTab].map((product, idx) => (
            <ProductCard
              key={idx}
              title={product.title}
              info={product.info}
              img={product.img}
              onClick={() => {}}
            />
          ))}
        </div>
      )}
    </section>
  );
}
