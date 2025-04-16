
import { Link } from "react-router-dom";
import { Leaf, Instagram, Twitter, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="border-t border-border mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-eco-400 to-eco-600 rounded-md flex items-center justify-center text-white font-bold">
                EB
              </div>
              <span className="font-bold text-lg">
                Eco<span className="text-eco-500">Bite</span>
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Empowering consumers to make healthier food choices while reducing packaging waste.
            </p>
            <div className="flex gap-3">
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Instagram size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Twitter size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Facebook size={18} />
              </Button>
              <Button variant="ghost" size="icon" className="rounded-full h-9 w-9">
                <Youtube size={18} />
              </Button>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="font-medium text-sm mb-4">Features</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/analyzer" className="hover:text-eco-600 transition-colors">Product Analyzer</Link></li>
              <li><Link to="/packaging" className="hover:text-eco-600 transition-colors">Smart Packaging Disposal</Link></li>
              <li><Link to="/tracker" className="hover:text-eco-600 transition-colors">Health & Waste Tracker</Link></li>
              <li><Link to="/alternatives" className="hover:text-eco-600 transition-colors">Eco Alternatives</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-medium text-sm mb-4">Community</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/rewards" className="hover:text-eco-600 transition-colors">Rewards Program</Link></li>
              <li><Link to="/community" className="hover:text-eco-600 transition-colors">Community Groups</Link></li>
              <li><Link to="/reviews" className="hover:text-eco-600 transition-colors">Product Reviews</Link></li>
              <li><Link to="/blog" className="hover:text-eco-600 transition-colors">Sustainability Blog</Link></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="font-medium text-sm mb-4">Support</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><Link to="/help" className="hover:text-eco-600 transition-colors">Help Center</Link></li>
              <li><Link to="/contact" className="hover:text-eco-600 transition-colors">Contact Us</Link></li>
              <li><Link to="/privacy" className="hover:text-eco-600 transition-colors">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-eco-600 transition-colors">Terms of Service</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-6 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} EcoBite Insights. All rights reserved.</p>
          <p className="mt-2 flex items-center justify-center gap-1">
            <Leaf size={14} className="text-eco-500" /> 
            Making sustainable food choices easier, one package at a time.
          </p>
        </div>
      </div>
    </footer>
  );
}
