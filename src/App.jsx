import './App.css';
import Navbar from './Components/Navbar/Navbar'
import Sidebar from './Components/Sidebar/Sidebar';

function App() {
  return (
    <div className="app-container">
    <Sidebar />
    <div className="content-container">
      <Navbar />
      <div className="main-content">
      </div>
    </div>
  </div>
  );
}

export default App;
