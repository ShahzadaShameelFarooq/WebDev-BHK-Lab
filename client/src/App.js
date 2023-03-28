import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CellLines from './Components/CellLines';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/celllines' exact element={<CellLines />} />
      </Routes>
    </Router>
  );
}

export default App;
