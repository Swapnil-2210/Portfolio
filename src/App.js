
import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavigationPanel from './Component/NavigationPanel';
import HomePage from './Component/HomePage';
import AboutPage from './Component/AboutPage';
import ExperiecncePage from './Component/ExperiencePage';
import ProjectPage from './Component/ProjectPage';
import ContactPage from './Component/ContactPage';

function App() {
  return (
    <div className="App">
      <NavigationPanel/>
        <Routes>
          <Route path='/' element={<HomePage/>}></Route>
          <Route path='/Home' element={<HomePage/>}></Route>
          <Route path='/AboutMe' element={<AboutPage/>}></Route>
          <Route path='/Experience' element={<ExperiecncePage/>}></Route>
          <Route path='/Project' element={<ProjectPage/>}></Route>
          <Route path='/Contact' element={<ContactPage/>}></Route>
        </Routes>

    </div>
  );
}

export default App;
