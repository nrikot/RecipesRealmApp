
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Plus, X, Upload, Clock, ChefHat } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const AddRecipe = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    prepTime: "",
    cookTime: "",
    difficulty: "",
    youtubeUrl: "",
    tags: [] as string[],
  });

  const [ingredients, setIngredients] = useState([{ name: "", amount: "" }]);
  const [instructions, setInstructions] = useState([{ text: "", image: null as File | null }]);
  const [images, setImages] = useState<File[]>([]);
  const [newTag, setNewTag] = useState("");

  const addIngredient = () => {
    setIngredients([...ingredients, { name: "", amount: "" }]);
  };

  const removeIngredient = (index: number) => {
    setIngredients(ingredients.filter((_, i) => i !== index));
  };

  const addInstruction = () => {
    setInstructions([...instructions, { text: "", image: null }]);
  };

  const removeInstruction = (index: number) => {
    setInstructions(instructions.filter((_, i) => i !== index));
  };

  const addTag = () => {
    if (newTag.trim() && !formData.tags.includes(newTag.trim())) {
      setFormData({
        ...formData,
        tags: [...formData.tags, newTag.trim()]
      });
      setNewTag("");
    }
  };

  const removeTag = (tagToRemove: string) => {
    setFormData({
      ...formData,
      tags: formData.tags.filter(tag => tag !== tagToRemove)
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Recipe data:", { formData, ingredients, instructions, images });
    // TODO: Implement recipe saving
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-green-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="flex items-center mb-6">
          <Link to="/" className="mr-4">
            <Button variant="ghost" size="icon">
              <ArrowLeft className="h-5 w-5" />
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-gray-900">Add New Recipe</h1>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Basic Information */}
          <Card>
            <CardHeader>
              <CardTitle>Basic Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <Label htmlFor="title">Recipe Title</Label>
                <Input
                  id="title"
                  placeholder="Enter recipe title"
                  value={formData.title}
                  onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="description">Description</Label>
                <Textarea
                  id="description"
                  placeholder="Describe your recipe"
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                  rows={3}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="prepTime">Prep Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="prepTime"
                      placeholder="15 min"
                      className="pl-10"
                      value={formData.prepTime}
                      onChange={(e) => setFormData({ ...formData, prepTime: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="cookTime">Cook Time</Label>
                  <div className="relative">
                    <Clock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <Input
                      id="cookTime"
                      placeholder="30 min"
                      className="pl-10"
                      value={formData.cookTime}
                      onChange={(e) => setFormData({ ...formData, cookTime: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <Select value={formData.difficulty} onValueChange={(value) => setFormData({ ...formData, difficulty: value })}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select difficulty" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="1">⭐ Easy</SelectItem>
                      <SelectItem value="2">⭐⭐ Medium</SelectItem>
                      <SelectItem value="3">⭐⭐⭐ Hard</SelectItem>
                      <SelectItem value="4">⭐⭐⭐⭐ Expert</SelectItem>
                      <SelectItem value="5">⭐⭐⭐⭐⭐ Master</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <Label htmlFor="youtubeUrl">YouTube URL (Optional)</Label>
                <Input
                  id="youtubeUrl"
                  placeholder="https://youtube.com/watch?v=..."
                  value={formData.youtubeUrl}
                  onChange={(e) => setFormData({ ...formData, youtubeUrl: e.target.value })}
                />
              </div>
            </CardContent>
          </Card>

          {/* Ingredients */}
          <Card>
            <CardHeader>
              <CardTitle>Ingredients</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {ingredients.map((ingredient, index) => (
                <div key={index} className="flex gap-2">
                  <Input
                    placeholder="Ingredient name"
                    value={ingredient.name}
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index].name = e.target.value;
                      setIngredients(newIngredients);
                    }}
                    className="flex-1"
                  />
                  <Input
                    placeholder="Amount"
                    value={ingredient.amount}
                    onChange={(e) => {
                      const newIngredients = [...ingredients];
                      newIngredients[index].amount = e.target.value;
                      setIngredients(newIngredients);
                    }}
                    className="w-32"
                  />
                  {ingredients.length > 1 && (
                    <Button
                      type="button"
                      variant="ghost"
                      size="icon"
                      onClick={() => removeIngredient(index)}
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addIngredient}>
                <Plus className="h-4 w-4 mr-2" />
                Add Ingredient
              </Button>
            </CardContent>
          </Card>

          {/* Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Instructions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              {instructions.map((instruction, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="font-medium text-sm">Step {index + 1}</span>
                    {instructions.length > 1 && (
                      <Button
                        type="button"
                        variant="ghost"
                        size="icon"
                        onClick={() => removeInstruction(index)}
                      >
                        <X className="h-4 w-4" />
                      </Button>
                    )}
                  </div>
                  <Textarea
                    placeholder="Describe this step"
                    value={instruction.text}
                    onChange={(e) => {
                      const newInstructions = [...instructions];
                      newInstructions[index].text = e.target.value;
                      setInstructions(newInstructions);
                    }}
                    rows={2}
                  />
                </div>
              ))}
              <Button type="button" variant="outline" onClick={addInstruction}>
                <Plus className="h-4 w-4 mr-2" />
                Add Step
              </Button>
            </CardContent>
          </Card>

          {/* Tags */}
          <Card>
            <CardHeader>
              <CardTitle>Tags</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex gap-2">
                <Input
                  placeholder="Add a tag"
                  value={newTag}
                  onChange={(e) => setNewTag(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), addTag())}
                />
                <Button type="button" onClick={addTag}>
                  Add
                </Button>
              </div>
              <div className="flex flex-wrap gap-2">
                {formData.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm flex items-center gap-1"
                  >
                    {tag}
                    <button
                      type="button"
                      onClick={() => removeTag(tag)}
                      className="hover:text-orange-600"
                    >
                      <X className="h-3 w-3" />
                    </button>
                  </span>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Submit Button */}
          <div className="flex justify-end gap-4">
            <Link to="/">
              <Button variant="outline">Cancel</Button>
            </Link>
            <Button type="submit" className="bg-orange-500 hover:bg-orange-600 text-white">
              <ChefHat className="h-4 w-4 mr-2" />
              Save Recipe
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddRecipe;
