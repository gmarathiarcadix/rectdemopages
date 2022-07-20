import logo from './logo.svg';
import './App.css';

function App() {

const handleEv = ()=>{
  return fetch('/api/test')
}



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

        <form action="/api/test" method="POST">
        <button type="submit">
      Submit
      </button>

          </form>

          <button onClick={()=>handleEv()}>
             Submit_with_fetch_api_call
      </button>
 
      </header>
    </div>
  );
}

export default App;
