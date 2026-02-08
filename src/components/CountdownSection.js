import { useState, useEffect } from "react";
import "./CountdownSection.css";

function CountdownSection() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    // drop date is 12pm 27 feb GMT
    const dropDate = new Date("2026-02-27T12:00:00Z");
    const calculateTimeLeft = () => {
      const now = new Date();
      const timeDiff = dropDate - now;

      if (timeDiff > 0) {
        setTimeLeft({
          days: Math.floor(timeDiff / (1000 * 60 * 60 * 24)),
          hours: Math.floor((timeDiff / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((timeDiff / (1000 * 60)) % 60),
          seconds: Math.floor((timeDiff / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="countdown-section" data-logo-color="cream">
      <h2 className="countdown-title">Early Bird Tickets</h2>
      <div className="countdown-timer">
        <p className="countdown-subtitle">will drop in...</p>
        <div className="timer">
          <div className="time-segment">
            <span className="number">
              {String(timeLeft.days).padStart(2, "0")}
            </span>
            <span className="label">Days</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-segment">
            <span className="number">
              {String(timeLeft.hours).padStart(2, "0")}
            </span>
            <span className="label">Hours</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-segment">
            <span className="number">
              {String(timeLeft.minutes).padStart(2, "0")}
            </span>
            <span className="label">Minutes</span>
          </div>
          <div className="time-separator">:</div>
          <div className="time-segment">
            <span className="number">
              {String(timeLeft.seconds).padStart(2, "0")}
            </span>
            <span className="label">Seconds</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CountdownSection;
