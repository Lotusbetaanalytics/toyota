import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Admin from "./screens/Admin";
import Dashboard from "./screens/Dashboard";
import Home from "./screens/Home";
import LocationPage from "./screens/LocationPage";
import UsersScreen from "./screens/Users";
import VideoFolder from "./screens/Videos";
import Blobs from "./screens/Videos/Blobs";
import VideoOffices from "./screens/Videos/Offices";
import PlayVideo from "./screens/Videos/PlayVideo";

function App() {
  return (
    <>
      <Router>
        <Route path="/" exact component={Home} />
        <Route path="/app/dashboard" exact component={Dashboard} />
        <Route path="/app/videos" exact component={VideoFolder} />
        <Route path="/app/videos/:name" exact component={VideoOffices} />
        <Route
          path="/app/videos/:location/:department"
          exact
          component={Blobs}
        />
        <Route
          path="/app/videos/:location/:department/:page?"
          exact
          component={Blobs}
        />
        <Route
          path="/app/play/:location/:department/:url"
          exact
          component={PlayVideo}
        />
        <Route path="/app/admin" exact component={Admin} />
        <Route path="/app/location" exact component={LocationPage} />
        <Route path="/app/users" exact component={UsersScreen} />
      </Router>
    </>
  );
}

export default App;
