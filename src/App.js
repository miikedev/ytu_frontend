import { Route, Routes, Navigate } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

import Home from "./pages/Home";

import NewsPage from "./pages/NewsPage";
import StatementPage from "./pages/StatementPage";

import StudentsAssociationsPage from "./pages/StudentsAssociationsPage";
import ClubPage from "./pages/ClubPage";
import OtherClubPage from "./pages/OtherClubPage";

export default function App() {
  return (
    <>
      <NavBar />
      <Routes>
        {/* Home  */}
        <Route path="/" element={<Home />} />

        {/* News  */}
        <Route path="/news/recent-news" element={<NewsPage />} />
        <Route path="/news/statements" element={<StatementPage />} />

        {/* Students' Associations  */}
        <Route
          path="/clubs/student-associations"
          element={<StudentsAssociationsPage />}
        />
        <Route path="/clubs/clubs" element={<ClubPage />} />
        <Route path="/clubs/other-clubs" element={<OtherClubPage />} />
        {/* <Navigate to="/home" /> */}
      </Routes>
      <Footer />
    </>
  );
}
