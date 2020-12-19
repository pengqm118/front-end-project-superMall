import Toast from '@/components/common/toast/toast'

const obj = {};

obj.install = function (Vue) {
    // 1. 创建组件构造器
    const toastConstrucrtor = Vue.extend(Toast);

    // 2. 根据组件构造器创建组件对象 
    const toast = new toastConstrucrtor();

    // 3.将组件对象挂载到某一元素上
    toast.$mount(document.createElement('div'));

    //toast.$el对应的是div
    document.body.appendChild(toast.$el);

    Vue.prototype.$toast = toast;
    console.log("裂开了");
}

export default obj
