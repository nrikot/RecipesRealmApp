
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export const FloatingActionButton = () => {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <Link to="/add-recipe">
        <Button 
          size="lg"
          className="w-14 h-14 rounded-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110"
        >
          <Plus className="w-6 h-6" />
        </Button>
      </Link>
    </div>
  );
};
