import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { configDotenv } from 'dotenv';
import { OMDB_TYPES } from './omdbConstants.mjs';

const app = express();
const port = 9000;

configDotenv();

const OMDB_API_KEY = process.env.OMDB_API_KEY;

// added to handle cors error
app.use(cors());
// added to parse request params as json
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hola!");
});

app.get('/api/search/:id', async (req, res) => {
    let response = {}
    let queryParams = `i=${req.params.id}&apikey=${OMDB_API_KEY}`;
    try {
        // Example error response from ODMB - {"Response":"False","Error":"Invalid API key!"} - Error
        let uri = encodeURI(`http://www.omdbapi.com/?${queryParams}`)
        response = await fetch(uri);
        response = await response.json();
    } catch (ex) {
        response.error = true
    }
    res.json({
        response
    });
});

app.post('/api/search', async (req, res) => {
    const requestBody = req.body;
    let response = {}
    let queryParams = `apikey=${OMDB_API_KEY}`;
    if (requestBody.searchType && requestBody.searchType === "episode") {
        queryParams = `${queryParams}&t=${requestBody.searchTerm}`
    } else {
        queryParams = `${queryParams}&s=${requestBody.searchTerm}`
    }
    if (requestBody.searchType && OMDB_TYPES.includes(requestBody.searchType)) queryParams = `${queryParams}&type=${requestBody.searchType}`;
    if (requestBody.page) {
        if (requestBody.searchType && requestBody.searchType === "episode") {
            queryParams = `${queryParams}&Season=${requestBody.page}`;
        } else {
            queryParams = `${queryParams}&page=${requestBody.page}`;
        }
    }
    try {
        // Example error response from ODMB - {"Response":"False","Error":"Invalid API key!"} - Error
        let uri = encodeURI(`http://www.omdbapi.com/?${queryParams}`)
        response = await fetch(uri);
        response = await response.json();
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
