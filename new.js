import express from 'express';
import cors from 'cors';
import fetch from 'node-fetch';

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS for all routes
app.use(cors());


// app.get('/getYTProfileData', async (req, res) => {
//   try {
//     const response = await fetch('https://insighter-data.onrender.com/getChannelInfo/UC-TMZYbaUk95pwrfZYGfSog');
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Error fetching data from external API' });
//   }
// });

// // Define a route for proxying the request
// app.get('/getYTPostData', async (req, res) => {
//   try {
//     const response = await fetch('https://insighter-data.onrender.com/getVideos/UC-TMZYbaUk95pwrfZYGfSog/10');
//     const data = await response.json();
//     res.json(data);
//   } catch (error) {
//     console.error('Error fetching data:', error);
//     res.status(500).json({ error: 'Error fetching data from external API' });
//   }
// });

app.get('/getInstaProfileData', async (req, res) => {
  try {
    const response = await fetch('https://insighter-data.onrender.com/');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data from external API' });
  }
});

app.get('/getInstaPostData', async (req, res) => {
  try {
    const response = await fetch('https://insighter-data.onrender.com/all_posts_data');
    const data = await response.json();
    res.json(data);
  } catch (error) {
    console.error('Error fetching data:', error);
    res.status(500).json({ error: 'Error fetching data from external API' });
  }
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
