import { request } from './request'

export function getDetailData(iid) {
    return request({
        url: '/detail',
        params: {
            iid,
        }
    })
}

export function getRecommendData() {
    return request({
        url: '/recommend',
    })
}


// 商品详细信息
export class detailGoods {
    constructor(itemInfo, columns, shopInfo) {
        this.title = itemInfo.title;
        this.price = itemInfo.price;
        this.oldPrice = itemInfo.oldPrice;
        this.lowNowPrice = itemInfo.lowNowPrice;
        this.discountDesc = itemInfo.discountDesc;
        this.columns = columns;
        this.services = shopInfo.services;
    }
}

// 店铺信息
export class Shop {
    constructor(shopInfo) {
        this.shopLogo = shopInfo.shopLogo;
        this.name = shopInfo.name;
        this.score = shopInfo.score;
        this.cSells = shopInfo.cSells;
        this.cGoods = shopInfo.cGoods;
    }
}

export class Param {
    constructor(info, rule) {
        this.info = info.set;
        this.rule = rule.tables;
    }
}
