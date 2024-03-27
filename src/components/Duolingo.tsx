import React, { useState, useEffect } from "react";

const Duolingo: React.FC = () => {
  const [dailyCount, setDailyCount] = useState<number>(260);

  useEffect(() => {
    const startingDate = new Date("2024-03-26");
    const currentDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const daysDifference = Math.round(
      Math.abs((currentDate.getTime() - startingDate.getTime()) / oneDay)
    );
    setDailyCount(260 + daysDifference);
  }, []);

  return (
    <div className="max-w-80 m-auto flex flex-row">
        <p className="max-h-28 bg-mask_green shadow-md p-2 rounded-md">In my spare time, I love to practice Spanish and currently have a {dailyCount} day streak on Duolingo!</p>
        <img src="./duo.svg" className="max-h-20"/>
    </div>
  );
};

export default Duolingo;