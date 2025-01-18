"use client";

import { useEffect, useState } from "react";

export function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +targetDate - +new Date();

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, [targetDate]);

  return (
    <div className="flex gap-8 justify-center">
      {Object.entries(timeLeft).map(([key, value]) => (
        <div key={key} className="flex flex-col items-center">
          <div className="bg-black/30 backdrop-blur-sm rounded-full w-24 h-24 flex items-center justify-center mb-2">
            <span className="text-4xl font-bold text-white">{value}</span>
          </div>
          <span className="text-white/80 uppercase text-sm tracking-wider">
            {key}
          </span>
        </div>
      ))}
    </div>
  );
}
