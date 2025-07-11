import axios from "axios";
require('dotenv').config()
// https://www.omdbapi.com/?apikey=e8df346b&s=leo&type=movie&page=1
export default axios.create({
    baseURL:`https://www.omdbapi.com/?apikey=${process.env.API_KEY}`
})