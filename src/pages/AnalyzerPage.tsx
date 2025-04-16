
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Upload, Search } from "lucide-react";

export default function AnalyzerPage() {
  const [productQuery, setProductQuery] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [analysisResult, setAnalysisResult] = useState<any | null>(null);

  const handleSearch = () => {
    if (!productQuery) return;
    
    setIsAnalyzing(true);
    
    // Simulating API call with setTimeout
    setTimeout(() => {
      setAnalysisResult({
        name: productQuery,
        image: "https://images.unsplash.com/photo-1600456899121-68eda5705257?auto=format&fit=crop&q=80&w=200",
        ingredients: [
          { name: "Sugar", harmful: true, notes: "High in processed sugar" },
          { name: "Palm Oil", harmful: true, notes: "Environmental concerns" },
          { name: "Wheat Flour", harmful: false, notes: "Common allergen" },
          { name: "Natural Flavors", harmful: false, notes: "Generally safe" },
          { name: "Preservatives", harmful: true, notes: "Artificial preservatives" }
        ],
        nutritionFacts: {
          calories: 240,
          fat: 12,
          carbs: 30,
          sugar: 18,
          protein: 2
        },
        healthScore: 3.5,
        environmentalScore: 2.8,
        warnings: ["High in sugar", "Contains allergens", "Palm oil is environmentally concerning"],
        packaging: {
          material: "Mixed plastics",
          recyclable: "Partially",
          disposal: "Check local recycling guidelines"
        }
      });
      
      setIsAnalyzing(false);
    }, 2000);
  };

  const handleUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      setUploadedImage(reader.result as string);
      setIsAnalyzing(true);
      
      // Simulating API call with setTimeout
      setTimeout(() => {
        setAnalysisResult({
          name: "Detected Product",
          image: reader.result as string,
          ingredients: [
            { name: "Sugar", harmful: true, notes: "High in processed sugar" },
            { name: "Palm Oil", harmful: true, notes: "Environmental concerns" },
            { name: "Wheat Flour", harmful: false, notes: "Common allergen" },
            { name: "Natural Flavors", harmful: false, notes: "Generally safe" },
            { name: "Preservatives", harmful: true, notes: "Artificial preservatives" }
          ],
          nutritionFacts: {
            calories: 240,
            fat: 12,
            carbs: 30,
            sugar: 18,
            protein: 2
          },
          healthScore: 3.5,
          environmentalScore: 2.8,
          warnings: ["High in sugar", "Contains allergens", "Palm oil is environmentally concerning"],
          packaging: {
            material: "Mixed plastics",
            recyclable: "Partially",
            disposal: "Check local recycling guidelines"
          }
        });
        
        setIsAnalyzing(false);
      }, 2000);
    };
    
    reader.readAsDataURL(file);
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Product Analyzer</h1>
        <p className="text-muted-foreground mb-8">
          Search for a product by name or upload an image of the packaging to analyze its ingredients, nutritional value, and packaging.
        </p>

        {/* Search/Upload Section */}
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter product name (e.g., Oreo Cookies)"
                value={productQuery}
                onChange={(e) => setProductQuery(e.target.value)}
                className="bg-white/50"
              />
            </div>
            <Button
              onClick={handleSearch}
              className="bg-eco-500 hover:bg-eco-600"
              disabled={isAnalyzing || !productQuery}
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <div className="relative">
              <input
                type="file"
                id="file-upload"
                className="hidden"
                accept="image/*"
                onChange={handleUpload}
                disabled={isAnalyzing}
              />
              <Button
                variant="outline"
                className="border-eco-300 hover:bg-eco-100"
                asChild
              >
                <label htmlFor="file-upload" className="cursor-pointer flex items-center">
                  <Upload className="mr-2 h-4 w-4" />
                  Upload Image
                </label>
              </Button>
            </div>
          </div>
        </div>

        {/* Loading State */}
        {isAnalyzing && (
          <div className="text-center py-16 animate-pulse">
            <div className="inline-block p-6 rounded-full bg-eco-100">
              <div className="w-12 h-12 border-4 border-eco-500 border-t-transparent rounded-full animate-spin"></div>
            </div>
            <p className="mt-4 text-lg font-medium">Analyzing product...</p>
            <p className="text-muted-foreground">This may take a moment</p>
          </div>
        )}

        {/* Analysis Result */}
        {!isAnalyzing && analysisResult && (
          <div className="glass-card p-6 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product Info */}
              <div className="md:col-span-1">
                <div className="aspect-square bg-white rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="Product" className="w-full h-full object-cover" />
                  ) : (
                    <img src={analysisResult.image} alt={analysisResult.name} className="w-full h-full object-cover" />
                  )}
                </div>
                <h2 className="text-xl font-semibold mb-2">{analysisResult.name}</h2>
                
                <div className="flex items-center gap-2 mb-4">
                  <div className="text-sm font-medium">Health Score:</div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-red-400 to-green-400"
                      style={{ width: `${analysisResult.healthScore * 20}%` }}
                    />
                  </div>
                  <div className="font-semibold">{analysisResult.healthScore}/5</div>
                </div>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="text-sm font-medium">Environmental:</div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-red-400 to-green-400"
                      style={{ width: `${analysisResult.environmentalScore * 20}%` }}
                    />
                  </div>
                  <div className="font-semibold">{analysisResult.environmentalScore}/5</div>
                </div>
                
                <div className="bg-secondary/70 p-4 rounded-lg">
                  <h3 className="font-medium mb-2">Packaging Details</h3>
                  <div className="space-y-1 text-sm">
                    <p><span className="font-medium">Material:</span> {analysisResult.packaging.material}</p>
                    <p><span className="font-medium">Recyclable:</span> {analysisResult.packaging.recyclable}</p>
                    <p><span className="font-medium">Disposal:</span> {analysisResult.packaging.disposal}</p>
                  </div>
                </div>
              </div>

              {/* Analysis Results */}
              <div className="md:col-span-2">
                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Key Ingredients</h3>
                  <div className="space-y-2">
                    {analysisResult.ingredients.map((ingredient: any, index: number) => (
                      <div 
                        key={index}
                        className={`p-3 rounded-lg flex items-start gap-3 ${
                          ingredient.harmful 
                            ? 'bg-red-50 border border-red-100' 
                            : 'bg-green-50 border border-green-100'
                        }`}
                      >
                        <div 
                          className={`w-3 h-3 rounded-full mt-1 ${
                            ingredient.harmful ? 'bg-red-400' : 'bg-green-400'
                          }`}
                        />
                        <div>
                          <div className="font-medium">{ingredient.name}</div>
                          <div className="text-sm text-muted-foreground">{ingredient.notes}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mb-6">
                  <h3 className="text-lg font-semibold mb-3">Nutrition Facts</h3>
                  <div className="grid grid-cols-2 md:grid-cols-5 gap-3">
                    <NutritionCard 
                      label="Calories" 
                      value={analysisResult.nutritionFacts.calories} 
                      unit="kcal" 
                    />
                    <NutritionCard 
                      label="Fat" 
                      value={analysisResult.nutritionFacts.fat} 
                      unit="g" 
                    />
                    <NutritionCard 
                      label="Carbs" 
                      value={analysisResult.nutritionFacts.carbs} 
                      unit="g" 
                    />
                    <NutritionCard 
                      label="Sugar" 
                      value={analysisResult.nutritionFacts.sugar} 
                      unit="g" 
                      highlight={analysisResult.nutritionFacts.sugar > 15}
                    />
                    <NutritionCard 
                      label="Protein" 
                      value={analysisResult.nutritionFacts.protein} 
                      unit="g" 
                    />
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-semibold mb-3">Health Warnings</h3>
                  <div className="bg-amber-50 border border-amber-100 rounded-lg p-4">
                    <ul className="space-y-1 list-disc list-inside text-amber-700">
                      {analysisResult.warnings.map((warning: string, index: number) => (
                        <li key={index}>{warning}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isAnalyzing && !analysisResult && (
          <div className="text-center py-16 bg-white/50 rounded-lg border border-border">
            <Search size={48} className="mx-auto text-muted-foreground opacity-40" />
            <h3 className="mt-4 text-lg font-medium">No Product Selected</h3>
            <p className="text-muted-foreground">
              Search by name or upload an image to analyze a product
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

function NutritionCard({ 
  label, 
  value, 
  unit, 
  highlight = false 
}: { 
  label: string; 
  value: number; 
  unit: string; 
  highlight?: boolean;
}) {
  return (
    <div 
      className={`p-3 rounded-lg text-center ${
        highlight ? 'bg-red-50 border border-red-100' : 'bg-white border'
      }`}
    >
      <div className="text-xl font-semibold">{value}{unit}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
