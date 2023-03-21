import logo from './logo.svg';
import Navbar from './components/navbar';
import CloudPanel from './components/CloudPanel';
import ProjectsPanel from './components/ProjectsPanel';
import SkillsPanel from './components/SkillsPanel';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <CloudPanel />
      <ProjectsPanel />
      <SkillsPanel />
      <Footer />
    </div>
  );
}

export default App;
