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
import Angel from "@/pages/Angel";
import Beam from "@/pages/Beam";
import SantaClaus from "@/pages/SantaClaus";
import GunDevil from "@/pages/GunDevil";
import DarknessDevil from "@/pages/DarknessDevil";
import Future from "@/pages/Future";
import Ghost from "@/pages/Ghost";
import Hell from "@/pages/Hell";
import Typhoon from "@/pages/Typhoon";
import Justice from "@/pages/Justice";
import Spider from "@/pages/Spider";
import Yoru from "@/pages/Yoru";
import NotFound from "@/pages/not-found";
import Yoshida from "@/pages/Yoshida";
import Kishibe from "@/pages/Kishibe";
import Kobeni from "@/pages/Kobeni";
import Nayuta from "@/pages/Nayuta";
import Violence from "@/pages/Violence";
import Eternity from "@/pages/Eternity";
import Bat from "@/pages/Bat";
import Snake from "@/pages/Snake";
import Octopus from "@/pages/Octopus";

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
      <Route path="/angel" component={Angel} />
      <Route path="/beam" component={Beam} />
      <Route path="/santa-claus" component={SantaClaus} />
      <Route path="/gun-devil" component={GunDevil} />
      <Route path="/darkness-devil" component={DarknessDevil} />
      <Route path="/justice" component={Justice} />
      <Route path="/spider" component={Spider} />
      <Route path="/yoru" component={Yoru} />
      <Route path="/future" component={Future} />
      <Route path="/ghost" component={Ghost} />
      <Route path="/hell" component={Hell} />
      <Route path="/typhoon" component={Typhoon} />
      <Route path="/octopus" component={Octopus} />
      <Route path="/yoshida" component={Yoshida} />
      <Route path="/kishibe" component={Kishibe} />
      <Route path="/kobeni" component={Kobeni} />
      <Route path="/nayuta" component={Nayuta} />
      <Route path="/violence" component={Violence} />
      <Route path="/eternity" component={Eternity} />
      <Route path="/bat-devil" component={Bat} />
      <Route path="/snake" component={Snake} />
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
