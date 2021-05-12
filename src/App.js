import './App.css';
import LeftSidebar from './Components/LeftSidebar';
import Main from './Components/Main';
import Navbar from './Components/Navbar';
import RightSidebar from './Components/RightSidebar';

function App() {
  return (
    <div>
      <LeftSidebar />
      <Navbar />
      <RightSidebar />
      <Main />
    </div>
  );
}

export default App;
