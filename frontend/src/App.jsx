import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Lessons from "./pages/Lessons";
import Quiz from "./pages/Quiz";
import Progress from "./pages/Progress";
import Waiata from "./pages/Waiata";
import Prayers from "./pages/Prayers";
import Navbar from "./Navbar";
import "./App.css";
import TimingHelper from "./pages/TimingHelper";

function AppContent() {
  const location = useLocation();

  return (
    <>
      {location.pathname !== "/" && <Navbar />}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/lessons" element={<Lessons />} />
        <Route path="/quiz" element={<Quiz />} />
        <Route path="/progress" element={<Progress />} />
        <Route path="/waiata" element={<Waiata />} />
        <Route path="/prayers" element={<Prayers />} />
        <Route path="/timing-helper" element={<TimingHelper />} />
      </Routes>
    </>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;