import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchMatchStatus } from '../../features/matchStatusSlice';
import { io } from 'socket.io-client';

interface MatchStatusProps {
  matchId: string;
}

const MatchStatus: React.FC<MatchStatusProps> = ({ matchId }) => {
  const dispatch = useDispatch();
  const matchStatus = useSelector((state: any) => state.matchStatus);

  const [status, setStatus] = useState<string>('Upcoming');

  useEffect(() => {
    const fetchMatchStatusData = async () => {
      try {
        const response = await fetch(`/api/matches/${matchId}/status`);
        const data = await response.json();
        setStatus(data.status);
        dispatch(fetchMatchStatus(data.status));
      } catch (error) {
        console.error('Error fetching match status:', error);
      }
    };

    fetchMatchStatusData();

    const socket = io('http://localhost:5000');

    socket.on('matchStatusUpdated', (data) => {
      setStatus(data.status);
      dispatch(fetchMatchStatus(data.status));
    });

    return () => {
      socket.disconnect();
    };
  }, [dispatch, matchId]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Match Status</h1>
      <div className="mt-4">
        <p>Status: {status}</p>
      </div>
    </div>
  );
};

export default MatchStatus;