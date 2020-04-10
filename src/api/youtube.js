import axios from 'axios';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: '[AIzaSyB0_3-jZz0jqQr9NJHAgFhoQf_dHjtxZDI]'
    }
})