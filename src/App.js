/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/react-in-jsx-scope */
// eslint-disable-next-line no-unused-vars
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import LandingPage from "pages/LandingPage";
import ProjectPage from "pages/ProjectPage";
import ProjectDetailPage from "pages/ProjectDetailPage";
import TeamPage from "pages/TeamPage";
import NotFoundPage from "pages/NotFoundPage";
import DiscussProject from "./pages/DiscussProjectPage";

import "assets/css/styles.css";
import Career from "./pages/Career";

function App() {
  return (
    <Switch>
      <Route exact path="/" component={LandingPage} />
      <Route exact path="/project" component={ProjectPage} />
      <Route exact path="/project/:id" component={ProjectDetailPage} />
      <Route exact path="/team" component={TeamPage} />
      <Route exact path="/career" component={Career} />
      <Route exact path="/discuss-project" component={DiscussProject} />
      <Route path="" component={NotFoundPage} />
    </Switch>
  );
}

export default App;
