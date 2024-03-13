import { Outlet } from 'react-router-dom';
import NavBar from './layout/NavBar';
import Availability from './components/Availability';
import Settings from './components/Settings';
import ForFun from './components/ForFun';

function App() {
  return (
    <div>
      <NavBar />
      <Availability isAvailable={true} />
      <Settings />
      <ForFun />
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default App;
