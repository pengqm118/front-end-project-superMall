import { debounce } from './utils';
import BackTop from "@/components/content/backTop/BackTop";

//刷新图片加载完后的content高度
export const imgRefreshMixin = {
    data() {
        return {
            imgRefresh: null,
            refresh: null,
        }
    },
    mounted() {
        //注意点:调用的组件的scroll的ref的值必须为scroll（与下面对应）
        this.refresh = debounce(this.$refs.scroll.refreshScrollHeight, 500);
        this.imgRefresh = () => {
            this.refresh();
        };
        this.$bus.$on("imgLoadDone", this.imgRefresh);
    }
}

export const backTopMixin = {
    data() {
        return {
            isShow: false,
        }
    },
    components: {
        BackTop
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0, 500);
        },
    },
}
