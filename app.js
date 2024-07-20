const express = require('express');
const axios = require('axios');

const app = express();
const port = process.env.PORT || 3015;

app.use(express.json());

app.get('/covid-data/:state', async (req, res) => {
  try {
    const { state } = req.params;
    
    if (!state || state.length !== 2) {
      return res.status(400).json({ error: 'Se requiere un código de estado válido de dos letras' });
    }

    const url = `https://api.covidtracking.com/v1/states/${state.toLowerCase()}/current.json`;

    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Error al obtener datos de COVID-19' });
  }
});

app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});