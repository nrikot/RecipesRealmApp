
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X, Home, PlusCircle, User, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";

const navigationItems = [
  { name: "Home", href: "/", icon: Home },
  { name: "Add Recipe", href: "/add-recipe", icon: PlusCircle },
  { name: "Profile", href: "/profile", icon: User },
];

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex items-center space-x-4">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center space-x-6">
        {navigationItems.map((item) => (
          <Link
            key={item.name}
            to={item.href}
            className="text-gray-700 hover:text-orange-500 font-medium transition-colors"
          >
            {item.name}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet open={isOpen} onOpenChange={setIsOpen}>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px]">
            <div className="flex flex-col space-y-4 mt-8">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    onClick={() => setIsOpen(false)}
                    className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
              <div className="border-t pt-4 space-y-2">
                <Link
                  to="/signin"
                  onClick={() => setIsOpen(false)}
                  className="flex items-center space-x-3 text-lg font-medium text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <LogIn className="h-5 w-5" />
                  <span>Sign In</span>
                </Link>
                <Link to="/signup" onClick={() => setIsOpen(false)}>
                  <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                    Sign Up
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};
