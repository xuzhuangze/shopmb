import Goodsdetail from "../components/goodsdetail";
import Login from "../components/login";
import Index from "../components";
let router = [
    {
        path: '/index',
        component: Index
    },
    {
        path: '/goodsdetail',
        component: Goodsdetail
    },
    {
        path: '/login',
        component: Login
    },
    // {
    //     path: '/mine',
    //     component: Mine
    // },
    // {
    //     path: '/shopcar',
    //     component: Shopcar
    // },
    {
        path: "*",
        redirect: '/index'
    }
]
export default router;