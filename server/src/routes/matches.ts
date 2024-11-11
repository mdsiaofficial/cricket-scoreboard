import express from 'express';
import Match from '../models/Match';

const router = express.Router();

// Get all matches
router.get('/', async (req, res) => {
  try {
    const matches = await Match.find();
    res.json(matches);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get a specific match
router.get('/:id', async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) return res.status(404).json({ message: 'Match not found' });
    res.json(match);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Create a new match
router.post('/', async (req, res) => {
  const { team1, team2, date } = req.body;
  const match = new Match({ team1, team2, date });
  try {
    const newMatch = await match.save();
    res.status(201).json(newMatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Update a match
router.put('/:id', async (req, res) => {
  try {
    const { team1, team2, date, score, overs, wickets, runRate, requiredRunRate, status } = req.body;
    const updatedMatch = await Match.findByIdAndUpdate(
      req.params.id,
      { team1, team2, date, score, overs, wickets, runRate, requiredRunRate, status },
      { new: true }
    );
    if (!updatedMatch) return res.status(404).json({ message: 'Match not found' });
    res.json(updatedMatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete a match
router.delete('/:id', async (req, res) => {
  try {
    const deletedMatch = await Match.findByIdAndDelete(req.params.id);
    if (!deletedMatch) return res.status(404).json({ message: 'Match not found' });
    res.json({ message: 'Match deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get the current score of a match
router.get('/:id/score', async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) return res.status(404).json({ message: 'Match not found' });
    res.json(match.score);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update the score of a match
router.post('/:id/score', async (req, res) => {
  try {
    const { score, overs, wickets, runRate, requiredRunRate } = req.body;
    const updatedMatch = await Match.findByIdAndUpdate(
      req.params.id,
      { score, overs, wickets, runRate, requiredRunRate },
      { new: true }
    );
    if (!updatedMatch) return res.status(404).json({ message: 'Match not found' });
    res.json(updatedMatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Get the current status of a match
router.get('/:id/status', async (req, res) => {
  try {
    const match = await Match.findById(req.params.id);
    if (!match) return res.status(404).json({ message: 'Match not found' });
    res.json({ status: match.status });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Update the status of a match
router.post('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const updatedMatch = await Match.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!updatedMatch) return res.status(404).json({ message: 'Match not found' });
    res.json(updatedMatch);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

export default router;