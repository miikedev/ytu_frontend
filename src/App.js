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
import { GroundMovements } from "./pages/GroundMovements";
import { CDMSupport } from "./pages/CDMSupport";
import { IDPSupport } from "./pages/IDPSupport";
import { SpringSupport } from "./pages/SpringSupport";
import { SpringLibrary } from "./pages/SpringLibrary";
import { ReadBlog } from "./pages/ReadBlog";
import { SpringLibraryBlog } from "./pages/SpringLibraryBlog";
import { EducationSupport } from "./pages/EducationSupport";
import { FoodNutrition } from "./pages/FoodNutrition";
import { DonatBTN } from "./components/DonatBTN";
import { FormPage } from "./pages/FormPage";
function App() {
  return (
    <div className="col-12">
      <NavBar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/statements' element={<Statements />}/>
        <Route path='/recent-news' element={<RecentNews />}/>
        <Route path='/ground-movements' element={<GroundMovements />}/>
        <Route path='/cdm' element={<CDMSupport />}/>
        <Route path='/idps' element={<IDPSupport />}/>
        <Route path='/read-blog/:id' element={<ReadBlog />} />
        <Route path='/spring-support' element={<SpringSupport />}/>
        <Route path='/spring-library' element={<SpringLibrary />}/>
        <Route path='/read-spring-library-blog/:id' element={<SpringLibraryBlog />}/>
        <Route path='/education-support' element={<EducationSupport/>}/>
        <Route path='/food-nutrition' element={<FoodNutrition/>}/>
        <Route path='/student-association' element={<StudentAssociation />}/>
        <Route path='/student-club' element={<StudentsClubs />}/>
        <Route path='/other-club' element={<OtherClubs />}/>
        <Route path='/campus-master-plan' element={<CampusMasterPlan />}/>
        <Route path='/autonomy-charter' element={<AutonomyCharter />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/form' element={<FormPage />}/>
      </Routes>
      <DonatBTN />
      <Footer />
    </div>
  );
}

export default App;
