
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Star, Search, ThumbsUp, ArrowUp, ArrowDown } from "lucide-react";

export default function ReviewsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [sortOrder, setSortOrder] = useState("newest");
  
  // Mock data for product reviews
  const reviews = [
    {
      id: 1,
      productName: "Oreo Cookies",
      user: "Sarah J.",
      avatar: "https://i.pravatar.cc/100?img=1",
      date: "2023-04-12",
      rating: 3,
      packagingRating: 2,
      content: "While the cookies taste good, the packaging is excessive and mostly plastic. They could use more eco-friendly materials.",
      helpfulCount: 24,
      tags: ["cookies", "plastic packaging", "sweet snacks"]
    },
    {
      id: 2,
      productName: "Lays Classic Chips",
      user: "Michael T.",
      avatar: "https://i.pravatar.cc/100?img=2",
      date: "2023-04-10",
      rating: 4,
      packagingRating: 1,
      content: "Great taste but the air-filled plastic bag is terrible for the environment. Would love to see them switch to compostable materials.",
      helpfulCount: 36,
      tags: ["chips", "snacks", "plastic packaging"]
    },
    {
      id: 3,
      productName: "Amy's Organic Soups",
      user: "Priya K.",
      avatar: "https://i.pravatar.cc/100?img=3",
      date: "2023-04-08",
      rating: 5,
      packagingRating: 4,
      content: "Love that they use BPA-free cans with recycled materials. The soup is delicious and I feel good about my purchase.",
      helpfulCount: 42,
      tags: ["organic", "soup", "sustainable packaging"]
    },
    {
      id: 4,
      productName: "Coca-Cola",
      user: "James R.",
      avatar: "https://i.pravatar.cc/100?img=4",
      date: "2023-04-05",
      rating: 4,
      packagingRating: 3,
      content: "Aluminum cans are recyclable which is great, but they still have plastic rings in the multipacks which can harm wildlife.",
      helpfulCount: 18,
      tags: ["beverages", "aluminum", "recyclable"]
    },
  ];
  
  const renderStars = (rating: number) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(
        <Star 
          key={i} 
          size={16} 
          className={i <= rating ? "fill-eco-500 text-eco-500" : "text-gray-300"} 
        />
      );
    }
    return stars;
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Reviews & Industry Insights</h1>
      <p className="text-muted-foreground mb-8">
        Discover what other users think about packaged food products and their environmental impact.
      </p>

      {/* Search and Filter Section */}
      <div className="glass-card p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4 items-end">
          <div className="flex-1">
            <label className="block text-sm font-medium mb-2">Search Reviews</label>
            <Input
              placeholder="Search by product name, user, or tags..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="bg-white/50"
            />
          </div>

          <div className="w-full md:w-48">
            <label className="block text-sm font-medium mb-2">Sort By</label>
            <select 
              className="w-full h-10 rounded-md border border-input bg-white/50 px-3 py-2 text-sm ring-offset-background"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value)}
            >
              <option value="newest">Newest First</option>
              <option value="oldest">Oldest First</option>
              <option value="highestRating">Highest Rating</option>
              <option value="lowestRating">Lowest Rating</option>
              <option value="mostHelpful">Most Helpful</option>
            </select>
          </div>

          <Button className="bg-eco-500 hover:bg-eco-600">
            <Search className="mr-2 h-4 w-4" />
            Search
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Reviews Column */}
        <div className="lg:col-span-2">
          <h2 className="text-xl font-semibold mb-6">User Reviews</h2>
          
          <div className="space-y-6">
            {reviews.map(review => (
              <div key={review.id} className="glass-card p-6 hover-scale animate-fade-in">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex items-center">
                    <img 
                      src={review.avatar} 
                      alt={review.user} 
                      className="w-10 h-10 rounded-full mr-3"
                    />
                    <div>
                      <h3 className="font-medium">{review.user}</h3>
                      <div className="text-sm text-muted-foreground">{review.date}</div>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <ThumbsUp size={14} />
                    </Button>
                    <span className="text-sm font-medium mr-2">{review.helpfulCount}</span>
                  </div>
                </div>
                
                <h4 className="text-lg font-semibold mb-2">{review.productName}</h4>
                
                <div className="flex mb-3">
                  <div className="mr-6">
                    <div className="text-xs text-muted-foreground mb-1">Food Quality</div>
                    <div className="flex">{renderStars(review.rating)}</div>
                  </div>
                  <div>
                    <div className="text-xs text-muted-foreground mb-1">Packaging</div>
                    <div className="flex">{renderStars(review.packagingRating)}</div>
                  </div>
                </div>
                
                <p className="text-muted-foreground mb-4">{review.content}</p>
                
                <div className="flex flex-wrap gap-2">
                  {review.tags.map(tag => (
                    <div key={tag} className="text-xs px-3 py-1 bg-secondary rounded-full">
                      {tag}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-eco-300 hover:bg-eco-100">
              Load More Reviews
            </Button>
          </div>
        </div>

        {/* Submit Review & Insights Column */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 mb-6">
            <h2 className="text-xl font-semibold mb-4">Submit a Review</h2>
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-2">Product Name</label>
                <Input placeholder="Enter product name" className="bg-white/50" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Food Quality Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <Button key={rating} variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Star size={16} />
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Packaging Rating</label>
                <div className="flex gap-1">
                  {[1, 2, 3, 4, 5].map(rating => (
                    <Button key={rating} variant="ghost" size="sm" className="h-8 w-8 p-0">
                      <Star size={16} />
                    </Button>
                  ))}
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Review</label>
                <Textarea 
                  placeholder="Share your thoughts about this product..." 
                  className="min-h-[100px] bg-white/50"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Tags (comma separated)</label>
                <Input placeholder="e.g., organic, snacks, recyclable" className="bg-white/50" />
              </div>
              <Button className="w-full bg-eco-500 hover:bg-eco-600">Submit Review</Button>
            </div>
          </div>

          <div className="border border-eco-100 rounded-lg overflow-hidden">
            <div className="bg-eco-50 p-4">
              <h3 className="font-semibold">Industry Insights</h3>
              <p className="text-sm text-muted-foreground">Trends based on user reviews</p>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Most Reviewed Categories</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span>Snacks</span>
                      <span>42%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-eco-500 h-1.5 rounded-full" style={{ width: "42%" }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span>Beverages</span>
                      <span>28%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-eco-500 h-1.5 rounded-full" style={{ width: "28%" }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span>Ready Meals</span>
                      <span>18%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-eco-500 h-1.5 rounded-full" style={{ width: "18%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Packaging Concerns</span>
                  </div>
                  <div className="space-y-2">
                    <div className="flex justify-between items-center text-xs">
                      <span>Excessive Plastic</span>
                      <span>64%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-red-400 h-1.5 rounded-full" style={{ width: "64%" }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span>Non-Recyclable</span>
                      <span>47%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-red-400 h-1.5 rounded-full" style={{ width: "47%" }}></div>
                    </div>
                    
                    <div className="flex justify-between items-center text-xs">
                      <span>Excessive Size</span>
                      <span>29%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-1.5">
                      <div className="bg-amber-400 h-1.5 rounded-full" style={{ width: "29%" }}></div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span>Top Rated Eco-Brands</span>
                  </div>
                  <ul className="text-xs space-y-1.5">
                    <li className="flex justify-between">
                      <span>Amy's Organic</span>
                      <div className="flex">
                        {renderStars(5)}
                      </div>
                    </li>
                    <li className="flex justify-between">
                      <span>Seventh Generation</span>
                      <div className="flex">
                        {renderStars(4)}
                      </div>
                    </li>
                    <li className="flex justify-between">
                      <span>Nature's Path</span>
                      <div className="flex">
                        {renderStars(4)}
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
