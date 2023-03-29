import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Components/Home';
import CellLines from './Components/CellLines';
import PSets from './Components/PSets';
import PSetsNameDoi from './Components/PSetsNameDoi';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' exact element={<Home />} />
        <Route path='/celllines' exact element={<CellLines />} />
        <Route path='/psets' exact element={<PSets />} />
        <Route path='/psetsnamedoi' exact element={<PSetsNameDoi />} />
      </Routes>
    </Router>
  );
}

export default App;
