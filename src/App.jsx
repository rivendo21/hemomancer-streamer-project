import { Route, Routes, useLocation } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import LeaderBoard from "./components/LeaderBoard";
import PatchNotes from "./components/PatchNotes";
import Footer from "./components/Footer";
import IntroScreen from "./components/IntroScreen";

function App() {
  const location = useLocation();
  const isIntro = location.pathname === "/";
  return (
    <>
      {!isIntro && <Navbar />}
      <Routes>
        <Route path="/" element={<IntroScreen />} />
        <Route path="/home" element={<Homepage />} />
        <Route path="/Leaderboard" element={<LeaderBoard />} />
        <Route path="/PatchNotes" element={<PatchNotes />} />
      </Routes>
      {!isIntro && <Footer />}
    </>
  );
}

export default App;
