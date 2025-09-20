import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "@/components/ThemeProvider";
import Portfolio from "@/pages/Portfolio";
import NotFound from "@/pages/not-found";

// Import your case study pages
import AlKhidmatCaseStudy from "@/pages/AlKhidmatCaseStudy";
import PanahCaseStudy from "@/pages/PanahCaseStudy";
import IkeaCaseStudy from "@/pages/IkeaCaseStudy";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route path="/case-studies/alkhidmat" component={AlKhidmatCaseStudy} />
      <Route path="/case-studies/panah" component={PanahCaseStudy} />
      <Route path="/case-studies/ikea" component={IkeaCaseStudy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <ThemeProvider>
          <Toaster />
          <Router />
        </ThemeProvider>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
