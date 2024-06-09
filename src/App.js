// import logo from './logo.svg';
import './App.css';
import { MovieList } from './Components/MovieDashboard';
import { MovieDetail } from './Components/MovieDashboard';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      {/* </header> */}
      {/* <MovieDetail/> */}
      <div className='main-movie-container'>
        <MovieList/>
      </div>
    </div>
  );
}

export default App;
