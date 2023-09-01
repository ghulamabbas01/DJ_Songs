import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLogin from "./pages/HomeLogin";
import Login from "./pages/Login";
import EnterCode from "./pages/EnterCode";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage";
import DjSongs from "./pages/DJSongs";
import ModifyDetails from "./pages/ModifyDetails";
import SongsHome from "./pages/SongsHome";
import RequestSong from "./pages/RequestSong";

const pageComponents = [
  { path: "/", component: <HomeLogin /> },
  { path: "/Login", component: <Login /> },
  { path: "/EnterCode", component: <EnterCode /> },
  { path: "/CreateAccount", component: <CreateAccount /> },
  { path: "/Home", component: <Home /> },
  { path: "/EventPage", component: <EventPage /> },
  { path: "/DjSongs", component: <DjSongs /> },
  { path: "/ModifyDetails", component: <ModifyDetails /> },
  { path: "/SongsHome", component: <SongsHome /> },
  { path: "/RequestSong", component: <RequestSong /> },
];

function App() {
  return (
    <Router>
      <Routes>
        {pageComponents.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </Router>
  );
}

export default App;
