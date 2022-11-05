import React, { useEffect } from "react";

interface TimerProps {
  time: number;
  setTime: React.Dispatch<React.SetStateAction<number>>;
  onEnd: () => any;
}

export default function Timer({ onEnd, time, setTime }: TimerProps) {
  useEffect(() => {
    if (time > 0)
      setInterval(() => {
        setTime(time - 1);
      }, 1000);
    else onEnd();
  }, [time, setTime, onEnd]);

  return (
    <div className="bg-blue-400 rounded-lg py-2">
      You have {time} seconds left
    </div>
  );
}
