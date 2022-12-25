import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";
import { Home } from "./pages/Home";
import {Routes, Route} from 'react-router-dom'
import { RecentNews } from "./pages/RecentNews";
import { Statements } from "./pages/Statements";
import { StudentAssociation } from "./pages/StudentAssociation";
import { StudentsClubs } from "./pages/StudentsClubs";
import { OtherClubs } from "./pages/OtherClubs";
import { About } from "./pages/About";
import { CampusMasterPlan } from "./pages/CampusMasterPlan";
import { AutonomyCharter } from "./pages/AutonomyCharter";
function App() {
  return (
    <div className="col-12">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/statements' element={<Statements />}/>
        <Route path='/recent-news' element={<RecentNews />}/>
        <Route path='/student-association' element={<StudentAssociation />}/>
        <Route path='/student-club' element={<StudentsClubs />}/>
        <Route path='/other-club' element={<OtherClubs />}/>
        <Route path='/campus-master-plan' element={<CampusMasterPlan />}/>
        <Route path='/autonomy-charter' element={<AutonomyCharter />}/>
        <Route path='/about' element={<About />}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
