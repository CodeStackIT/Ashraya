import React from 'react';

interface Category {
  key: string;
  label: string;
}

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({ 
  categories, 
  selectedCategory, 
  onCategoryChange 
}) => {
  return (
    <div className="flex justify-center mb-12 w-full">
      <div className="bg-white text-white rounded-2xl p-4 shadow-lg max-w-6xl">
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => onCategoryChange(category.key)}
              className={`px-4 py-2 rounded-full transition-all duration-300 font-medium text-sm whitespace-nowrap bg-pink-900 text-white  ${
                selectedCategory === category.key
                  ? 'bg-slate-900 text-yellow-400 shadow-md'
                  : 'text-white hover:bg-pink-700'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter;
