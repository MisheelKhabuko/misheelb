import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import ProjectDisplay from './Pages/ProjectDisplay';

function App() {
  return (
    <div className="App">
        <Router>
            <Navbar />
            <Routes>
                <Route path="/misheelb" element={<Home />} />
                <Route path="/misheelb/projects" element={<Projects />} />
                <Route path="/misheelb/projects/:id" element={<ProjectDisplay />} />
                <Route path="/misheelb/experience" element={<Experience />} />
            </Routes>
            <Footer />
        </Router>
    </div>
  );
}

export default App;
