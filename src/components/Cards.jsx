
import React from 'react';
import { GiCoffeeBeans } from "react-icons/gi";
const cardsData = [
  {
    id: 1,
    title: 'Espresso',
    description: 'Strong and bold coffee shot.',
    imageUrl: '/Cappuccino_at_Sightglass_Coffee.jpg',
  },
  {
    id: 2,
    title: 'Latte',
    description: 'Smooth and creamy milk coffee.',
    imageUrl: '/lato.jpg',
  },
  {
    id: 3,
    title: 'Cappuccino',
    description: 'Rich coffee with a thick layer of foam.',
    imageUrl: 'https://example.com/cappuccino.jpg',
  },
  {
    id: 4,
    title: 'Cappuccino',
    description: 'Rich coffee with a thick layer of foam.',
    imageUrl: 'https://example.com/cappuccino.jpg',
  },
  {
    id: 5,
    title: 'Cappuccino',
    description: 'Rich coffee with a thick layer of foam.',
    imageUrl: 'https://example.com/cappuccino.jpg',
  },
];

const Cards = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-8 text-center">Our Coffee Selection</h2>
      <div className='flex justify-center text-5xl pb-7 pt-0'><GiCoffeeBeans /></div>
      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-8">
        {cardsData.map((card) => (
          <div key={card.id} className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src={card.imageUrl} alt={card.title} className="w-full h-64 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
              <p className="text-gray-700">{card.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cards;