// src/Clock.js
import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import './Clock.css';

const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const secondDeg = time.getSeconds() * 6;
  const minuteDeg = time.getMinutes() * 6 + time.getSeconds() * 0.1;
  const hourDeg = (time.getHours() % 12) * 30 + time.getMinutes() * 0.5;

  const numbers = Array.from({ length: 12 }, (_, i) => i + 1);

  return (
    <Container className="d-flex justify-content-center align-items-center clock-container">
      <div className="clock">
      
        <div className="hand hour" style={{ transform: `rotate(${hourDeg}deg)` }}></div>
        <div className="hand minute" style={{ transform: `rotate(${minuteDeg}deg)` }}></div>
        <div className="hand second" style={{ transform: `rotate(${secondDeg}deg)` }}></div>
        <div className="center"></div>
      </div>
    </Container>
  );
};

export default Clock;
