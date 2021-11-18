import React from 'react';
import { useState } from 'react';
import AddMovie from './AddMovie';
import MovieCard from './MovieCard';


const MovieList = ({ movies , addMovie}) => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    return (
        <div className="all">
            
            {movies.map((el,i)=>(

                <MovieCard movie={el} key={i}  />
            ))}
           
           <div>
               
             <h3 onClick={handleShow}>Add Movie</h3>
            <AddMovie handleClose={handleClose} show={show} addMovie={addMovie} />
            
            </div>
           
        </div>
    );
};

export default MovieList;

