
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  Upload, Gift, Award, TrendingUp, ArrowRight, ShoppingBag, Camera, Medal, Trophy
} from "lucide-react";

export default function RewardsPage() {
  const [isUploading, setIsUploading] = useState(false);
  const [receipt, setReceipt] = useState<string | null>(null);
  const [validationResult, setValidationResult] = useState<any | null>(null);
  
  const userCoins = 450;
  const userLevel = "Silver";
  
  const handleReceiptUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files || e.target.files.length === 0) return;
    
    const file = e.target.files[0];
    const reader = new FileReader();
    
    setIsUploading(true);
    
    reader.onload = () => {
      setReceipt(reader.result as string);
      
      // Simulate validation process
      setTimeout(() => {
        setValidationResult({
          isValid: true,
          matchedProducts: [
            {
              name: "Oreo Cookies",
              brand: "Nabisco",
              price: "$3.99",
              coinsEarned: 40
            }
          ],
          totalCoins: 40,
          message: "Receipt validated successfully!"
        });
        setIsUploading(false);
      }, 2000);
    };
    
    reader.readAsDataURL(file);
  };

  // Mock data for rewards
  const rewardItems = [
    {
      id: 1,
      name: "Reusable Bamboo Utensil Set",
      image: "https://images.unsplash.com/photo-1584346133934-2a9290d9a8d9?auto=format&fit=crop&q=80&w=200",
      coinCost: 250,
      category: "Eco Products",
      description: "Portable and sustainable utensil set made from bamboo. Includes fork, knife, spoon, and chopsticks."
    },
    {
      id: 2,
      name: "Organic Cotton Produce Bags (Set of 5)",
      image: "https://images.unsplash.com/photo-1617107376560-c04c07617f43?auto=format&fit=crop&q=80&w=200",
      coinCost: 300,
      category: "Eco Products",
      description: "Washable and reusable produce bags made from 100% organic cotton. Perfect for shopping plastic-free."
    },
    {
      id: 3,
      name: "Stainless Steel Water Bottle",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?auto=format&fit=crop&q=80&w=200",
      coinCost: 400,
      category: "Eco Products",
      description: "Double-walled, vacuum insulated water bottle made from stainless steel. Keeps drinks cold for 24 hours."
    },
    {
      id: 4,
      name: "$10 Whole Foods Gift Card",
      image: "https://images.unsplash.com/photo-1579113800032-c38bd7635818?auto=format&fit=crop&q=80&w=200",
      coinCost: 500,
      category: "Gift Cards",
      description: "Use this gift card at any Whole Foods location to purchase eco-friendly and organic products."
    }
  ];
  
  // Mock data for leaderboard
  const leaderboardGroups = [
    {
      name: "EcoWarriors",
      members: 28,
      totalCoins: 12450,
      rank: 1
    },
    {
      name: "Green Guardians",
      members: 24,
      totalCoins: 10820,
      rank: 2
    },
    {
      name: "Sustainable Squad",
      members: 32,
      totalCoins: 9750,
      rank: 3
    },
    {
      name: "Planet Protectors",
      members: 18,
      totalCoins: 8650,
      rank: 4
    },
    {
      name: "Earth Advocates",
      members: 22,
      totalCoins: 7830,
      rank: 5
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Rewards & Receipt Validation</h1>
      <p className="text-muted-foreground mb-8">
        Earn coins by validating your purchases and spend them on eco-friendly products.
      </p>

      {/* User Stats */}
      <div className="glass-card p-6 mb-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center gap-4 mb-6 md:mb-0">
            <div className="p-3 rounded-full bg-eco-100">
              <Gift size={24} className="text-eco-700" />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Your Rewards Account</h2>
              <p className="text-muted-foreground">Validate receipts to earn more coins</p>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold">{userCoins}</div>
              <div className="text-xs text-muted-foreground">Available Coins</div>
            </div>
            <div className="text-center">
              <div className="flex items-center text-2xl font-bold">
                <Medal size={20} className="mr-2 text-amber-500" />
                {userLevel}
              </div>
              <div className="text-xs text-muted-foreground">Current Level</div>
            </div>
          </div>
        </div>
      </div>

      {/* Receipt Upload Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Upload Area */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 h-full">
            <h2 className="text-lg font-semibold mb-4">Upload Receipt</h2>
            <p className="text-sm text-muted-foreground mb-6">
              Upload a photo of your receipt to verify your purchase and earn coins.
            </p>

            <div className="mb-6">
              <div className="relative">
                <input
                  type="file"
                  id="receipt-upload"
                  className="hidden"
                  accept="image/*"
                  onChange={handleReceiptUpload}
                  disabled={isUploading}
                />
                {!receipt ? (
                  <label
                    htmlFor="receipt-upload"
                    className="flex flex-col items-center justify-center border-2 border-dashed border-border rounded-lg p-12 cursor-pointer hover:bg-muted/20 transition-colors"
                  >
                    <Camera size={40} className="text-muted-foreground mb-4" />
                    <p className="font-medium">Click to upload</p>
                    <p className="text-sm text-muted-foreground">PNG, JPG up to 10MB</p>
                  </label>
                ) : (
                  <div className="relative">
                    <img
                      src={receipt}
                      alt="Receipt"
                      className="w-full h-auto rounded-lg"
                    />
                    <Button
                      variant="outline"
                      size="sm"
                      className="absolute top-2 right-2 bg-white"
                      onClick={() => {
                        setReceipt(null);
                        setValidationResult(null);
                      }}
                    >
                      Replace
                    </Button>
                  </div>
                )}
              </div>
            </div>

            {receipt && !validationResult && (
              <div className="text-center animate-pulse">
                <div className="inline-block p-3 rounded-full bg-secondary">
                  <div className="w-6 h-6 border-2 border-eco-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
                <p className="mt-2 text-sm font-medium">Validating receipt...</p>
              </div>
            )}

            {validationResult && (
              <div className="bg-green-50 border border-green-100 rounded-lg p-4 animate-scale-in">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-1 rounded-full bg-green-100">
                    <Award size={16} className="text-green-600" />
                  </div>
                  <div className="font-medium text-green-700">{validationResult.message}</div>
                </div>
                <div className="space-y-2">
                  {validationResult.matchedProducts.map((product: any, index: number) => (
                    <div key={index} className="flex justify-between items-center bg-white rounded p-2 text-sm">
                      <div>
                        <div className="font-medium">{product.name}</div>
                        <div className="text-xs text-muted-foreground">{product.brand} • {product.price}</div>
                      </div>
                      <div className="font-semibold text-eco-600">+{product.coinsEarned} coins</div>
                    </div>
                  ))}
                </div>
                <div className="mt-4 pt-3 border-t border-green-100 flex justify-between items-center">
                  <div className="text-sm">Total coins earned:</div>
                  <div className="font-bold text-lg text-eco-600">+{validationResult.totalCoins}</div>
                </div>
              </div>
            )}

            {!receipt && (
              <div className="pt-4 mt-4 border-t border-border">
                <h3 className="font-medium mb-2">How It Works</h3>
                <ul className="text-sm text-muted-foreground space-y-2">
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-eco-100 text-eco-600 flex items-center justify-center text-xs font-medium">1</span>
                    <span>Upload your grocery receipt</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-eco-100 text-eco-600 flex items-center justify-center text-xs font-medium">2</span>
                    <span>Our system will identify eco-friendly products</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-eco-100 text-eco-600 flex items-center justify-center text-xs font-medium">3</span>
                    <span>Earn coins based on your purchases</span>
                  </li>
                  <li className="flex gap-2">
                    <span className="flex-shrink-0 w-5 h-5 rounded-full bg-eco-100 text-eco-600 flex items-center justify-center text-xs font-medium">4</span>
                    <span>Redeem coins for sustainable products</span>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>

        {/* Rewards Section */}
        <div className="lg:col-span-2">
          <div>
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-semibold">Available Rewards</h2>
              <div className="flex items-center">
                <p className="text-sm">Your balance: <span className="font-bold">{userCoins} coins</span></p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {rewardItems.map((item) => (
                <div key={item.id} className="glass-card p-0 overflow-hidden hover-scale">
                  <div className="flex">
                    <div className="w-24 h-24 bg-white flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="p-4 flex-1">
                      <div className="flex justify-between items-start">
                        <h3 className="font-semibold">{item.name}</h3>
                        <div className="text-sm font-bold text-eco-600">{item.coinCost} coins</div>
                      </div>
                      <div className="text-xs bg-secondary/50 rounded-full px-2 py-0.5 inline-block mb-2">{item.category}</div>
                      <p className="text-xs text-muted-foreground mb-3">{item.description}</p>
                      <Button 
                        size="sm" 
                        className={userCoins >= item.coinCost ? "bg-eco-500 hover:bg-eco-600" : "bg-muted text-muted-foreground cursor-not-allowed"}
                        disabled={userCoins < item.coinCost}
                      >
                        <ShoppingBag size={14} className="mr-1" />
                        {userCoins >= item.coinCost ? "Redeem" : "Not enough coins"}
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="flex justify-center mt-6">
              <Button variant="outline" className="border-eco-300 hover:bg-eco-100">
                View All Rewards 
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
          
          <div className="mt-8">
            <h2 className="text-xl font-semibold mb-6">Community Leaderboard</h2>
            <div className="glass-card p-0 overflow-hidden">
              <div className="bg-eco-50 p-4 border-b border-eco-100">
                <div className="grid grid-cols-4 font-medium">
                  <div>Rank</div>
                  <div>Group Name</div>
                  <div className="text-center">Members</div>
                  <div className="text-right">Total Coins</div>
                </div>
              </div>
              <div>
                {leaderboardGroups.map((group, index) => (
                  <div 
                    key={group.name} 
                    className={`p-4 grid grid-cols-4 border-b border-border ${
                      index === 0 ? "bg-amber-50" : ""
                    } hover:bg-muted/20`}
                  >
                    <div className="flex items-center">
                      {index === 0 ? (
                        <div className="p-1 rounded-full bg-amber-100 mr-2">
                          <Trophy size={16} className="text-amber-500" />
                        </div>
                      ) : (
                        <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center mr-2">
                          {group.rank}
                        </div>
                      )}
                    </div>
                    <div className="font-medium">{group.name}</div>
                    <div className="text-center">{group.members}</div>
                    <div className="text-right font-semibold">{group.totalCoins.toLocaleString()}</div>
                  </div>
                ))}
              </div>
              <div className="p-4 text-center">
                <Button variant="link" className="text-eco-600">
                  Join a Community Group
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
