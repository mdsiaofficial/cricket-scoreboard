import mongoose, { Schema, Document } from 'mongoose';

interface IMatch extends Document {
  team1: string;
  team2: string;
  date: Date;
  score: {
    team1: number;
    team2: number;
  };
  overs: number;
  wickets: number;
  runRate: number;
  requiredRunRate: number;
  status: string;
}

const matchSchema: Schema = new Schema({
  team1: { type: String, required: true },
  team2: { type: String, required: true },
  date: { type: Date, required: true },
  score: {
    team1: { type: Number, default: 0 },
    team2: { type: Number, default: 0 },
  },
  overs: { type: Number, default: 0 },
  wickets: { type: Number, default: 0 },
  runRate: { type: Number, default: 0 },
  requiredRunRate: { type: Number, default: 0 },
  status: { type: String, default: 'Upcoming' },
});

const Match = mongoose.model<IMatch>('Match', matchSchema);

export default Match;