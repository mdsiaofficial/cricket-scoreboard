import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchBatsmenBowlers } from '../../features/batsmenBowlersSlice';
import { io } from 'socket.io-client';

interface BatsmenAndBowlersProps {
  matchId: string;
}

const BatsmenAndBowlers: React.FC<BatsmenAndBowlersProps> = ({ matchId }) => {
  const dispatch = useDispatch();
  const batsmenBowlers = useSelector((state: any) => state.batsmenBowlers);

  const [batsmen, setBatsmen] = useState<Batsman[]>([]);
  const [bowlers, setBowlers] = useState<Bowler[]>([]);

  useEffect(() => {
    const fetchBatsmenBowlersData = async () => {
      try {
        const response = await fetch(`/api/matches/${matchId}/batsmen-bowlers`);
        const data = await response.json();
        setBatsmen(data.batsmen);
        setBowlers(data.bowlers);
        dispatch(fetchBatsmenBowlers(data));
      } catch (error) {
        console.error('Error fetching batsmen and bowlers data:', error);
      }
    };

    fetchBatsmenBowlersData();

    const socket = io('http://localhost:5000');

    socket.on('batsmenBowlersUpdated', (data) => {
      setBatsmen(data.batsmen);
      setBowlers(data.bowlers);
      dispatch(fetchBatsmenBowlers(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, matchId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Batsmen and Bowlers</h1>
      <div className="mt-4">
        <h2 className="text-xl font-bold">Batsmen</h2>
        <table className="w-full border-collapse mt-2">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Runs</th>
              <th className="border p-2">Balls</th>
              <th className="border p-2">Fours</th>
              <th className="border p-2">Sixes</th>
              <th className="border p-2">Strike Rate</th>
            </tr>
          </thead>
          <tbody>
            {batsmen.map((batsman) => (
              <tr key={batsman.name}>
                <td className="border p-2">{batsman.name}</td>
                <td className="border p-2">{batsman.runs}</td>
                <td className="border p-2">{batsman.balls}</td>
                <td className="border p-2">{batsman.fours}</td>
                <td className="border p-2">{batsman.sixes}</td>
                <td className="border p-2">{batsman.strikeRate.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>

        <h2 className="text-xl font-bold mt-4">Bowlers</h2>
        <table className="w-full border-collapse mt-2">
          <thead>
            <tr>
              <th className="border p-2">Name</th>
              <th className="border p-2">Overs</th>
              <th className="border p-2">Maidens</th>
              <th className="border p-2">Runs</th>
              <th className="border p-2">Wickets</th>
              <th className="border p-2">Economy Rate</th>
            </tr>
          </thead>
          <tbody>
            {bowlers.map((bowler) => (
              <tr key={bowler.name}>
                <td className="border p-2">{bowler.name}</td>
                <td className="border p-2">{bowler.overs}</td>
                <td className="border p-2">{bowler.maidens}</td>
                <td className="border p-2">{bowler.runs}</td>
                <td className="border p-2">{bowler.wickets}</td>
                <td className="border p-2">{bowler.economyRate.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

interface Batsman {
  name: string;
  runs: number;
  balls: number;
  fours: number;
  sixes: number;
  strikeRate: number;
}

interface Bowler {
  name: string;
  overs: number;
  maidens: number;
  runs: number;
  wickets: number;
  economyRate: number;
}

export default BatsmenAndBowlers;