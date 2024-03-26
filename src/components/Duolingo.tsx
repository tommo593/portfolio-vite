import React, { useState, useEffect } from "react";

const Duolingo: React.FC = () => {
  const [dailyCount, setDailyCount] = useState<number>(260);

  useEffect(() => {
    const startingDate = new Date("2024-03-26"); // Set your starting date here
    const currentDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds
    const daysDifference = Math.round(
      Math.abs((currentDate.getTime() - startingDate.getTime()) / oneDay)
    );
    setDailyCount(260 + daysDifference);
  }, []);

  return (
    <div className="max-w-80 bg-feather_green">
        <p>In my spare time, I love to practice Spanish and currently have a {dailyCount} day streak!</p>
    </div>
  );
};

export default Duolingo;