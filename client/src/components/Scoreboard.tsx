import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { io } from 'socket.io-client';
import { updateScore } from '../features/scoreboardSlice';

interface ScoreboardProps {
  matchId: string;
}

const Scoreboard: React.FC<ScoreboardProps> = ({ matchId }: ScoreboardProps) => {
  const dispatch = useDispatch();
  const scoreboard = useSelector((state: any) => state.scoreboard);

  const [score, setScore] = useState({
    team1: 0,
    team2: 0,
    overs: 0,
    wickets: 0,
    runRate: 0,
    requiredRunRate: 0,
  });

  useEffect(() => {
    const fetchScore = async () => {
      try {
        const response = await fetch(`/api/matches/${matchId}/score`);
        const data = await response.json();
        setScore(data);
        dispatch(updateScore(data));
      } catch (error) {
        console.error('Error fetching score:', error);
      }
    };

    fetchScore();

    const socket = io('http://localhost:5000');

    socket.on('scoreUpdated', (data) => {
      setScore(data);
      dispatch(updateScore(data));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, matchId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Scoreboard</h1>
      <div className="mt-4">
        <p>Team 1 Score: {score.team1}</p>
        <p>Team 2 Score: {score.team2}</p>
        <p>Overs: {score.overs}</p>
        <p>Wickets: {score.wickets}</p>
        <p>Run Rate: {score.runRate.toFixed(2)}</p>
        <p>Required Run Rate: {score.requiredRunRate.toFixed(2)}</p>
      </div>
    </div>
  );
};

export default Scoreboard;