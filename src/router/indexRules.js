import Home from "../components/index/Home";
import Mine from "../components/index/mine";
import Shopcar from "../components/index/shopcar";

let router = [
    {
        path: '/index/home',
        component: Home
    },
    {
        path: '/index/mine',
        component: Mine
    },
    {
        path: '/index/shopcar',
        component: Shopcar
    },
    {
        path: '*',
        redirect: '/index/home'
    }
];
export default router;