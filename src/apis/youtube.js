import axios from 'axios';

const KEY = 'AIzaSyA0Fz7JngF48M19jeFxBWNVpXhbVHGM8Mw';


//make a pre-configured instance of axios with base url and default params loaded into it
export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params : {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})