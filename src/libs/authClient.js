const login_uri = 'http://api.cms.com/api/login_check';

export default (type, params) => {
    if (type === 'AUTH_REGISTER') {

        localStorage.setItem('token', params.data.token); // The JWT token is stored in the browser's local storage
        window.location.replace('/');
    } else if (type === 'AUTH_LOGIN') {

        const {username, password} = params;
        const request = new Request(`${login_uri}`, {
            method: 'POST',
            body: JSON.stringify({email: username, password}),
            headers: new Headers({'Content-Type': 'application/json'}),
        });

        return fetch(request)
            .then(response => {
                if (response.status < 200 || response.status >= 300) throw new Error(response.statusText);

                return response.json();
            })
            .then(({token}) => {
                localStorage.setItem('token', token); // The JWT token is stored in the browser's local storage
                window.location.replace('/');
            });
    } else if (type === 'AUTH_LOGOUT') {
        localStorage.removeItem('token');

    } else if (type === 'AUTH_ERROR') {

        if (401 === params.status || 403 === params.status) {
            localStorage.removeItem('token');

            return Promise.reject();
        }
    } else if (type === 'AUTH_CHECK') {

        return localStorage.getItem('token') ? Promise.resolve() : Promise.reject();
    } else {

        return Promise.resolve();
    }
};