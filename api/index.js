import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import { RESPONSE } from './test/testData.mjs';

const app = express();
const port = 9000;

configDotenv();

const OMDB_API_KEY = process.env.OMDB_API_KEY;

// added to handle cors error
app.use(cors());
// added to parse request params as json
app.use(express.json());

app.get('/', (req, res) => {
    res.send("All working fine");
});

app.post('/api/search', async (req, res) => {
    const requestBody = req.body;
    let response = {}
    let queryParams = `s=${requestBody.searchTerm}&apikey=${OMDB_API_KEY}`;
    if (requestBody.searchType) queryParams = `${queryParams}&type${requestBody.searchType}`
    try {
        // Example error response from ODMB - {"Response":"False","Error":"Invalid API key!"} - Error
        let uri = encodeURI(`http://www.omdbapi.com/?${queryParams}`)
        response = await fetch(uri);
        response = await response.json();
        response = RESPONSE;
    } catch (ex) {
        response.error = true
    }
    res.json({
        response
    });
});

app.listen(port, () => {
    console.info(`Express app listening on port ${port}`);
})
