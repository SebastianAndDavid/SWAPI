import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import People from './People';
import PeopleDetail from './PeopleDetail';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<People />} />
        <Route path="detail" element={<PeopleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
