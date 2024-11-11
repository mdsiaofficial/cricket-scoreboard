import React from 'react';
import { Link } from 'react-router-dom';

const NavigationMenu: React.FC = () => {
  return (
    <nav className="bg-blue-500 p-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/matches/1/scoreboard" className="text-white">Match 1 Scoreboard</Link>
        </li>
        <li>
          <Link to="/matches/1/batsmen-bowlers" className="text-white">Match 1 Batsmen & Bowlers</Link>
        </li>
        <li>
          <Link to="/matches/2/scoreboard" className="text-white">Match 2 Scoreboard</Link>
        </li>
        <li>
          <Link to="/matches/2/batsmen-bowlers" className="text-white">Match 2 Batsmen & Bowlers</Link>
        </li>
        <li>
          <Link to="/matches/3/scoreboard" className="text-white">Match 3 Scoreboard</Link>
        </li>
        <li>
          <Link to="/matches/3/batsmen-bowlers" className="text-white">Match 3 Batsmen & Bowlers</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavigationMenu;