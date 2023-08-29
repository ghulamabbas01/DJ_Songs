import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import All Components 
import HomeLogin from "./pages/HomeLogin";
import Login from "./pages/Login";
import InterCode from "./pages/InterCode";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import CreateNewEvent from "./pages/CreateNewEvent";
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
        <Route path="/InterCode" element={<InterCode />} />
        <Route path="/CreateAccount" element={<CreateAccount />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/CreateNewEvent" element={<CreateNewEvent />} />
        <Route path="/DjSongs" element={<DjSongs />} />
        <Route path="/SongsHome" element={<SongsHome />} />
        <Route path="/ModifyDetails" element={<ModifyDetails />} />
        <Route path="/RequestSong" element={<RequestSong />} />
      </Routes>
    </Router>
  );
}

export default App;
