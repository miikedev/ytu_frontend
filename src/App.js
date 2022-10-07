import { Route, Routes } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import NewsPage from "./pages/NewsPage";
import StatementPage from "./pages/StatementPage";

import StudentsAssociationsPage from "./pages/StudentsAssociationsPage";
import ClubPage from "./pages/ClubPage";
import OtherClubPage from "./pages/OtherClubPage";

import GroundMovementsPage from "./pages/GroundMovementsPage";
import CDMPage from "./pages/CDMPage";

export default function App() {
  const publicURL = process.env.PUBLIC_URL;
  return (
    <>
      <NavBar />
      <Routes>
        {/* Home  */}
        <Route path={`/${publicURL}`} element={<Home />} />

        {/* News  */}
        <Route path={`${publicURL}/news/recent-news`} element={<NewsPage />} />
        <Route
          path={`${publicURL}/news/statements`}
          element={<StatementPage />}
        />

        {/* Students' Associations  */}
        <Route
          path={`${publicURL}/clubs/student-associations`}
          element={<StudentsAssociationsPage />}
        />
        <Route path={`${publicURL}/clubs/clubs`} element={<ClubPage />} />
        <Route
          path={`${publicURL}/clubs/other-clubs`}
          element={<OtherClubPage />}
        />

        {/* Spring Revolution */}
        <Route
          path={`${publicURL}/spring/strikes`}
          element={<GroundMovementsPage />}
        />
        <Route path={`${publicURL}/spring/cdm`} element={<CDMPage />} />
      </Routes>
      <Footer />
    </>
  );
}
