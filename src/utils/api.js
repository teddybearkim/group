import axios from "axios";

const API_KEY = process.env.REACT_APP_CLIENT_ID;
const SECRET_KEY = process.env.REACT_APP_CLIENT_SECRET;

const api = axios.create({
    baseURL: 'https://openapi.naver.com/v1/search/news.json',
    headers: {
        'X-Naver-Client-Id': API_KEY,
        'X-Naver-Client-Secret': SECRET_KEY
    }
});

console.log(
  "axios"
)
export default api;