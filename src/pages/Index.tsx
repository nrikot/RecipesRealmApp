
import { Header } from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { FloatingActionButton } from "@/components/FloatingActionButton";
import { FilterTabs } from "@/components/FilterTabs";

const featuredRecipes = [
  {
    id: "1",
    title: "Spicy Mapo Tofu",
    description: "Authentic Sichuan comfort food with silky tofu and bold flavors",
    prepTime: "15 min",
    cookTime: "20 min",
    difficulty: 4,
    image: "https://images.unsplash.com/photo-1563379091919-8be7d5c36f61?w=400&h=300&fit=crop",
    author: "Chef Maria",
    tags: ["Spicy", "Vegetarian", "Asian"]
  },
  {
    id: "2",
    title: "Mediterranean Quinoa Bowl",
    description: "Fresh and healthy bowl packed with nutrients and flavor",
    prepTime: "10 min",
    cookTime: "15 min",
    difficulty: 2,
    image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=400&h=300&fit=crop",
    author: "Alex Green",
    tags: ["Healthy", "Vegan", "Mediterranean"]
  },
  {
    id: "3",
    title: "Classic Beef Bourguignon",
    description: "French countryside recipe with tender beef and rich wine sauce",
    prepTime: "30 min",
    cookTime: "2 hours",
    difficulty: 5,
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?w=400&h=300&fit=crop",
    author: "Pierre Dubois",
    tags: ["French", "Comfort Food", "Advanced"]
  },
  {
    id: "4",
    title: "Avocado Toast Supreme",
    description: "Elevated breakfast with perfectly seasoned avocado and toppings",
    prepTime: "5 min",
    cookTime: "5 min",
    difficulty: 1,
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=400&h=300&fit=crop",
    author: "Sarah Kim",
    tags: ["Breakfast", "Quick", "Healthy"]
  }
];

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Header />
      
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <section className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Welcome to <span className="text-orange-500">Recipe</span><span className="text-green-500">Realm</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Discover, create, and share culinary masterpieces with our collaborative recipe platform
          </p>
        </section>

        {/* Filter Tabs */}
        <FilterTabs />

        {/* Try Today Section */}
        <section className="mb-12">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold text-gray-900">Try Today</h2>
            <span className="text-sm text-gray-500 bg-white px-3 py-1 rounded-full">
              Personalized for you
            </span>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>

        {/* Trending Section */}
        <section>
          <h2 className="text-3xl font-semibold text-gray-900 mb-6">Trending Now</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {featuredRecipes.slice().reverse().map((recipe) => (
              <RecipeCard key={`trending-${recipe.id}`} recipe={recipe} />
            ))}
          </div>
        </section>
      </main>

      <FloatingActionButton />
    </div>
  );
};

export default Index;
