import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/Card';
import ListGroupItem from 'react-bootstrap/Card';
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({movie}) => {
    return (
        <div className="card">
 <Card style={{ width: '20rem' }}>
  <Card.Img variant="top" src={movie.img} />
  <Card.Body>
    <Card.Title>{movie.title}</Card.Title>

    
        <StarRatingComponent 
          name="rate1" 
          starCount={5}
          value={movie.rate}
        />
      

    <Card.Text>
      {movie.description}
    </Card.Text>
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{movie.date}</ListGroupItem>
    <ListGroupItem>{movie.duration}</ListGroupItem>
    <ListGroupItem>{movie.genre}</ListGroupItem>
  </ListGroup>
  
</Card>
        </div>
    )
}

export default MovieCard
