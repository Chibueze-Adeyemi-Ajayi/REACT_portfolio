import './App.css';
import Contact from './components/contact';
import Footer from './components/footer';
import Nav from './components/nav';
import Overview from './components/overview';
import Projects from './components/project';
import Resume from './components/resume';
import SideBar from './components/side-bar';
import Skill from './components/skill';

// my p

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
      {/* contact */}
      <Contact />   
      {/* footer */}
      <Footer />
      {/* side bar */}
      <SideBar />
    </div>
  );
}

export default App;
