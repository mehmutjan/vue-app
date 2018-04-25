import ajax from './ajax';

const urlPrefix = '/api';

const webApi = {
    register: (param) => {
        let url = urlPrefix + '/register';
        return ajax(url, 'post', param);
    }
};
export default webApi;