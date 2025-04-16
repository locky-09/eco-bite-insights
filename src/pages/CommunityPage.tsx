
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Users, MessageSquare, Search, UserPlus, Trophy, Award, Star, PlusCircle, Share2
} from "lucide-react";

export default function CommunityPage() {
  const [searchTerm, setSearchTerm] = useState("");
  
  // Mock data for community groups
  const groups = [
    {
      id: 1,
      name: "EcoWarriors",
      members: 28,
      score: 12450,
      rank: 1,
      description: "A community dedicated to finding and sharing the most eco-friendly food options and packaging solutions.",
      avatar: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&q=80&w=100",
      posts: 147,
      joined: true
    },
    {
      id: 2,
      name: "Green Guardians",
      members: 24,
      score: 10820,
      rank: 2,
      description: "Focused on reducing plastic waste and finding sustainable alternatives to everyday products.",
      avatar: "https://images.unsplash.com/photo-1501862700950-18382cd41497?auto=format&fit=crop&q=80&w=100",
      posts: 122,
      joined: false
    },
    {
      id: 3,
      name: "Sustainable Squad",
      members: 32,
      score: 9750,
      rank: 3,
      description: "We're on a mission to transform how we consume and dispose of packaged foods.",
      avatar: "https://images.unsplash.com/photo-1520454974749-611b7248ffdb?auto=format&fit=crop&q=80&w=100",
      posts: 193,
      joined: false
    }
  ];
  
  // Mock data for community posts
  const posts = [
    {
      id: 1,
      user: "Sarah J.",
      avatar: "https://i.pravatar.cc/100?img=1",
      group: "EcoWarriors",
      time: "2 hours ago",
      content: "Just discovered these amazing compostable snack wrappers at my local grocery store! The company uses plant-based materials that break down in 6 months.",
      image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=400",
      likes: 24,
      comments: 7,
      tags: ["packaging", "compostable", "snacks"]
    },
    {
      id: 2,
      user: "Michael T.",
      avatar: "https://i.pravatar.cc/100?img=2",
      group: "Green Guardians",
      time: "5 hours ago",
      content: "Did a waste audit of my kitchen this weekend. Shocked to find that 40% of my trash was food packaging! Going to focus on bulk buying with reusable containers this month.",
      image: null,
      likes: 18,
      comments: 12,
      tags: ["waste-audit", "bulk-buying", "zero-waste"]
    },
    {
      id: 3,
      user: "Priya K.",
      avatar: "https://i.pravatar.cc/100?img=3",
      group: "EcoWarriors",
      time: "Yesterday",
      content: "Found this great brand that uses 100% recycled cardboard for their cereal boxes AND they take back the empty boxes for proper recycling. Here's my EcoBite analysis of their ingredients!",
      image: "https://images.unsplash.com/photo-1556710807-a95c9c0b8dcf?auto=format&fit=crop&q=80&w=400",
      likes: 32,
      comments: 9,
      tags: ["recycled", "cereal", "closed-loop"]
    }
  ];
  
  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Community Groups</h1>
      <p className="text-muted-foreground mb-8">
        Connect with like-minded people, share eco-food finds, and work together to reduce packaging waste.
      </p>

      {/* Top Groups Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {groups.map((group) => (
          <div key={group.id} className="glass-card p-6 hover-scale">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <img 
                  src={group.avatar} 
                  alt={group.name} 
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold">{group.name}</h3>
                  <div className="text-xs text-muted-foreground">
                    {group.members} members • {group.posts} posts
                  </div>
                </div>
              </div>
              {group.rank <= 3 && (
                <div className={`p-1 rounded-full ${
                  group.rank === 1 ? "bg-amber-100" : 
                  group.rank === 2 ? "bg-gray-200" : 
                  "bg-amber-800/20"
                }`}>
                  <Trophy size={16} className={`${
                    group.rank === 1 ? "text-amber-500" : 
                    group.rank === 2 ? "text-gray-500" : 
                    "text-amber-800"
                  }`} />
                </div>
              )}
            </div>
            
            <p className="text-sm text-muted-foreground mb-6 line-clamp-2">{group.description}</p>
            
            <div className="flex justify-between items-center">
              <div>
                <div className="text-xs text-muted-foreground mb-1">Community Score</div>
                <div className="font-semibold text-eco-600">{group.score.toLocaleString()} pts</div>
              </div>
              
              <Button 
                variant={group.joined ? "outline" : "default"} 
                size="sm"
                className={group.joined ? "border-eco-300 hover:bg-eco-100" : "bg-eco-500 hover:bg-eco-600"}
              >
                {group.joined ? "Joined" : "Join Group"}
              </Button>
            </div>
          </div>
        ))}
      </div>

      {/* Search and Create Group */}
      <div className="glass-card p-6 mb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="md:col-span-2">
            <h2 className="text-lg font-semibold mb-4">Find a Community Group</h2>
            <div className="flex gap-3">
              <div className="flex-1">
                <Input
                  placeholder="Search by interests, location, or group name"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="bg-white/50"
                />
              </div>
              <Button className="bg-eco-500 hover:bg-eco-600">
                <Search className="mr-2 h-4 w-4" />
                Search
              </Button>
            </div>
          </div>
          
          <div className="md:col-span-1">
            <h2 className="text-lg font-semibold mb-4">Create New Group</h2>
            <Button className="w-full bg-secondary border border-border hover:bg-secondary/80">
              <PlusCircle className="mr-2 h-4 w-4" />
              Create a Group
            </Button>
          </div>
        </div>
      </div>

      {/* Community Feed */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Feed */}
        <div className="lg:col-span-2">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-semibold">Recent Community Posts</h2>
            <select 
              className="px-3 py-1 text-sm border rounded-md bg-white/50"
              defaultValue="latest"
            >
              <option value="latest">Latest</option>
              <option value="popular">Most Popular</option>
              <option value="trending">Trending</option>
            </select>
          </div>
          
          <div className="space-y-6">
            {/* Post Input */}
            <div className="glass-card p-6">
              <div className="flex gap-4">
                <img 
                  src="https://i.pravatar.cc/100?img=10" 
                  alt="Your Avatar" 
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <Textarea 
                    placeholder="Share an eco-friendly food find or packaging idea..." 
                    className="min-h-[80px] mb-4 bg-white/50"
                  />
                  <div className="flex justify-between">
                    <div className="flex gap-2">
                      <Button variant="outline" size="sm" className="text-xs">
                        Add Photo
                      </Button>
                      <Button variant="outline" size="sm" className="text-xs">
                        Add Tags
                      </Button>
                    </div>
                    <Button size="sm" className="bg-eco-500 hover:bg-eco-600">
                      Post
                    </Button>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Community Posts */}
            {posts.map((post) => (
              <div key={post.id} className="glass-card p-6 animate-fade-in">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-3">
                    <img 
                      src={post.avatar} 
                      alt={post.user} 
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <div className="font-medium">{post.user}</div>
                      <div className="text-xs text-muted-foreground flex items-center gap-1">
                        <span>in {post.group}</span>
                        <span>•</span>
                        <span>{post.time}</span>
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Share2 size={14} />
                  </Button>
                </div>
                
                <p className="text-muted-foreground mb-4">{post.content}</p>
                
                {post.image && (
                  <div className="mb-4 rounded-lg overflow-hidden">
                    <img 
                      src={post.image}
                      alt="Post media" 
                      className="w-full h-auto object-cover"
                    />
                  </div>
                )}
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag) => (
                    <div key={tag} className="text-xs px-3 py-1 bg-secondary rounded-full">
                      #{tag}
                    </div>
                  ))}
                </div>
                
                <div className="flex gap-4 text-sm">
                  <Button variant="ghost" size="sm" className="text-muted-foreground gap-1 px-2">
                    <Star size={16} />
                    <span>{post.likes}</span>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground gap-1 px-2">
                    <MessageSquare size={16} />
                    <span>{post.comments}</span>
                  </Button>
                </div>
              </div>
            ))}
          </div>
          
          <div className="flex justify-center mt-8">
            <Button variant="outline" className="border-eco-300 hover:bg-eco-100">
              Load More
            </Button>
          </div>
        </div>
        
        {/* Sidebar */}
        <div className="lg:col-span-1">
          <div className="glass-card p-6 mb-6">
            <h3 className="font-semibold mb-4">Your Groups</h3>
            <div className="space-y-4">
              {groups.filter(g => g.joined).map((group) => (
                <div key={group.id} className="flex items-center gap-3">
                  <img 
                    src={group.avatar} 
                    alt={group.name} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{group.name}</div>
                    <div className="text-xs text-muted-foreground">{group.members} members</div>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare size={14} className="text-muted-foreground mr-1" />
                    <span className="text-xs">{group.posts}</span>
                  </div>
                </div>
              ))}

              <Button variant="link" className="text-eco-600 w-full">
                Browse More Groups
              </Button>
            </div>
          </div>

          <div className="glass-card p-6 mb-6">
            <h3 className="font-semibold mb-4">Top Contributors</h3>
            <div className="space-y-3">
              {[
                { name: "Alex P.", avatar: "https://i.pravatar.cc/100?img=5", contributions: 542 },
                { name: "Emma L.", avatar: "https://i.pravatar.cc/100?img=6", contributions: 487 },
                { name: "David W.", avatar: "https://i.pravatar.cc/100?img=7", contributions: 356 },
              ].map((user, index) => (
                <div key={user.name} className="flex items-center gap-3">
                  <div className="relative">
                    <img 
                      src={user.avatar} 
                      alt={user.name} 
                      className="w-8 h-8 rounded-full object-cover"
                    />
                    <div className={`absolute -top-1 -right-1 w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                      index === 0 ? "bg-amber-100 text-amber-600" : 
                      index === 1 ? "bg-gray-200 text-gray-600" : 
                      "bg-amber-800/20 text-amber-800"
                    }`}>
                      {index + 1}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-medium">{user.name}</div>
                    <div className="text-xs text-muted-foreground">{user.contributions} contributions</div>
                  </div>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <UserPlus size={14} />
                  </Button>
                </div>
              ))}
            </div>
          </div>

          <div className="border border-eco-100 rounded-lg overflow-hidden">
            <div className="bg-eco-50 p-4 border-b border-eco-100">
              <h3 className="font-semibold">Upcoming Events</h3>
            </div>
            <div className="p-4">
              <div className="space-y-4">
                <div className="border-l-2 border-eco-500 pl-3">
                  <div className="text-sm font-medium">Community Cleanup</div>
                  <div className="text-xs text-muted-foreground">This Saturday at 10:00 AM</div>
                  <div className="text-xs mt-1">
                    <Button variant="link" className="h-auto p-0 text-eco-600">
                      RSVP
                    </Button>
                  </div>
                </div>
                <div className="border-l-2 border-eco-500 pl-3">
                  <div className="text-sm font-medium">Sustainable Shopping Webinar</div>
                  <div className="text-xs text-muted-foreground">May 20 at 6:00 PM</div>
                  <div className="text-xs mt-1">
                    <Button variant="link" className="h-auto p-0 text-eco-600">
                      Set Reminder
                    </Button>
                  </div>
                </div>
                <div className="border-l-2 border-eco-500 pl-3">
                  <div className="text-sm font-medium">Zero-Waste Cooking Class</div>
                  <div className="text-xs text-muted-foreground">May 25 at 2:00 PM</div>
                  <div className="text-xs mt-1">
                    <Button variant="link" className="h-auto p-0 text-eco-600">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
