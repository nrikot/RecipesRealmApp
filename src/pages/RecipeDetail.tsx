
import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { ArrowLeft, Clock, Star, Users, Bookmark, Heart, Edit, Share2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Header } from "@/components/Header";

const RecipeDetail = () => {
  const { id } = useParams();
  
  // Mock recipe data - in a real app, this would be fetched based on the id
  const recipe = {
    id: id || "1",
    title: "Spicy Mapo Tofu",
    description: "Authentic Sichuan comfort food with silky tofu and bold flavors that will warm your soul",
    prepTime: "15 min",
    cookTime: "20 min",
    difficulty: 4,
    images: [
      "https://images.unsplash.com/photo-1563379091919-8be7d5c36f61?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1574484284002-952d92456975?w=800&h=600&fit=crop"
    ],
    author: "Chef Maria",
    tags: ["Spicy", "Vegetarian", "Asian", "Comfort Food"],
    youtubeUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    ingredients: [
      { name: "Silken tofu", amount: "300g" },
      { name: "Ground pork", amount: "100g" },
      { name: "Doubanjiang (fermented bean paste)", amount: "2 tbsp" },
      { name: "Sichuan peppercorns", amount: "1 tsp" },
      { name: "Green onions", amount: "3 stalks" },
      { name: "Garlic", amount: "3 cloves" },
      { name: "Ginger", amount: "1 inch piece" },
      { name: "Soy sauce", amount: "2 tbsp" }
    ],
    instructions: [
      { step: 1, text: "Cut tofu into 1-inch cubes and set aside. Finely chop garlic, ginger, and green onions.", image: "https://images.unsplash.com/photo-1563379091919-8be7d5c36f61?w=400&h=300&fit=crop" },
      { step: 2, text: "Heat oil in a wok over medium-high heat. Add ground pork and cook until crispy.", image: null },
      { step: 3, text: "Add doubanjiang, garlic, and ginger. Stir-fry for 30 seconds until fragrant.", image: null },
      { step: 4, text: "Add tofu cubes gently and simmer for 3-4 minutes. Garnish with green onions and serve hot.", image: null }
    ]
  };

  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const renderStars = (difficulty: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star 
        key={i} 
        className={`w-4 h-4 ${i < difficulty ? 'text-orange-400 fill-current' : 'text-gray-300'}`} 
      />
    ));
  };

  const getYouTubeVideoId = (url: string) => {
    const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/)([^&\n?#]+)/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  const youtubeVideoId = getYouTubeVideoId(recipe.youtubeUrl);

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Header />
      
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">{recipe.title}</h1>
        </div>

        {/* Hero Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
          {/* Image Gallery */}
          <div className="space-y-4">
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={recipe.images[currentImageIndex]} 
                alt={recipe.title}
                className="w-full h-80 object-cover"
              />
              <div className="absolute bottom-4 left-4 flex space-x-2">
                {recipe.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`w-3 h-3 rounded-full ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
            
            {/* YouTube Video */}
            {youtubeVideoId && (
              <div className="relative rounded-lg overflow-hidden">
                <iframe
                  width="100%"
                  height="240"
                  src={`https://www.youtube.com/embed/${youtubeVideoId}`}
                  title="Recipe Video"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full"
                />
              </div>
            )}
          </div>

          {/* Recipe Info */}
          <div className="space-y-6">
            <div>
              <p className="text-gray-600 text-lg mb-4">{recipe.description}</p>
              
              <div className="flex items-center space-x-6 mb-4">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">Prep: {recipe.prepTime}</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">Cook: {recipe.cookTime}</span>
                </div>
                <div className="flex items-center">
                  <Users className="w-4 h-4 mr-2 text-gray-500" />
                  <span className="text-sm text-gray-600">{recipe.author}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2 mb-4">
                <span className="text-sm text-gray-600">Difficulty:</span>
                <div className="flex space-x-1">
                  {renderStars(recipe.difficulty)}
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                {recipe.tags.map((tag) => (
                  <span 
                    key={tag} 
                    className="text-sm px-3 py-1 bg-green-100 text-green-700 rounded-full"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex space-x-3">
              <Link to={`/edit-recipe/${recipe.id}`} className="flex-1">
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                  <Edit className="w-4 h-4 mr-2" />
                  Edit Recipe
                </Button>
              </Link>
              <Button variant="outline" size="icon">
                <Bookmark className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Heart className="w-4 h-4" />
              </Button>
              <Button variant="outline" size="icon">
                <Share2 className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Ingredients & Instructions */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Ingredients */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Ingredients</h2>
              <div className="space-y-3">
                {recipe.ingredients.map((ingredient, index) => (
                  <div key={index} className="flex justify-between items-center py-2 border-b border-gray-100 last:border-b-0">
                    <span className="text-gray-800">{ingredient.name}</span>
                    <span className="text-gray-600 font-medium">{ingredient.amount}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardContent className="p-6">
              <h2 className="text-2xl font-semibold mb-4">Instructions</h2>
              <div className="space-y-4">
                {recipe.instructions.map((instruction) => (
                  <div key={instruction.step} className="flex space-x-4">
                    <div className="flex-shrink-0 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center text-sm font-semibold">
                      {instruction.step}
                    </div>
                    <div className="flex-1">
                      <p className="text-gray-800 mb-2">{instruction.text}</p>
                      {instruction.image && (
                        <img 
                          src={instruction.image} 
                          alt={`Step ${instruction.step}`}
                          className="w-32 h-24 object-cover rounded-lg"
                        />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetail;
