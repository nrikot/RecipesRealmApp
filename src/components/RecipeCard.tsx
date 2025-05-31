
import { Clock, Star, Bookmark, Heart, Users } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";

interface Recipe {
  id: string;
  title: string;
  description: string;
  prepTime: string;
  cookTime: string;
  difficulty: number;
  image: string;
  author: string;
  tags: string[];
}

interface RecipeCardProps {
  recipe: Recipe;
}

export const RecipeCard = ({ recipe }: RecipeCardProps) => {
  const renderStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-3 h-3 ${i < difficulty ? 'text-orange-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <Card className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 bg-white border-orange-100 overflow-hidden">
      <Link to={`/recipe/${recipe.id}`} className="block">
        <div className="relative">
          <img 
            src={recipe.image} 
            alt={recipe.title}
            className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute top-3 right-3 space-y-2">
            <Button 
              size="icon" 
              variant="secondary" 
              className="w-8 h-8 bg-white/90 hover:bg-white"
              onClick={(e) => e.preventDefault()}
            >
              <Bookmark className="w-4 h-4 text-orange-500" />
            </Button>
            <Button 
              size="icon" 
              variant="secondary" 
              className="w-8 h-8 bg-white/90 hover:bg-white"
              onClick={(e) => e.preventDefault()}
            >
              <Heart className="w-4 h-4 text-red-500" />
            </Button>
          </div>
          <div className="absolute bottom-3 left-3">
            <div className="flex space-x-1">
              {renderStars(recipe.difficulty)}
            </div>
          </div>
        </div>
        
        <CardContent className="p-4">
          <div className="mb-2">
            <h3 className="font-semibold text-lg text-gray-900 group-hover:text-orange-600 transition-colors line-clamp-1">
              {recipe.title}
            </h3>
            <p className="text-sm text-gray-600 line-clamp-2 mt-1">
              {recipe.description}
            </p>
          </div>

          <div className="flex items-center text-xs text-gray-500 mb-3 space-x-4">
            <div className="flex items-center">
              <Clock className="w-3 h-3 mr-1" />
              {recipe.prepTime}
            </div>
            <div className="flex items-center">
              <Users className="w-3 h-3 mr-1" />
              {recipe.author}
            </div>
          </div>

          <div className="flex flex-wrap gap-1 mb-3">
            {recipe.tags.slice(0, 3).map((tag) => (
              <span 
                key={tag} 
                className="text-xs px-2 py-1 bg-green-100 text-green-700 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </CardContent>
      </Link>
      
      <div className="px-4 pb-4">
        <Link to={`/recipe/${recipe.id}`}>
          <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
            View Recipe
          </Button>
        </Link>
      </div>
    </Card>
  );
};
