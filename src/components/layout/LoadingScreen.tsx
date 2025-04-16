
import { useEffect, useState } from "react";
import { Leaf } from "lucide-react";

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        const newProgress = prevProgress + 5;
        return newProgress >= 100 ? 100 : newProgress;
      });
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="fixed inset-0 bg-background flex flex-col items-center justify-center z-50">
      <div className="flex flex-col items-center gap-6">
        <div className="relative">
          <div className="animate-float">
            <div className="w-20 h-20 bg-gradient-to-br from-eco-400 to-eco-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Leaf size={40} className="text-white" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-eco-300/40 via-eco2-400/40 to-eco-500/40 rounded-3xl blur-lg -z-10"></div>
          </div>
        </div>
        
        <h1 className="text-2xl font-bold mt-4 text-gradient">
          EcoBite Insights
        </h1>
        
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden mt-2">
          <div 
            className="h-full bg-gradient-to-r from-eco-400 to-eco-600 transition-all duration-300 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <p className="text-sm text-muted-foreground animate-pulse">
          Loading sustainable insights...
        </p>
      </div>
    </div>
  );
}
