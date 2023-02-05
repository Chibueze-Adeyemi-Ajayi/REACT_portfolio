import './App.css';
import Nav from './components/nav';
import Overview from './components/overview';
import Resume from './components/resume';

function App() {
  return (
    <div className="w-full h-full bg-inherit">
      {/* nav bar */}
      <Nav/>
      {/* overview */}
      <Overview />
      {/* resume */}
      <Resume />
    </div>
  );
}

export default App;
