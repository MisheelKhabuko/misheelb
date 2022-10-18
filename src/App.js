import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Projects from './Pages/Projects';
import Experience from './Pages/Experience';

function App() {
  return (
    <div className="App">
        <Router>
            <Routes>
                <Route path="/misheelb" element={<Home />} />
                <Route path="/misheelb/projects" element={<Projects />} />
                <Route path="/misheelb/experience" element={<Experience />} />
            </Routes>
        </Router>
    </div>
  );
}

export default App;
