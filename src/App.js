import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./Components/navbar/Navbar";
import Match from "./Components/match/Match";
import PointsTable from "./Components/pointstable/PointsTable";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/match/:matchId" element={<Match />} />
          <Route
            path="/match/pointstable/:seriesId"
            element={<PointsTable />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
