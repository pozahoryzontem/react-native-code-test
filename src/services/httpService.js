import * as axios from 'axios';

const get = (url) => axios.get(url);
const post = (url, body) => axios.post(url, body);

export { get, post };
