
import { Bell, Search, User } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Navigation } from "@/components/Navigation";

export const Header = () => {
  return (
    <header className="bg-white shadow-sm border-b border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="text-2xl font-bold">
              <span className="text-orange-500">Recipe</span>
              <span className="text-green-500">Realm</span>
            </div>
          </Link>

          {/* Search Bar */}
          <div className="flex-1 max-w-md mx-8">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <Input 
                type="text"
                placeholder="Search recipes, ingredients, or chefs..."
                className="pl-10 pr-4 w-full border-orange-200 focus:border-orange-500 focus:ring-orange-200"
              />
            </div>
          </div>

          {/* Navigation & Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-orange-500">
              <Bell className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon" className="text-gray-600 hover:text-orange-500">
              <User className="w-5 h-5" />
            </Button>
            
            {/* Desktop Auth Buttons */}
            <div className="hidden md:flex items-center space-x-2">
              <Link to="/signin">
                <Button variant="ghost" className="text-gray-600 hover:text-orange-500">
                  Sign In
                </Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-orange-500 hover:bg-orange-600 text-white">
                  Sign Up
                </Button>
              </Link>
            </div>

            <Navigation />
          </div>
        </div>
      </div>
    </header>
  );
};
