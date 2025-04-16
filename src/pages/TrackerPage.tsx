
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  BarChart3, LineChart, PieChart, TrendingUp, TrendingDown, Calendar, Plus
} from "lucide-react";
import {
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  PieChart as RePieChart,
  Pie,
  Cell,
  LineChart as ReLineChart,
  Line
} from "recharts";

export default function TrackerPage() {
  const [view, setView] = useState<'daily' | 'weekly' | 'monthly'>('weekly');

  // Mock data for charts
  const healthData = [
    { name: 'Mon', preservatives: 4, sugar: 8, salt: 3 },
    { name: 'Tue', preservatives: 3, sugar: 6, salt: 2 },
    { name: 'Wed', preservatives: 6, sugar: 9, salt: 5 },
    { name: 'Thu', preservatives: 2, sugar: 4, salt: 1 },
    { name: 'Fri', preservatives: 5, sugar: 7, salt: 4 },
    { name: 'Sat', preservatives: 7, sugar: 10, salt: 6 },
    { name: 'Sun', preservatives: 3, sugar: 5, salt: 2 },
  ];

  const wasteData = [
    { name: 'Mon', plastic: 3, paper: 1, mixed: 2 },
    { name: 'Tue', plastic: 2, paper: 2, mixed: 1 },
    { name: 'Wed', plastic: 4, paper: 1, mixed: 3 },
    { name: 'Thu', plastic: 1, paper: 2, mixed: 1 },
    { name: 'Fri', plastic: 3, paper: 1, mixed: 2 },
    { name: 'Sat', plastic: 5, paper: 2, mixed: 4 },
    { name: 'Sun', plastic: 2, paper: 1, mixed: 1 },
  ];

  const healthImpactData = [
    { name: "Good", value: 20, color: "#4ade80" }, // green
    { name: "Moderate", value: 45, color: "#facc15" }, // yellow
    { name: "Poor", value: 35, color: "#f87171" }, // red
  ];

  const progressData = [
    { name: 'Week 1', value: 80 },
    { name: 'Week 2', value: 70 },
    { name: 'Week 3', value: 85 },
    { name: 'Week 4', value: 65 },
    { name: 'Week 5', value: 75 },
    { name: 'Week 6', value: 60 },
    { name: 'Week 7', value: 55 },
    { name: 'Week 8', value: 50 },
  ];

  const foodItems = [
    { id: 1, name: "Oreo Cookies", quantity: 1, date: "2023-04-15", impact: "high", packaging: "plastic" },
    { id: 2, name: "Lays Chips", quantity: 2, date: "2023-04-15", impact: "medium", packaging: "mixed" },
    { id: 3, name: "Coca-Cola", quantity: 1, date: "2023-04-14", impact: "high", packaging: "plastic" },
    { id: 4, name: "Trail Mix", quantity: 1, date: "2023-04-14", impact: "low", packaging: "paper" },
    { id: 5, name: "Yogurt", quantity: 2, date: "2023-04-13", impact: "medium", packaging: "plastic" },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl md:text-4xl font-bold mb-2">Health & Waste Tracker</h1>
      <p className="text-muted-foreground mb-8">
        Monitor your packaged food consumption and its impact on your health and the environment.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Average Health Impact</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8/10</div>
            <p className="text-xs text-muted-foreground">Moderate impact on health</p>
            <div className="mt-2 flex items-center gap-1 text-amber-500 text-xs">
              <TrendingDown className="h-3 w-3" />
              <span>3% improvement from last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Waste Generated</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.4 kg</div>
            <p className="text-xs text-muted-foreground">Packaging waste this week</p>
            <div className="mt-2 flex items-center gap-1 text-red-500 text-xs">
              <TrendingUp className="h-3 w-3" />
              <span>5% increase from last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Packaged Foods</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">Items consumed this week</p>
            <div className="mt-2 flex items-center gap-1 text-eco-500 text-xs">
              <TrendingDown className="h-3 w-3" />
              <span>2 fewer than last week</span>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Eco Score</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">7.2/10</div>
            <p className="text-xs text-muted-foreground">Overall sustainability score</p>
            <div className="mt-2 flex items-center gap-1 text-eco-500 text-xs">
              <TrendingUp className="h-3 w-3" />
              <span>7% improvement from last week</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="glass-card p-6 mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold">Log Food Item</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" className="border-eco-300 hover:bg-eco-100">
              <Calendar size={16} className="mr-2" />
              Select Date
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
          <Input 
            placeholder="Food item name"
            className="md:col-span-2 bg-white/50"
          />
          <Input 
            placeholder="Quantity"
            type="number"
            className="md:col-span-1 bg-white/50"
          />
          <div className="md:col-span-1">
            <select className="w-full h-10 rounded-md border border-input bg-white/50 px-3 py-2 text-sm ring-offset-background">
              <option value="">Select packaging</option>
              <option value="plastic">Plastic</option>
              <option value="paper">Paper/Cardboard</option>
              <option value="glass">Glass</option>
              <option value="metal">Metal</option>
              <option value="mixed">Mixed Materials</option>
            </select>
          </div>
          <Button className="md:col-span-1 bg-eco-500 hover:bg-eco-600">
            <Plus size={16} className="mr-2" />
            Add Item
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Health Impact Over Time</CardTitle>
            <CardDescription>Weekly consumption of preservatives, sugar, and salt</CardDescription>
            <div className="flex gap-2 pt-2">
              <Button 
                variant={view === 'daily' ? 'default' : 'outline'} 
                size="sm"
                className={view === 'daily' ? 'bg-eco-500 hover:bg-eco-600' : ''}
                onClick={() => setView('daily')}
              >
                Daily
              </Button>
              <Button 
                variant={view === 'weekly' ? 'default' : 'outline'} 
                size="sm"
                className={view === 'weekly' ? 'bg-eco-500 hover:bg-eco-600' : ''}
                onClick={() => setView('weekly')}
              >
                Weekly
              </Button>
              <Button 
                variant={view === 'monthly' ? 'default' : 'outline'} 
                size="sm"
                className={view === 'monthly' ? 'bg-eco-500 hover:bg-eco-600' : ''}
                onClick={() => setView('monthly')}
              >
                Monthly
              </Button>
            </div>
          </CardHeader>
          <CardContent className="pt-0">
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={healthData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="preservatives" fill="#f97316" />
                  <Bar dataKey="sugar" fill="#8b5cf6" />
                  <Bar dataKey="salt" fill="#6366f1" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Waste Generation</CardTitle>
            <CardDescription>Weekly waste by packaging type</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={wasteData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="plastic" fill="#3b82f6" />
                  <Bar dataKey="paper" fill="#10b981" />
                  <Bar dataKey="mixed" fill="#f59e0b" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        <Card>
          <CardHeader>
            <CardTitle>Overall Health Impact</CardTitle>
            <CardDescription>Based on your food choices</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <RePieChart>
                  <Pie
                    data={healthImpactData}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                    label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                  >
                    {healthImpactData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                </RePieChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="col-span-1 lg:col-span-2">
          <CardHeader>
            <CardTitle>Progress Tracking</CardTitle>
            <CardDescription>Health score trend (higher is better)</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="h-[200px]">
              <ResponsiveContainer width="100%" height="100%">
                <ReLineChart data={progressData}>
                  <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
                  <XAxis dataKey="name" />
                  <YAxis domain={[0, 100]} />
                  <Tooltip />
                  <Line 
                    type="monotone" 
                    dataKey="value" 
                    stroke="#65a148" 
                    strokeWidth={2}
                    dot={{ stroke: '#65a148', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6 }}
                  />
                </ReLineChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Recent Food Log</CardTitle>
          <CardDescription>Your recently logged packaged food items</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="rounded-md border">
            <div className="grid grid-cols-6 bg-muted/50 p-3">
              <div className="col-span-2 font-medium">Item</div>
              <div className="font-medium text-center">Quantity</div>
              <div className="font-medium text-center">Date</div>
              <div className="font-medium text-center">Health Impact</div>
              <div className="font-medium text-center">Packaging</div>
            </div>
            <div className="divide-y">
              {foodItems.map((item) => (
                <div key={item.id} className="grid grid-cols-6 p-3 hover:bg-muted/20">
                  <div className="col-span-2">{item.name}</div>
                  <div className="text-center">{item.quantity}</div>
                  <div className="text-center">{item.date}</div>
                  <div className="text-center">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      item.impact === 'low' 
                        ? 'bg-green-100 text-green-700' 
                        : item.impact === 'medium' 
                          ? 'bg-amber-100 text-amber-700' 
                          : 'bg-red-100 text-red-700'
                    }`}>
                      {item.impact === 'low' ? 'Low' : item.impact === 'medium' ? 'Medium' : 'High'}
                    </span>
                  </div>
                  <div className="text-center">
                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                      item.packaging === 'paper' 
                        ? 'bg-eco-100 text-eco-700' 
                        : item.packaging === 'mixed' 
                          ? 'bg-amber-100 text-amber-700' 
                          : 'bg-blue-100 text-blue-700'
                    }`}>
                      {item.packaging.charAt(0).toUpperCase() + item.packaging.slice(1)}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
