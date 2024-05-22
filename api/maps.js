import axios from 'axios';

export default async function (req, res) {
  try {
    const { location, radius, type, apiKey } = req.query;
    const apiUrl = `https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${location}&radius=${radius}&type=${type}&key=${apiKey}`;

    const response = await axios.get(apiUrl);

    // Forward the response back to the client
    res.status(response.status).json(response.data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}