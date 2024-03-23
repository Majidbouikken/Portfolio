import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './layout/NavBar';
import Availability from './components/Availability';
import Settings from './components/Settings';
import ForFun from './components/ForFun';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function App() {
  const location = useLocation();

  return (
    <div>
      <NavBar />
      <Availability isAvailable={true} />
      <Settings />
      <ForFun />
      {/* <Outlet /> */}
      <TransitionGroup>
        <CSSTransition key={location.key} classNames="fade" timeout={300}>
          <Outlet />
        </CSSTransition>
      </TransitionGroup>
      <footer></footer>
    </div>
  );
}

export default App;
