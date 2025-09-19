import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import CenteringTools from "@/pages/CenteringTools";
import SHECollection from "@/pages/SHECollection";
import BreakthroughExperience from "@/pages/BreakthroughExperience";
import PublicSpeakingEngagements from "@/pages/PublicSpeakingEngagements";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/tools" component={CenteringTools} />
      <Route path="/she-collection" component={SHECollection} />
      <Route path="/breakthrough-experience" component={BreakthroughExperience} />
      <Route path="/speaking-engagements" component={PublicSpeakingEngagements} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
