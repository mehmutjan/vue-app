const routers = [
    {
        path: '/',
        meta: {
            title: '首页'
        },
        component: (resolve) => require(['./component/Layout.vue'], resolve)
    }, {
        path: '/login',
        meta: {
            title: '登陆'
        },
        component: (resolve) => require(['./views/web/login/index.vue'], resolve)
    }
];
export default routers;