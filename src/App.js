import logo from './logo.svg';
import './App.css';
import Attributes from "./components/attributes";
import CreateAttribute from "./components/create-attribute";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
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
      </header>
      <Attributes />
      <CreateAttribute />
    </div>
  );
}

export default App;
