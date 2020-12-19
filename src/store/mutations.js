import {
    ADD_ONE,
    ADD_GOODS,
    CHANGE_CHECKED_STATUS,
    CHANGE_CONTRARY_STATUS,
    ADD_ONE_MORE,
    DEC_ONE
} from './mutation-type'

export default {
    [ADD_ONE](state, payLoad) {
        payLoad.num += 1;
    },
    [ADD_GOODS](state, payLoad) {
        payLoad.checked = false;
        state.cartList.push(payLoad);
    },
    //改变item到相反的status
    [CHANGE_CONTRARY_STATUS](state, payLoad) {
        payLoad.checked = !payLoad.checked;
    },
    // 改变具体的item到指定的status
    [CHANGE_CHECKED_STATUS](state, payLoad) {
        // console.log(payLoad.items.checked);
        // console.log(payLoad.status);
        payLoad.items.checked = payLoad.status;
    },
    [ADD_ONE_MORE](state, payLoad) {
        payLoad.num += 1;
    },
    [DEC_ONE](state, payLoad) {
        payLoad.num -= 1;
    },
}