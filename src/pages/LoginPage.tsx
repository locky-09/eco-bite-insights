
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Leaf, Mail, Lock, Github, Chrome } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulating authentication
    setTimeout(() => {
      setIsLoading(false);
      window.location.href = "/"; // Redirect to homepage after login
    }, 1500);
  };
  
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-eco-50 to-eco2-50 relative">
      {/* Background pattern */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute -top-40 -left-40 w-80 h-80 bg-eco-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute top-40 -right-20 w-60 h-60 bg-eco2-200 rounded-full filter blur-3xl opacity-30"></div>
        <div className="absolute -bottom-40 left-20 w-80 h-80 bg-eco-300 rounded-full filter blur-3xl opacity-30"></div>
      </div>
      
      <div className="max-w-md w-full p-8 relative z-10">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-eco-400 to-eco-600 text-white p-3 mb-4 shadow-lg">
            <Leaf size={28} />
          </div>
          <h1 className="text-2xl font-bold">Welcome to EcoBite</h1>
          <p className="text-muted-foreground mt-1">Sign in to continue your eco journey</p>
        </div>
        
        <div className="glass-card p-6 animated-border">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail size={16} className="text-muted-foreground" />
                </div>
                <Input
                  id="email"
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-white/50"
                  required
                />
              </div>
            </div>
            
            <div>
              <div className="flex items-center justify-between mb-1">
                <label htmlFor="password" className="block text-sm font-medium">Password</label>
                <a href="#" className="text-xs text-eco-600 hover:text-eco-700">Forgot password?</a>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock size={16} className="text-muted-foreground" />
                </div>
                <Input
                  id="password"
                  type="password"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="pl-10 bg-white/50"
                  required
                />
              </div>
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-eco-500 hover:bg-eco-600"
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                  Signing in...
                </>
              ) : (
                "Sign In"
              )}
            </Button>
          </form>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-border"></div>
            </div>
            <div className="relative flex justify-center">
              <span className="px-2 bg-white text-xs text-muted-foreground">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full">
              <Chrome size={16} className="mr-2" />
              Google
            </Button>
            <Button variant="outline" className="w-full">
              <Github size={16} className="mr-2" />
              GitHub
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-6 text-sm">
          <span className="text-muted-foreground">Don't have an account?</span>
          <Link to="/signup" className="ml-1 text-eco-600 hover:text-eco-700 font-medium">
            Create account
          </Link>
        </div>
      </div>
    </div>
  );
}
