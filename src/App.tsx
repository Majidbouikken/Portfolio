import { Outlet, useLocation } from 'react-router-dom';
import NavBar from './layout/NavBar';
import Availability from './components/Availability';
import Settings from './components/Settings';
import ForFun from './components/ForFun';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import { useTranslation } from 'react-i18next';

function App() {
  const location = useLocation();
  const { i18n } = useTranslation();
  document.body.dir = i18n.dir();

  return (
    <div>
      <NavBar />
      <Availability isAvailable={true} />
      <Settings />
      {/* <ForFun /> */}
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
