import axios from 'axios';

const host = 'http://api.cms.com';
const ajax = (url, type = 'get', data) => {
    return axios({
        method: type,
        url: host + url,
        data: data ? data : null,
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Token ' + localStorage.hasOwnProperty('token') ? localStorage.getItem('token') : ''
        }
    });
};

export default ajax;