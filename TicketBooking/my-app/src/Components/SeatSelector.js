// SeatSelector.jsx
import React, { useEffect } from 'react';

const SeatSelector = ({ selectedSeats, occupiedSeats, onSelectSeat, calculateTotalPrice }) => {
  useEffect(() => {
    calculateTotalPrice();
  }, [selectedSeats, calculateTotalPrice]);

  const totalRows = 6;
  const seatsPerRow = 10;

  const getSeatStatus = (seatNumber) => {
    if (selectedSeats && selectedSeats.includes(seatNumber)) {
      return 'selected';
    } else if (occupiedSeats && occupiedSeats.includes(seatNumber)) {
      return 'occupied';
    } else {
      return 'available';
    }
  };
  
  return (
    <div>
      <h2>Select Your Seats</h2>
      <p>Total Seats: {totalRows * seatsPerRow}</p>
      <div className="seat-container">
        {[...Array(totalRows)].map((_, rowIndex) => (
          <div key={rowIndex} className="seat-row">
            {[...Array(seatsPerRow)].map((_, seatIndex) => {
              const seatNumber = rowIndex * seatsPerRow + seatIndex + 1;
              const seatStatus = getSeatStatus(seatNumber);

              return (
                <div
                  key={seatNumber}
                  className={`seat ${seatStatus}`}
                  onClick={() => onSelectSeat(seatNumber)}
                >
                  {seatStatus === 'occupied' ? 'Occupied' : seatNumber}
                </div>
              );
            })}
          </div>
        ))}
      </div>
    </div>
  );
};

export default SeatSelector;
