const axios = require("axios");
require("dotenv").config();

const apiKey = process.env.OPENAI_API_KEY;

// Create new client to interact with OPEAI API and include API key in the request header for authentication
const client = axios.create({
  headers: {
    "Content-type": "application/json",
    Authorization: "Bearer ${apiKey}", //Use the API key to authenticate the reqest
  },
});

// Define the text prompt
const data = {
  Prompt: "Once upon a time",
  max_tokens: 10,
  temperature: 0.5,
};

// Send a request to the API to generate tet based on data
client.post("https://api.openai.com/v1/engines.davinci/completions", data);
