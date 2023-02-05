import './App.css';
import Nav from './components/nav';
import Overview from './components/overview';

function App() {
  return (
    <div className="w-full h-full bg-inherit">
      {/* nav bar */}
      <Nav/>
      {/* overview */}
      <Overview />
    </div>
  );
}

export default App;
