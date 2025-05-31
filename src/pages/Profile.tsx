
import { Header } from "@/components/Header";
import { RecipeCard } from "@/components/RecipeCard";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User, MapPin, Calendar, Award } from "lucide-react";

const Profile = () => {
  const userRecipes = [
    {
      id: "1",
      title: "My Famous Pasta",
      description: "A family recipe passed down through generations",
      prepTime: "15 min",
      cookTime: "20 min",
      difficulty: 3,
      image: "https://images.unsplash.com/photo-1551892374-ecf8754cf8b0?w=400&h=300&fit=crop",
      author: "You",
      tags: ["Italian", "Comfort Food"]
    },
    {
      id: "2",
      title: "Healthy Smoothie Bowl",
      description: "Perfect breakfast to start your day right",
      prepTime: "5 min",
      cookTime: "0 min",
      difficulty: 1,
      image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=400&h=300&fit=crop",
      author: "You",
      tags: ["Healthy", "Breakfast", "Vegan"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Profile Header */}
        <Card className="mb-8">
          <CardHeader>
            <div className="flex items-start gap-6">
              <div className="w-24 h-24 bg-orange-500 rounded-full flex items-center justify-center text-white text-3xl font-bold">
                <User className="w-12 h-12" />
              </div>
              <div className="flex-1">
                <CardTitle className="text-3xl mb-2">John Doe</CardTitle>
                <div className="flex items-center gap-4 text-gray-600 mb-4">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>San Francisco, CA</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Calendar className="w-4 h-4" />
                    <span>Joined March 2024</span>
                  </div>
                </div>
                <p className="text-gray-700 mb-4">
                  Passionate home cook who loves experimenting with flavors from around the world. 
                  Always looking for new ingredients and techniques to share with the community!
                </p>
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Edit Profile
                </Button>
              </div>
            </div>
          </CardHeader>
        </Card>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-orange-500 mb-2">12</div>
              <div className="text-gray-600">Recipes Shared</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-green-500 mb-2">45</div>
              <div className="text-gray-600">Recipes Forked</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-blue-500 mb-2">128</div>
              <div className="text-gray-600">Followers</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-6 text-center">
              <div className="text-3xl font-bold text-purple-500 mb-2">89</div>
              <div className="text-gray-600">Following</div>
            </CardContent>
          </Card>
        </div>

        {/* My Recipes */}
        <section>
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-3xl font-semibold text-gray-900">My Recipes</h2>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Add New Recipe
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {userRecipes.map((recipe) => (
              <RecipeCard key={recipe.id} recipe={recipe} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Profile;
