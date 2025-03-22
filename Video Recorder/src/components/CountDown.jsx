import React, { useState, useEffect } from "react";

const CountDown = ({ duration }) => {
  const [timeLeft, setTimeLeft] = useState(duration);
  const radius = 50; // Radius of the circle
  const circumference = 2 * Math.PI * radius; // Total circumference of the circle

  useEffect(() => {
    if (timeLeft <= 0) return; // Stop when time reaches zero

    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1);
    }, 1000);

    return () => clearInterval(timer); // Cleanup interval on unmount
  }, [timeLeft]);

  // Calculate stroke-dashoffset for progress effect
  const strokeDashoffset = circumference - (timeLeft / duration) * circumference;

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
      <svg width="120" height="120">
        {/* Background Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="#ddd"
          strokeWidth="8"
          fill="transparent"
        />
        {/* Countdown Progress Circle */}
        <circle
          cx="60"
          cy="60"
          r={radius}
          stroke="blue"
          strokeWidth="8"
          fill="transparent"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform="rotate(-90 60 60)" // Rotates the circle to start from top
        />
        {/* Timer Text */}
        <text x="50%" y="50%" textAnchor="middle" dy=".3em" fontSize="18px" fill="#333">
          {timeLeft}s
        </text>
      </svg>
    </div>
  );
};

export default CountDown;
