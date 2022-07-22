import logo from './logo.svg';
import './App.css';

let name = "Tanuja"; //global variable 
function App() { //function based component and the code inside it is JSX (javascript and html)
  return (
    //below <> is the JSX fragment 
    /*using that global variable with hello */
    <> 
    <h1> Hello {name} </h1> 
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
          Learn React with Tanu
        </a>
      </header>
    </div>
    
    </>
  );
}

export default App;
