
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Home, Search, Upload, Leaf, BarChart3, FileText, Gift, Users, Menu, X
} from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";
import { cn } from "@/lib/utils";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Home", to: "/", icon: <Home size={18} /> },
    { name: "Analyzer", to: "/analyzer", icon: <Search size={18} /> },
    { name: "Packaging", to: "/packaging", icon: <Leaf size={18} /> },
    { name: "Health Tracker", to: "/tracker", icon: <BarChart3 size={18} /> },
    { name: "Reviews", to: "/reviews", icon: <FileText size={18} /> },
    { name: "Eco Alternatives", to: "/alternatives", icon: <Leaf size={18} /> },
    { name: "Rewards", to: "/rewards", icon: <Gift size={18} /> },
    { name: "Community", to: "/community", icon: <Users size={18} /> },
  ];

  const toggleMobileMenu = () => setMobileMenuOpen(!mobileMenuOpen);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        scrolled 
          ? "py-2 bg-white/80 backdrop-blur-lg shadow-md" 
          : "py-4 bg-transparent"
      )}
    >
      <div className="container mx-auto flex justify-between items-center px-4">
        <Link to="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-gradient-to-br from-eco-400 to-eco-600 rounded-md flex items-center justify-center text-white font-bold">
            EB
          </div>
          <span className="font-bold text-lg">
            Eco<span className="text-eco-500">Bite</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        {!isMobile && (
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                className="px-3 py-2 text-sm rounded-md hover:bg-secondary transition-colors duration-200 flex items-center gap-1"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </nav>
        )}

        <div className="flex items-center gap-3">
          <Button
            variant="outline"
            size="sm"
            className="flex gap-1 items-center border-eco-300 hover:bg-eco-100 hover:text-eco-700"
            asChild
          >
            <Link to="/analyzer">
              <Upload size={16} />
              <span>Analyze</span>
            </Link>
          </Button>

          <Button
            variant="default"
            size="sm"
            className="bg-eco-500 hover:bg-eco-600"
            asChild
          >
            <Link to="/login">Login</Link>
          </Button>

          {isMobile && (
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleMobileMenu}
              className="text-foreground"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </Button>
          )}
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMobile && mobileMenuOpen && (
        <nav className="absolute top-full left-0 w-full bg-white/95 backdrop-blur-lg shadow-lg animate-fade-in">
          <div className="container mx-auto py-3 px-4 flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-3 rounded-md hover:bg-secondary flex items-center gap-2"
              >
                {link.icon}
                <span>{link.name}</span>
              </Link>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
