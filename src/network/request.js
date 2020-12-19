import axios from 'axios'

export function request(config) {
    const instance = axios.create({
        baseURL: 'http://152.136.185.210:8000/api/w6',
        timeout: 5000
    })

    // 请求拦截与响应拦截
    instance.interceptors.request.use(
        config => {
            // console.log('请求拦截了');
            return config
        },
        err => { });
    // 请求拦截适用场景：当用户访问无权限的网页时，拦截其请求并判断其权限够不够，不够就将其转向其他提示页面。！！！！！！！！！！！用来检测用户登录账号状态！！！！！！！！！！

    instance.interceptors.response.use(
        res => res.data,
        err => { }
    )

    return instance(config);
}

