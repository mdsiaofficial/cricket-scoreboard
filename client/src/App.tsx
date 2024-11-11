import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import NavigationMenu from './components/NavigationMenu';
import Scoreboard from './components/Scoreboard';
import BatsmenAndBowlers from './components/BatsmenBowlers';
import MatchStatus from './components/MatchStatus';

const App: React.FC = () => {
  return (
    <Provider store={store}>
      <Router>
        <div className="App">
          <NavigationMenu />
          <Routes>
            <Route path="/matches/:id" element={<Scoreboard />} />
            <Route path="/matches/:id/batsmen-bowlers" element={<BatsmenAndBowlers />} />
            <Route path="/matches/:id/status" element={<MatchStatus/>} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
};

export default App;