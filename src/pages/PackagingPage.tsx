
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Upload, Trash, Recycle, Leaf, Info } from "lucide-react";

export default function PackagingPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [packagingResult, setPackagingResult] = useState<any | null>(null);

  const handleSearch = () => {
    if (!searchQuery) return;
    
    setIsAnalyzing(true);
    
    // Simulating API call with setTimeout
    setTimeout(() => {
      setPackagingResult(getMockPackagingData(searchQuery));
      setIsAnalyzing(false);
    }, 1500);
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
        setPackagingResult(getMockPackagingData("Detected Product"));
        setIsAnalyzing(false);
      }, 2000);
    };
    
    reader.readAsDataURL(file);
  };

  // Mock data generator function
  const getMockPackagingData = (productName: string) => {
    // This would normally come from an API based on image recognition
    const mockData = {
      productName,
      image: uploadedImage || "https://images.unsplash.com/photo-1553531384-397c80973a0b?auto=format&fit=crop&q=80&w=200",
      packagingType: "Mixed Materials",
      components: [
        {
          name: "Outer Box",
          material: "Cardboard",
          recyclable: true,
          biodegradable: true,
          disposalMethod: "Recycle",
          icon: "recycle",
          notes: "Remove any plastic windows before recycling"
        },
        {
          name: "Inner Tray",
          material: "PET Plastic",
          recyclable: true,
          biodegradable: false,
          disposalMethod: "Recycle",
          icon: "recycle",
          notes: "Check local recycling guidelines for this type of plastic"
        },
        {
          name: "Film Wrapper",
          material: "Flexible Plastic",
          recyclable: false,
          biodegradable: false,
          disposalMethod: "Trash",
          icon: "trash",
          notes: "Not commonly recyclable in curbside programs"
        }
      ],
      environmentalImpact: 3.2, // Scale 1-5
      suggestedAlternatives: [
        {
          name: "EcoPack",
          material: "100% Recycled Cardboard",
          benefit: "Fully recyclable and made from post-consumer waste",
          image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&q=80&w=100"
        },
        {
          name: "GreenWrap",
          material: "Compostable Plant-based Film",
          benefit: "Biodegrades in 180 days in commercial facilities",
          image: "https://images.unsplash.com/photo-1604187351574-c75ca79f5807?auto=format&fit=crop&q=80&w=100"
        }
      ]
    };
    
    return mockData;
  };

  const getDisposalIcon = (method: string) => {
    switch (method.toLowerCase()) {
      case 'recycle':
        return <Recycle size={24} className="text-green-500" />;
      case 'compost':
        return <Leaf size={24} className="text-eco-600" />;
      case 'trash':
      default:
        return <Trash size={24} className="text-red-500" />;
    }
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Smart Packaging Disposal Guide</h1>
        <p className="text-muted-foreground mb-8">
          Learn the proper way to dispose of packaging materials to minimize environmental impact.
          Upload a photo of your product packaging or search by name.
        </p>

        {/* Search/Upload Section */}
        <div className="glass-card p-6 mb-8">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <Input
                placeholder="Enter product name (e.g., Oreo Cookies)"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-white/50"
              />
            </div>
            <Button
              onClick={handleSearch}
              className="bg-eco-500 hover:bg-eco-600"
              disabled={isAnalyzing || !searchQuery}
            >
              <Search className="mr-2 h-4 w-4" />
              Search
            </Button>
            <div className="relative">
              <input
                type="file"
                id="packaging-upload"
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
                <label htmlFor="packaging-upload" className="cursor-pointer flex items-center">
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
            <p className="mt-4 text-lg font-medium">Analyzing packaging materials...</p>
            <p className="text-muted-foreground">This may take a moment</p>
          </div>
        )}

        {/* Analysis Result */}
        {!isAnalyzing && packagingResult && (
          <div className="glass-card p-6 animate-scale-in">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Product Info */}
              <div className="md:col-span-1">
                <div className="aspect-square bg-white rounded-lg flex items-center justify-center mb-4 overflow-hidden">
                  {uploadedImage ? (
                    <img src={uploadedImage} alt="Product" className="w-full h-full object-cover" />
                  ) : (
                    <img src={packagingResult.image} alt={packagingResult.productName} className="w-full h-full object-cover" />
                  )}
                </div>
                <h2 className="text-xl font-semibold mb-2">{packagingResult.productName}</h2>
                <p className="text-muted-foreground mb-4">
                  Packaging Type: <span className="font-medium text-foreground">{packagingResult.packagingType}</span>
                </p>
                
                <div className="flex items-center gap-2 mb-6">
                  <div className="text-sm font-medium">Environmental Impact:</div>
                  <div className="flex-1 h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full rounded-full bg-gradient-to-r from-green-400 to-red-400"
                      style={{ width: `${packagingResult.environmentalImpact * 20}%` }}
                    />
                  </div>
                  <div className="font-semibold">{packagingResult.environmentalImpact}/5</div>
                </div>

                <div className="bg-secondary/70 p-4 rounded-lg mb-6">
                  <h3 className="font-medium mb-4">Eco-Friendly Alternatives</h3>
                  <div className="space-y-4">
                    {packagingResult.suggestedAlternatives.map((alt: any, index: number) => (
                      <div key={index} className="flex gap-3">
                        <img 
                          src={alt.image} 
                          alt={alt.name} 
                          className="w-12 h-12 object-cover rounded-md"
                        />
                        <div>
                          <div className="font-medium">{alt.name}</div>
                          <div className="text-xs">{alt.material}</div>
                          <div className="text-xs text-muted-foreground">{alt.benefit}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="p-3 border border-amber-200 bg-amber-50 rounded-lg">
                  <div className="flex items-center gap-2 text-amber-800 mb-2">
                    <Info size={16} />
                    <span className="font-medium text-sm">Did you know?</span>
                  </div>
                  <p className="text-xs text-amber-700">
                    Packaging accounts for about 30% of all household waste. 
                    Proper disposal can significantly reduce landfill waste and pollution.
                  </p>
                </div>
              </div>

              {/* Disposal Guidelines */}
              <div className="md:col-span-2">
                <h3 className="text-lg font-semibold mb-3">Disposal Guidelines</h3>
                
                <div className="space-y-4">
                  {packagingResult.components.map((component: any, index: number) => (
                    <div 
                      key={index} 
                      className={`p-4 rounded-lg border ${
                        component.recyclable 
                          ? 'border-green-100 bg-green-50' 
                          : 'border-red-100 bg-red-50'
                      }`}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div>
                          <h4 className="font-medium">{component.name}</h4>
                          <p className="text-sm text-muted-foreground">Material: {component.material}</p>
                        </div>
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white shadow-sm">
                          {getDisposalIcon(component.disposalMethod)}
                        </div>
                      </div>

                      <div className="grid grid-cols-3 gap-2 mb-3">
                        <div className="text-center p-2 bg-white rounded border">
                          <div className="text-xs font-medium mb-1">Recyclable</div>
                          <div className={component.recyclable ? 'text-green-500' : 'text-red-500'}>
                            {component.recyclable ? 'Yes' : 'No'}
                          </div>
                        </div>
                        <div className="text-center p-2 bg-white rounded border">
                          <div className="text-xs font-medium mb-1">Biodegradable</div>
                          <div className={component.biodegradable ? 'text-green-500' : 'text-red-500'}>
                            {component.biodegradable ? 'Yes' : 'No'}
                          </div>
                        </div>
                        <div className="text-center p-2 bg-white rounded border">
                          <div className="text-xs font-medium mb-1">Disposal</div>
                          <div className="font-medium">{component.disposalMethod}</div>
                        </div>
                      </div>

                      <div className="text-sm">
                        <span className="font-medium">Note:</span> {component.notes}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6 p-4 rounded-lg bg-eco-50 border border-eco-100">
                  <h3 className="font-medium mb-2">General Tips</h3>
                  <ul className="list-disc list-inside space-y-1 text-sm">
                    <li>Rinse containers before recycling to remove food residue</li>
                    <li>Remove labels when possible for better recycling efficiency</li>
                    <li>Check local recycling guidelines as they vary by location</li>
                    <li>Consider reusing packaging when possible before recycling</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Empty State */}
        {!isAnalyzing && !packagingResult && (
          <div className="text-center py-16 bg-white/50 rounded-lg border border-border">
            <Recycle size={48} className="mx-auto text-muted-foreground opacity-40" />
            <h3 className="mt-4 text-lg font-medium">No Packaging Analyzed</h3>
            <p className="text-muted-foreground">
              Search by product name or upload an image to get disposal guidance
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
