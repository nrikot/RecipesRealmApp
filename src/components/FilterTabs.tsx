
import { useState } from "react";
import { Button } from "@/components/ui/button";

const filterOptions = [
  { id: "all", label: "All Recipes", icon: "🍽️" },
  { id: "quick", label: "Quick & Easy", icon: "⚡" },
  { id: "healthy", label: "Healthy", icon: "🥗" },
  { id: "vegetarian", label: "Vegetarian", icon: "🌱" },
  { id: "dessert", label: "Desserts", icon: "🍰" },
  { id: "spicy", label: "Spicy", icon: "🌶️" },
  { id: "comfort", label: "Comfort Food", icon: "🍲" }
];

export const FilterTabs = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  return (
    <div className="mb-8">
      <div className="flex flex-wrap gap-2 justify-center">
        {filterOptions.map((option) => (
          <Button
            key={option.id}
            variant={activeFilter === option.id ? "default" : "outline"}
            className={`
              px-4 py-2 rounded-full text-sm transition-all duration-200
              ${activeFilter === option.id 
                ? 'bg-orange-500 hover:bg-orange-600 text-white border-orange-500' 
                : 'bg-white hover:bg-orange-50 text-gray-700 border-orange-200 hover:border-orange-300'
              }
            `}
            onClick={() => setActiveFilter(option.id)}
          >
            <span className="mr-2">{option.icon}</span>
            {option.label}
          </Button>
        ))}
      </div>
    </div>
  );
};
