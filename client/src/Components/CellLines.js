import { useState, useEffect } from 'react';
import axios from 'axios';

const CellLines = () => {
  const [cells, setCells] = useState(null);

  // This code is executed only once when this component is rendered.
  useEffect(() => {
    const getData = async () => {
      // Get request to fetch data from the backend API.
      const res = await axios.get('/api/celllines');
      // View the response data content using Chrome's development tool.
      console.log(res.data);
      // Get the list of cell lines from the response data.
      setCells(res.data.Cellosaurus['cell-line-list'][0]['str-list'][1]);
    }
    getData();
  }, []);

  return(
    <div style={{backgroundColor: 'lightblue'}}>
      <div style={{backgroundColor: 'beige'}}>

        {/*Adding a navigation bar and links */}
        <a href='http://localhost:3000/'>Home </a>
        <a href='http://localhost:3000/celllines'>CellLines </a>
        <a href='http://localhost:3000/psets'>PSets </a>
        <a href='http://localhost:3000/psetsnamedoi'>PSetsNameDoi</a>

      </div>
      <h1 style={{backgroundColor: 'lightgreen'}}>List of Cell Lines</h1>
      {/* If the cells state object is not null, then display the list of cell ids. */}
      {
        cells && 
        <ul style={{backgroundColor: 'lightgreen'}}>
          {
            cells.map((cell) => (
              <li key={cell.id}>{cell.id}</li>
            ))
          }
        </ul>
      }
    </div>
  );

}

export default CellLines;