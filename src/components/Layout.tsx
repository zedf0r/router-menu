import { Route, Routes } from "react-router-dom";
import { Menu } from "./Menu";
import { HomePage, DriftPage, TimeAttackPage, ForzaPage } from "./pages/routes";

export const Layout = () => {
  return (
    <>
      <Menu />
      <div className="page">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/drift" element={<DriftPage />} />
          <Route path="/timeattack" element={<TimeAttackPage />} />
          <Route path="/forza" element={<ForzaPage />} />
        </Routes>
      </div>
    </>
  );
};
