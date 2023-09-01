import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLogin from "./pages/HomeLogin";
import Login from "./pages/Login";
import EnterCode from "./pages/EnterCode"; // Renamed from InterCode
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import EventPage from "./pages/EventPage"; // Renamed from CreateNewEvent
import DjSongs from "./pages/DJSongs";
import ModifyDetails from "./pages/ModifyDetails";
import SongsHome from "./pages/SongsHome";
import RequestSong from "./pages/RequestSong";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeLogin />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/EnterCode" element={<EnterCode />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/EventPage" element={<EventPage />} />
        <Route path="/DjSongs" element={<DjSongs />} />
        <Route path="/SongsHome" element={<SongsHome />} />
        <Route path="/ModifyDetails" element={<ModifyDetails />} />
        <Route path="/Event/:eventId/RequestSong" element={<RequestSong />} />
      </Routes>
    </Router>
  );
}

export default App;
