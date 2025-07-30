import React from 'react';
import { MenuItem } from '../types';

interface FoodMenuItemProps {
  item: MenuItem;
}

const FoodMenuItem: React.FC<FoodMenuItemProps> = ({ item }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 border-b border-gray-200">
      <div className="flex-1">
        <h3 className="text-lg font-bold text-gray-800">{item.name}</h3>
        <p className="text-gray-600 mt-1">{item.description}</p>
        {item.dietaryInfo && (
          <div className="mt-2 flex gap-2">
            {item.dietaryInfo.map((info, index) => (
              <span 
                key={index} 
                className="inline-block px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-700"
              >
                {info}
              </span>
            ))}
          </div>
        )}
      </div>
      <div className="text-right mt-2 sm:mt-0 font-bold text-[#1E3A8A] text-lg">
        NPR {item.price.toLocaleString()}
      </div>
    </div>
  );
};

export default FoodMenuItem;