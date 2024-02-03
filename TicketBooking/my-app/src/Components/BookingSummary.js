// BookingSummary.jsx
import React from 'react';

const BookingSummary = ({ selectedSeats, totalPrice }) => {
  return (
    <div>
      <h2>Booking Summary</h2>
      <p>Selected Seats: {selectedSeats.join(', ')}</p>
      <p>Total Price: ${totalPrice}</p>
    </div>
  );
};

export default BookingSummary;
