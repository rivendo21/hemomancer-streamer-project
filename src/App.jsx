import { Route, Routes } from "react-router-dom";
import Homepage from "./components/Homepage";
import Navbar from "./components/Navbar";
import LeaderBoard from "./components/LeaderBoard";
import PatchNotes from "./components/PatchNotes";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/Leaderboard" element={<LeaderBoard />} />
        <Route path="/PatchNotes" element={<PatchNotes />} />
      </Routes>
    </>
  );
}

export default App;
