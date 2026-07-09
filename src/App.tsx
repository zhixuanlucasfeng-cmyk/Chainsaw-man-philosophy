import { Switch, Route, Router as WouterRouter } from "wouter";

import Home from "@/pages/Home";
import Denji from "@/pages/Denji";
import Makima from "@/pages/Makima";
import Power from "@/pages/Power";
import Reze from "@/pages/Reze";
import Aki from "@/pages/Aki";
import Himeno from "@/pages/Himeno";
import Pochita from "@/pages/Pochita";
import Quanxi from "@/pages/Quanxi";
import Asa from "@/pages/Asa";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/denji" component={Denji} />
      <Route path="/makima" component={Makima} />
      <Route path="/power" component={Power} />
      <Route path="/reze" component={Reze} />
      <Route path="/aki" component={Aki} />
      <Route path="/himeno" component={Himeno} />
      <Route path="/pochita" component={Pochita} />
      <Route path="/quanxi" component={Quanxi} />
      <Route path="/asa" component={Asa} />
      <Route path="/:rest*" component={NotFound} />
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
