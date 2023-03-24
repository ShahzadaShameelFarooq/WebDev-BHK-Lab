import { useState, useEffect } from 'react';
import axios from 'axios';

const Home = () => {
  const [data, setData] = useState(null);

  // This code is executed only once when this component is rendered.
  useEffect(() => {
    const getData = async () => {
      // Get request to fetch data from the backend API.
      const res = await axios.get('/api/test');
      setData(res.data);
    }
    getData();
  }, []);

  return(
    <div>
      <h1>Home Page</h1>
      {
        data && <h1>{data.status}</h1>
      }
    </div>
  );

}

export default Home;