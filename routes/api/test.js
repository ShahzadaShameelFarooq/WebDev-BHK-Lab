// Test route to check if the API is running.
// Enter http://localhost:2000/api/test to see if the status: ok JSON object shows up.

const test = (req, res) => {
  res.send({
    status: 'ok'
  });
}

module.exports = {
  test
}