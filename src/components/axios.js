import axios from 'axios';

export default axios.create({
    baseURL: 'http://acts-sh.pp.ua/',
    timeout: 1000,
    headers: { Accept: 'application/activity+json', Authorization: 'Bearer xyugavnomuravej' }
});