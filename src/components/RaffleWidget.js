import React, { useState, useEffect } from 'react';

function RaffleWidget({ userId }) {
  const [tickets, setTickets] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      const mockTickets = 1;
      setTickets(mockTickets);
      setLoading(false);
    }, 1000);
  }, [userId]);

  const handleJoin = () => {
    setTimeout(() => {
      const newTickets = 1;
      setTickets(newTickets);
      setMessage(`✅ You have ${newTickets} ticket(s)`);
    }, 1000);
  };

  if (loading) return <p>Loading raffle info...</p>;

  return (
    <div>
      {tickets === 0 ? (
        <button onClick={handleJoin}>🎟️ Join the Raffle</button>
      ) : (
        <p>{message || `✅ You have ${tickets} ticket(s)`}</p>
      )}
    </div>
  );
}

export default RaffleWidget;
