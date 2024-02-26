import ThreeJsTest from './ThreeJsTest';
import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header bg-amber-500">
        <img src={logo} className="h-32 w-32" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <ThreeJsTest />
      </header>
    </div>
  );
}

export default App;
