import ajax from './ajax';

const urlPrefix = '/api';

const webApi = {
    register: (param) => {
        let url = urlPrefix + '/register';
        return ajax(url, 'post', param);
    },
    login: (param) => {
        let url = urlPrefix + '/login_check';
        return ajax(url, 'post', param);
    }
};
export default webApi;