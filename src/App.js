import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import All Components 
import HomeLogin from "./pages/HomeLogin";
import Login from "./pages/Login";
import InterCode from "./pages/InterCode";
import CreateAccount from "./pages/CreateAccount";
import Home from "./pages/Home";
import CreateNewEvent from "./pages/CreateNewEvent";

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
      </Routes>
    </Router>
  );
}

export default App;
