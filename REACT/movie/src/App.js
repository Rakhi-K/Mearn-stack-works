
import './App.css';
import Row from './Row'
import requests from './requests';
import API_KEY from './requests' 
import Banner from './Banner';


function App() {
  return (
    <div className="app"> 
    <Banner/>
      <Row isLargeRow={true} title ="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
      <Row title ="ACTION MOVIES" fetchUrl={requests. fetchActionMovies}/>
      <Row title ="COMEDY MOVIES" fetchUrl={requests. fetchComedyMovies}/>
      <Row title ="HORROR MOVIES" fetchUrl={requests.  fetchHorrorMovies}/>
      <Row title ="ROMANCE MOVIES" fetchUrl={requests. fetchRomanceMovies}/>
      <Row title ="DOCUMENTARIES" fetchUrl={requests. fetchDocumentaries}/>
      
    </div>
  );
}

export default App;
