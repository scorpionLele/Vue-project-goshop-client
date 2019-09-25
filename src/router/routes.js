import Miste from "../pages/Miste/Miste.vue";
import Search from "../pages/Search/Search.vue";
import Order from "../pages/Order/Order.vue";
import Profile from "../pages/Profile/Profile.vue";
import Login from "../pages/Login/Login.vue";
import Shop from "../pages/Shop/Shop.vue";
import Goods from "../pages/Shop/Goods.vue";
import Info from "../pages/Shop/Info.vue";
import Ratings from "../pages/Shop/Ratings.vue";

import A from '../pages/test/A.vue'
import B from '../pages/test/B.vue'
import B1 from '../pages/test/B1.vue'
import B2 from '../pages/test/B2.vue'

export default [
  {
    path:"/miste",
    component: Miste,
    meta:{
      isShow:true
    }
  },
  {
    path: "/search",
    component: Search,
    meta: {
      isShow: true
    }
  },
  {
    path: "/order",
    component: Order,
    meta: {
      isShow: true
    }
  },
  {
    path: "/profile",
    component: Profile,
    meta: {
      isShow: true
    }
  },
  {
    path:"/login",
    component:Login
  },
  {
    path: "/shop",
    component: Shop,
    children:[
      {
        path:'goods',
        component:Goods
      },
      {
        path: '/shop/ratings',
        component: Ratings
      },
      {
        path: 'info',
        component: Info
      },
      {
        path: '',
        redirect: "/shop/goods"
      }
    ]
  },
  {
    path: "/",
    redirect: "/miste"
  },
  {
    path: '/a',
    component: A
  }, 
  {
    path: '/b',
    component: B,
    children: [
      {
        path: '/b/b1',
        component: B1
      },
      {
        path: '/b/b2',
        component: B2
      },
    ]
  },
]