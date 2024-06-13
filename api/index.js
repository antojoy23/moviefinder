import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';
import { configDotenv } from 'dotenv';

const app = express();
const port = 9000;

configDotenv();

const OMDB_API_KEY = process.env.OMDB_API_KEY;

app.use(cors());

app.get('/', (req, res) => {
    res.send("All working fine");
});

app.get('/omdb', async (req, res) => {
    let response = {}
    try {
        //{"Response":"False","Error":"Invalid API key!"} - Error
        response = await fetch(`http://www.omdbapi.com/?s=star+wars&apikey=${OMDB_API_KEY}&type=movie&page=2`);
        console.log("Headers", response.headers)
        response = await response.json();
    } catch (ex) {
        console.log(ex);
        response.error = true
    }
    res.json({
        response
    });
});

app.listen(port, () => {
    console.info(`Express app listening on port ${port}`);
})
