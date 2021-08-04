import axios from 'axios';

/**
 * @description googleSheets API
 */
const googleSheets = axios.create({
 baseURL: 'https://spreadsheets.google.com/feeds/list/1FK2Z4G8XJ2-EfByeoS6DyffbOBT2Ai2Q2sXVvtJJwpw/od6/public/values?alt=json'
});

export default googleSheets;
