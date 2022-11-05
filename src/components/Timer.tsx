import React, { useEffect } from "react";

interface TimerProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  onEnd: () => any;
}

export default function Timer({ onEnd, time, setTime }: TimerProps) {
  useEffect(() => {
    // reduces time by 1 every second and triggers an action when time is 0
    if (time > 0) {
      const interval = setInterval(() => {
        setTime(time - 1);
      }, 1000);

      return () => clearInterval(interval);
    } else onEnd();
  }, [time, setTime, onEnd]);

  return (
    <div className="bg-blue-400 rounded-lg py-2">
      You have {time} seconds left
    </div>
  );
}
