import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomeLogin from "./pages/HomeLogin";
import Login from "./pages/Login";
import EnterCode from "./pages/EnterCode";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import CreateEventPage from "./pages/CreateEventPage";
import SingleEvent from "./pages/SingleEvent";
import ModifyDetails from "./pages/ModifyDetails";
import SingleSong from "./pages/SingleSong";
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
        <Route path="/CreateEvent" element={<CreateEventPage />} />
        <Route path="/Song" element={<SingleSong />} />
        <Route path="/Events/:eventId" element={<SingleEvent />} />
        <Route path="/ModifyDetails" element={<ModifyDetails />} />
        <Route path="RequestSong" element={<RequestSong />} />
        <Route path="SongsHome" element={<SongsHome />} />
      </Routes>
    </Router>
  );
}

export default App;
