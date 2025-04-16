import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AnalyzerPage from "./pages/AnalyzerPage";
import PackagingPage from "./pages/PackagingPage";
import TrackerPage from "./pages/TrackerPage";
import ReviewsPage from "./pages/ReviewsPage";
import AlternativesPage from "./pages/AlternativesPage";
import RewardsPage from "./pages/RewardsPage";
import CommunityPage from "./pages/CommunityPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route
            path="/"
            element={
              <Layout>
                <HomePage />
              </Layout>
            }
          />
          <Route
            path="/analyzer"
            element={
              <Layout>
                <AnalyzerPage />
              </Layout>
            }
          />
          <Route
            path="/packaging"
            element={
              <Layout>
                <PackagingPage />
              </Layout>
            }
          />
          <Route
            path="/tracker"
            element={
              <Layout>
                <TrackerPage />
              </Layout>
            }
          />
          <Route
            path="/reviews"
            element={
              <Layout>
                <ReviewsPage />
              </Layout>
            }
          />
          <Route
            path="/alternatives"
            element={
              <Layout>
                <AlternativesPage />
              </Layout>
            }
          />
          <Route
            path="/rewards"
            element={
              <Layout>
                <RewardsPage />
              </Layout>
            }
          />
          <Route
            path="/community"
            element={
              <Layout>
                <CommunityPage />
              </Layout>
            }
          />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
