// App.jsx
import React, { useState } from 'react';
import MovieList from './Components/MovieList';
import SeatSelector from './Components/SeatSelector';
import BookingSummary from './Components/BookingSummary';
import './App.css'; 
const App = () => {
  const [movies, setMovies] = useState([
    { id: 1, title: 'Movie A', price: 100 },
    { id: 2, title: 'Movie B', price: 200 },
    { id: 3, title: 'Movie C', price: 300 },
  ]);

  // Set the initial selectedMovie to the first movie in the list
  const [selectedMovie, setSelectedMovie] = useState(movies[0]);

  const [selectedSeats, setSelectedSeats] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  const handleSelectMovie = (movie) => {
    setSelectedMovie(movie);
    setSelectedSeats([]);
    setTotalPrice(0);
  };

  const handleSelectSeat = (seat) => {
    const isSeatSelected = selectedSeats.includes(seat);

    if (isSeatSelected) {
      setSelectedSeats(selectedSeats.filter((selectedSeat) => selectedSeat !== seat));
    } else {
      setSelectedSeats([...selectedSeats, seat]);
    }
  };

  const calculateTotalPrice = () => {
    const seatPrice = selectedMovie.price || 10; // Default to 10 if price is not available
    const totalPrice = selectedSeats.length * seatPrice;
    setTotalPrice(totalPrice);
  };

  return (
    <div>
      <div className="container">
        <MovieList
          movies={movies}
          onSelectMovie={handleSelectMovie}
          selectedMovie={selectedMovie}
        />
        {selectedMovie && (
          <>
            <SeatSelector
              selectedSeats={selectedSeats}
              onSelectSeat={handleSelectSeat}
              calculateTotalPrice={calculateTotalPrice}
            />
            <BookingSummary selectedSeats={selectedSeats} totalPrice={totalPrice} />
          </>
        )}
      </div>
    </div>
  );
};

export default App;