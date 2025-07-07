import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Menu } from "./components/routes/MenuRoute";
import { HomePage } from "./components/routes/HomePageRoute";
import { DriftPage } from "./components/routes/DriftPageRoute";
import { TimeAttackPage } from "./components/routes/TimeAttackPageRoute";
import { ForzaPage } from "./components/routes/ForzaPageRoute";

function App() {
  return (
    <>
      <Router>
        <div>
          <Menu />
          <div className="page">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/drift" element={<DriftPage />} />
              <Route path="/timeattack" element={<TimeAttackPage />} />
              <Route path="/forza" element={<ForzaPage />} />
            </Routes>
          </div>
        </div>
      </Router>
    </>
  );
}

export default App;
