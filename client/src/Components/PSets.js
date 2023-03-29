import { useState, useEffect } from 'react';
import axios from 'axios';

const PSets = () => {

    const [name, setNames] = useState(null)


    // This code is executed only once when this component is rendered.
  useEffect(() => {
    const getData = async () => {
      // Get request to fetch data from the backend API.
      const res = await axios.get('/api/psets');
      // View the response data content using Chrome's development tool.
      console.log(res.data);
      // Get the list of cell lines from the response data.
      setNames(res.data);
    }
    getData();
  }, []);

  return(
    <div style={{backgroundColor: 'skyblue'}}>

        <div style={{backgroundColor: 'beige'}}>

        {/*Adding a navigation bar and links */}

        <a href='http://localhost:3000/'>Home </a>
        <a href='http://localhost:3000/celllines'>CellLines </a>
        <a href='http://localhost:3000/psets'>PSets </a>
        <a href='http://localhost:3000/psetsnamedoi'>PSetsNameDoi</a>

      </div>
      <h1 style={{backgroundColor: 'lightgreen'}}>List of names</h1>
      {/* If the name object is not null, then display the list of names. */}
      {
        name && 
        <ul style={{backgroundColor: 'lightgreen'}}>
          {
            name.map((name) => (
              <li key={name.name}>{name.name}</li>
            ))
          }
        </ul>
      }
    </div>
  );

}

export default PSets;