import VueRouter from "vue-router";
import Vue from 'vue';
import Product from '@/components/shopcar.vue';

let router = new VueRouter({
    routes: [{
        path: "/",
        redirect: "/product"
    }, {
        name: "product",
        path: "/product",
        component: Product
    }]
});
Vue.use(VueRouter);
export default router;