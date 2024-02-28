import { Outlet } from 'react-router-dom';
import NavBar from './layout/NavBar';
import Availability from './components/Availability';
import Settings from './components/Settings';

function App() {
  return (
    <div>
      <NavBar />
      <Availability isAvailable={true} />
      <Settings />
      <Outlet />
      <footer></footer>
    </div>
  );
}

export default App;
