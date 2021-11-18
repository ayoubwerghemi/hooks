
import './App.css';
import { useState } from 'react';
import MovieList from './MovieList';
import Filter from './Filter';


function App() {
  const [movies, setMovies] = useState([


{

  title : "life",
  duration : "01:43:58",
  date : "2017",
  rate : "4",
  genre : "Horror / Sci-Fi",
  description : "The film tells the story of the six-member crew of the International Space Station, who are on the brink of one of the most important discoveries in human history, the first evidence of extraterrestrial life on Mars. Smarter than anyone expected.",
  img : "https://i.egycdn.com/pic/WmFwZndlY3ZjdmNtVGJtdm1FRWNtWUlQY05iY2t3UA.jpg",

},

{
  title : "logan",
  duration : "02:17:24",
  date : "2017",
  rate : "3",
  genre : "action / Sci-Fi",
  description : "Logan and Professor Charles Xavier must deal with the losses Nathaniel Essex has caused by destroying the world and leaving him in ruins. Logan must confront and defeat Nathaniel Essex with the help of a young girl named Laura Kenny, a female clone. From Wolverine.",
  img : "https://i.egycdn.com/pic/WmFwZndlY21Udm1wcEV2Y212RWN3VEVtTE5qbW1tbUs.jpg",


},


{
  title : "split",
  duration : "01:57:08",
  date : "2017",
  rate : "5",
  genre : "Horror / Thriller",
  description : "Kevin, a man with at least twenty-three different personalities inside of him, kidnaps three teenage girls, and while they're being held captive, his last character (The Beast) begins to break free in order to control and take over the rest of the characters in Kevin's possession, as they all wrestle with each other. The inner characters among themselves about the fate of the three girls.",
  img : "https://i.egycdn.com/pic/WmFwZndlY21qbWJtcFRwdkVjbWpsYWxtYnZ3YXg.jpg",


},







  ]);


  const [keyword,setkeyword] = useState ("");
  const [newRate,setnewRate] = useState (1);
  const search = (Text) => {
    setkeyword(Text);

  
  };

  const setRate = (rate) => {

    setnewRate (rate);
  };

  const addMovie =(movie) => {

    setMovies(movies.concat(movie));
  };
  return (
    <div className="App">
      <Filter search={search} setRate={setRate} newRate={newRate}/>
      <MovieList
      
      addMovie={addMovie}
      movies={movies.filter((movie) =>
       movie.rate >= newRate &&
       movie.title.toLowerCase().includes(keyword.toLowerCase().trim())

      )} 
      
      />
    </div>
  );
}

export default App;

// title duration date rate genre description img
