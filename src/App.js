import './App.css';
import Nav from './components/nav';
import Overview from './components/overview';
import Projects from './components/project';
import Resume from './components/resume';
import Skill from './components/skill';

function App() {
  return (
    <div className="w-full h-full bg-inherit">
      {/* nav bar */}
      <Nav/>
      {/* overview */}
      <Overview />
      {/* resume */}
      <Resume />
      {/* Skill set */}
      <Skill />
      {/* projects */}
      <Projects />
    </div>
  );
}

export default App;
