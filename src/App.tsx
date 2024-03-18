import { Outlet } from 'react-router-dom';
import NavBar from './layout/NavBar';
import Availability from './components/Availability';
import Settings from './components/Settings';
import ForFun from './components/ForFun';

function App() {
  if (localStorage.getItem('darkTheme') || window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.classList.add('dark')
  } else {
    document.documentElement.classList.remove('dark')
  }

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
