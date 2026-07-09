import { Switch, Route, Router as WouterRouter } from "wouter";

import Home from "@/pages/Home";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
    </Switch>
  );
}

function App() {
  return (
    <WouterRouter base={""}>
      <Router />
    </WouterRouter>
  );
}

export default App;
