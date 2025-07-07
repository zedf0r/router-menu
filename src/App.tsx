import { Route, Routes } from "react-router-dom";
import { Layout } from "./components/Layout";
import { DriftPage, TimeAttackPage, ForzaPage, HomePage } from "./pages";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/drift" element={<DriftPage />} />
        <Route path="/timeattack" element={<TimeAttackPage />} />
        <Route path="/forza" element={<ForzaPage />} />
      </Route>
    </Routes>
  );
}

export default App;
