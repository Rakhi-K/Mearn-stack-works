
import './App.css';
import Row from './Row'
import requests from './requests';
import API_KEY from './requests' 


function App() {
  return (
    <div className="app"> 
      <Row title ="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title ="ACTION MOVIES" fetchUrl={requests. fetchActionMovies}/>
    </div>
  );
}

export default App;
