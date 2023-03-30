const axios = require('axios');

// Call an external API to fetch cell line data.
const get = async (req, res) => {
  let data = null;
  const url = process.env.PSETS_API_ENDPOINT;
  try{
    // Call the API using axios library.
    const res = await axios.get(url);
    data = res.data;
  }catch(e){
    res.status(500);
  }finally{
    res.send(data);
  }
} 

module.exports = {
  get
}