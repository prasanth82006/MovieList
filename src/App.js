import { Routes, Route } from 'react-router-dom';
import FlickFinder from './component/FlickFinder';
import Movies from './component/Movies';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path="/" element={<FlickFinder />} />
      <Route path="/movies" element={<Movies />} />
    </Routes>
  );
}

export default App;