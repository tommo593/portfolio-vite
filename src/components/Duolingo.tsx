import React, { useState, useEffect } from 'react';

const Duolingo: React.FC = () => {
  const [dailyCount, setDailyCount] = useState<number>(260);

  useEffect(() => {
    const startingDate = new Date('2024-03-26');
    const currentDate = new Date();
    const oneDay = 24 * 60 * 60 * 1000;
    const daysDifference = Math.round(Math.abs((currentDate.getTime() - startingDate.getTime()) / oneDay));
    setDailyCount(260 + daysDifference);
  }, []);

  return (
    <div className="m-auto flex max-w-80 flex-row pt-12">
      <p className="max-h-28 rounded-md border-transparent bg-gradient-to-b from-feather-green to-mask-green p-2 tracking-tight">
        In my spare time, I love to practice Spanish and currently have a {dailyCount} day streak on Duolingo!
      </p>
      <img src="./duo.svg" className="mt-8 max-h-20 object-bottom transition duration-500 hover:rotate-6" />
    </div>
  );
};

export default Duolingo;
