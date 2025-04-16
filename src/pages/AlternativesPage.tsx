
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, ArrowRight, Star, ExternalLink } from "lucide-react";

export default function AlternativesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<null | any[]>(null);

  const handleSearch = () => {
    if (!searchQuery) return;
    
    // Simulating search results
    setSearchResults([
      {
        id: 1,
        originalProduct: "Oreo Cookies",
        alternatives: [
          {
            name: "Wholesome Organic Sandwich Cookies",
            image: "https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=200",
            healthScore: 4.2,
            packagingScore: 4.5,
            price: "$4.99",
            benefits: ["Organic ingredients", "Recyclable packaging", "No artificial colors"],
            description: "Made with organic ingredients and packaged in recyclable materials. A healthier alternative with less processed ingredients."
          },
          {
            name: "Simple Mills Chocolate Cookies",
            image: "https://images.unsplash.com/photo-1590080875515-8a3a8dc5735e?auto=format&fit=crop&q=80&w=200",
            healthScore: 4.5,
            packagingScore: 3.8,
            price: "$5.49",
            benefits: ["Gluten-free", "Less sugar", "Minimal processing"],
            description: "Crafted with almond flour and coconut sugar. Better nutritional profile with less environmental impact."
          },
          {
            name: "Back to Nature Chocolate Sandwiches",
            image: "https://images.unsplash.com/photo-1599599810769-bcde5a160d32?auto=format&fit=crop&q=80&w=200",
            healthScore: 3.9,
            packagingScore: 4.2,
            price: "$3.99",
            benefits: ["No high-fructose corn syrup", "Plant-based", "Rainforest Alliance certified cocoa"],
            description: "Non-GMO cookies with more eco-conscious packaging and responsibly sourced ingredients."
          }
        ]
      }
    ]);
  };

  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating - fullStars >= 0.5;
    const stars = [];
    
    for (let i = 1; i <= 5; i++) {
      if (i <= fullStars) {
        stars.push(
          <Star key={i} size={14} className="fill-eco-500 text-eco-500" />
        );
      } else if (i === fullStars + 1 && hasHalfStar) {
        stars.push(
          <Star key={i} size={14} className="fill-eco-500/50 text-eco-500" />
        );
      } else {
        stars.push(
          <Star key={i} size={14} className="text-gray-300" />
        );
      }
    }
    
    return (
      <div className="flex">
        {stars}
        <span className="ml-1 text-xs font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Eco-Packaged Food Suggestions</h1>
      <p className="text-muted-foreground mb-8">
        Discover healthier and more sustainable alternatives to your favorite packaged foods.
      </p>

      {/* Search Section */}
      <div className="glass-card p-6 mb-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-lg font-medium mb-4">Find Eco-Friendly Alternatives</h2>
          <div className="flex gap-3">
            <div className="flex-1">
              <Input
                placeholder="Search for a product (e.g., Oreo Cookies, Lays Chips)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/50"
              />
            </div>
            <Button onClick={handleSearch} className="bg-eco-500 hover:bg-eco-600">
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-2">
            Enter the name of a packaged food product to find healthier and more sustainable alternatives.
          </p>
        </div>
      </div>

      {/* Results Section */}
      {searchResults && searchResults.length > 0 && (
        <div className="animate-fade-in">
          <h2 className="text-xl font-semibold mb-6 flex items-center gap-2">
            <span>Suggested alternatives for</span>
            <span className="text-eco-600">{searchResults[0].originalProduct}</span>
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {searchResults[0].alternatives.map((alternative: any) => (
              <div key={alternative.name} className="glass-card hover-scale overflow-hidden">
                <div className="aspect-[3/2] overflow-hidden">
                  <img src={alternative.image} alt={alternative.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6">
                  <h3 className="font-semibold text-lg mb-1">{alternative.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{alternative.description}</p>
                  
                  <div className="flex justify-between mb-4">
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Health Score</div>
                      {renderStars(alternative.healthScore)}
                    </div>
                    <div>
                      <div className="text-xs text-muted-foreground mb-1">Packaging Score</div>
                      {renderStars(alternative.packagingScore)}
                    </div>
                  </div>
                  
                  <div className="mb-4">
                    <div className="text-xs font-medium mb-2">Key Benefits:</div>
                    <div className="flex flex-wrap gap-2">
                      {alternative.benefits.map((benefit: string) => (
                        <div key={benefit} className="text-xs px-2 py-1 bg-eco-50 text-eco-700 rounded-full">
                          {benefit}
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <div className="text-lg font-semibold">{alternative.price}</div>
                    <Button variant="outline" size="sm" className="border-eco-300 hover:bg-eco-100">
                      <span>View Details</span>
                      <ExternalLink className="ml-2 h-3.5 w-3.5" />
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="glass-card p-6">
            <h3 className="font-semibold text-lg mb-4">Comparison Table</h3>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-3 px-4">Product</th>
                    <th className="text-left py-3 px-4">Health Score</th>
                    <th className="text-left py-3 px-4">Packaging</th>
                    <th className="text-left py-3 px-4">Price</th>
                    <th className="text-left py-3 px-4">Overall</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b bg-muted/30">
                    <td className="py-3 px-4 font-medium">{searchResults[0].originalProduct}</td>
                    <td className="py-3 px-4">{renderStars(2.8)}</td>
                    <td className="py-3 px-4">{renderStars(1.5)}</td>
                    <td className="py-3 px-4">$3.49</td>
                    <td className="py-3 px-4">{renderStars(2.2)}</td>
                  </tr>
                  {searchResults[0].alternatives.map((alternative: any) => (
                    <tr key={alternative.name} className="border-b">
                      <td className="py-3 px-4 font-medium">{alternative.name}</td>
                      <td className="py-3 px-4">{renderStars(alternative.healthScore)}</td>
                      <td className="py-3 px-4">{renderStars(alternative.packagingScore)}</td>
                      <td className="py-3 px-4">{alternative.price}</td>
                      <td className="py-3 px-4">{renderStars((alternative.healthScore + alternative.packagingScore) / 2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      )}
      
      {/* Empty State */}
      {!searchResults && (
        <div className="text-center py-16 bg-white/50 rounded-lg border border-border">
          <Search size={48} className="mx-auto text-muted-foreground opacity-40" />
          <h3 className="mt-4 text-lg font-medium">Search for Alternatives</h3>
          <p className="text-muted-foreground max-w-md mx-auto">
            Enter the name of a packaged food product to discover healthier and more eco-friendly alternatives
          </p>
        </div>
      )}

      {/* Suggestions Section */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-6">Popular Categories</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {["Cookies & Snacks", "Beverages", "Frozen Foods", "Breakfast Cereals"].map((category) => (
            <Button
              key={category}
              variant="outline"
              className="h-auto py-6 border-eco-100 hover:bg-eco-50 hover:border-eco-300"
            >
              {category}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
