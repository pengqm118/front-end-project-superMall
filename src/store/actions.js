import {
    ADD_ONE,
    ADD_GOODS,
    CHANGE_CHECKED_STATUS,
    CHANGE_CONTRARY_STATUS,
    ADD_ONE_MORE,
    DEC_ONE
} from './mutation-type'

export default {
    addToCart(context, payLoad) {
        return new Promise((res, rej) => {
            let oldCart = null;
            let p = context.state.cartList.find((item) => item.id === payLoad.id);
            if (p) {
                // p.num += 1;
                context.commit(ADD_ONE, p);
                oldCart = p;
                res("成功加1");
            }
            if (!oldCart) {
                payLoad.num = 1;
                // state.cartList.push(payLoad);
                context.commit(ADD_GOODS, payLoad);
                res("成功加入购物车");
            }
        })

    },
    singleGoodsStatus(context, payLoad) {
        context.commit(CHANGE_CONTRARY_STATUS, payLoad);
    },
    isAllSelected(context, payLoad) {
        context.commit(CHANGE_CHECKED_STATUS, payLoad);
    },
    //单个商品的数量加减操作
    addOneMore(context, payLoad) {
        context.commit(ADD_ONE_MORE, payLoad);
    },
    decOne(context, payLoad) {
        context.commit(DEC_ONE, payLoad);
    },
}