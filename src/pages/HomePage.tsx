
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Search, Leaf, BarChart3, FileText, Gift, Users, Upload, ChevronRight } from "lucide-react";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  const features = [
    {
      title: "Product Analyzer",
      description: "Analyze packaged foods to uncover ingredients, nutrition facts, and health impacts.",
      icon: <Search className="h-10 w-10 text-eco-500" />,
      to: "/analyzer",
      color: "from-green-50 to-emerald-50"
    },
    {
      title: "Smart Packaging Disposal",
      description: "Learn how to properly dispose of packaging for minimal environmental impact.",
      icon: <Leaf className="h-10 w-10 text-eco2-500" />,
      to: "/packaging",
      color: "from-emerald-50 to-teal-50"
    },
    {
      title: "Health & Waste Tracker",
      description: "Monitor your consumption patterns and their impact on your health and the environment.",
      icon: <BarChart3 className="h-10 w-10 text-eco-600" />,
      to: "/tracker",
      color: "from-teal-50 to-cyan-50"
    },
    {
      title: "User Reviews & Ratings",
      description: "Discover what others think about various packaged food products.",
      icon: <FileText className="h-10 w-10 text-eco2-600" />,
      to: "/reviews",
      color: "from-blue-50 to-indigo-50"
    },
    {
      title: "Eco Packaged Suggestions",
      description: "Find healthier alternatives with more sustainable packaging.",
      icon: <Leaf className="h-10 w-10 text-eco-500" />,
      to: "/alternatives",
      color: "from-green-50 to-emerald-50"
    },
    {
      title: "Rewards & Community",
      description: "Earn rewards for making sustainable choices and join like-minded communities.",
      icon: <Gift className="h-10 w-10 text-eco2-500" />,
      to: "/rewards",
      color: "from-amber-50 to-yellow-50"
    }
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      role: "Health Conscious Parent",
      content: "EcoBite helped me identify hidden sugars in my children's favorite snacks. We've made much healthier choices since!",
      avatar: "https://i.pravatar.cc/100?img=1"
    },
    {
      name: "Michael T.",
      role: "Environmental Advocate",
      content: "The packaging disposal guide is a game-changer. I've reduced my household waste by 40% in just two months.",
      avatar: "https://i.pravatar.cc/100?img=2"
    },
    {
      name: "Priya K.",
      role: "Nutrition Student",
      content: "I use EcoBite for my studies and personal shopping. The detailed ingredient analysis is incredibly helpful.",
      avatar: "https://i.pravatar.cc/100?img=3"
    }
  ];

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2 space-y-8 animate-fade-in">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                Make <span className="text-gradient">healthier</span> food choices with <span className="text-gradient">less waste</span>
              </h1>

              <p className="text-lg text-muted-foreground max-w-lg">
                EcoBite helps you analyze packaged foods, understand their health impact, and reduce packaging waste through smarter consumer choices.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-eco-500 hover:bg-eco-600" asChild>
                  <Link to="/analyzer">
                    Analyze a Product <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>

                <Button size="lg" variant="outline" className="border-eco-300 hover:bg-eco-100" asChild>
                  <Link to="/signup">
                    Create Account
                  </Link>
                </Button>
              </div>
            </div>

            <div className="lg:w-1/2 relative animate-fade-in">
              <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4/5 h-4/5 bg-gradient-to-br from-eco-200 via-eco2-200 to-eco-300 rounded-full blur-3xl opacity-30"></div>
              
              <div className="glass-card p-8 relative animate-float">
                <div className="absolute -inset-1 bg-gradient-to-r from-eco-300/40 via-eco2-400/40 to-eco-500/40 rounded-xl blur-lg -z-10"></div>
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 rounded-full bg-eco-100 flex items-center justify-center">
                        <Search size={16} className="text-eco-700" />
                      </div>
                      <h3 className="font-medium">Product Search</h3>
                    </div>
                    <div className="text-xs text-muted-foreground">Quick Analysis</div>
                  </div>
                  
                  <div className="flex gap-2">
                    <div className="flex-1">
                      <Input 
                        placeholder="Search for a food product..." 
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="bg-white/50"
                      />
                    </div>
                    
                    <Button variant="default" className="bg-eco-500 hover:bg-eco-600 shrink-0">
                      <Search size={18} />
                    </Button>
                    
                    <Button variant="outline" className="border-eco-300 hover:bg-eco-100 shrink-0">
                      <Upload size={18} />
                    </Button>
                  </div>
                  
                  <div className="space-y-3">
                    <p className="text-xs uppercase text-muted-foreground">Popular searches</p>
                    <div className="flex flex-wrap gap-2">
                      {["Oreo Cookies", "Lays Chips", "Coca Cola", "Nutella", "Pringles"].map((item) => (
                        <div 
                          key={item} 
                          className="text-xs px-3 py-1.5 bg-white/50 hover:bg-white/70 rounded-full cursor-pointer transition-colors"
                        >
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our <span className="text-gradient">Features</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover the tools that help you make healthier food choices while reducing your environmental footprint.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <Link 
                key={feature.title} 
                to={feature.to}
                className="hover-scale"
              >
                <div className={`glass-card p-6 h-full bg-gradient-to-br ${feature.color} hover:shadow-lg animate-fade-in`} style={{animationDelay: `${index * 0.1}s`}}>
                  <div className="mb-4 rounded-lg w-16 h-16 flex items-center justify-center bg-white/80">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground mb-4">{feature.description}</p>
                  <div className="flex items-center text-eco-600 font-medium">
                    <span>Explore</span>
                    <ChevronRight size={16} className="ml-1" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              How It <span className="text-gradient">Works</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              EcoBite makes it easy to analyze products and make better choices in just a few simple steps.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-eco-100 shadow-sm flex flex-col items-center text-center hover-scale">
              <div className="w-12 h-12 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                <Search size={24} className="text-eco-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">1. Search or Upload</h3>
              <p className="text-muted-foreground">
                Search for a product by name or take a photo of the packaging to analyze it instantly.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-eco-100 shadow-sm flex flex-col items-center text-center hover-scale">
              <div className="w-12 h-12 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                <BarChart3 size={24} className="text-eco-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">2. Get Insights</h3>
              <p className="text-muted-foreground">
                Receive detailed information about ingredients, nutrition, allergens, and packaging disposal.
              </p>
            </div>

            <div className="bg-white/50 backdrop-blur-sm rounded-xl p-6 border border-eco-100 shadow-sm flex flex-col items-center text-center hover-scale">
              <div className="w-12 h-12 rounded-full bg-eco-100 flex items-center justify-center mb-4">
                <Gift size={24} className="text-eco-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">3. Earn Rewards</h3>
              <p className="text-muted-foreground">
                Upload your receipt to verify purchases and earn coins redeemable for eco-friendly products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 px-4 md:px-0">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              What Our <span className="text-gradient">Users</span> Say
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Join thousands of people making healthier and more sustainable food choices.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.name} 
                className="glass-card p-6 hover-scale animate-fade-in"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="flex items-center gap-3 mb-4">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.name} 
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">{testimonial.content}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button size="lg" className="bg-eco-500 hover:bg-eco-600" asChild>
              <Link to="/signup">
                Join EcoBite Today <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
