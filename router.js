import Storage from './services/storage.js';

import Secure from "./layouts/secure.js";
import Login from "./pages/login.js";
import Home from "./pages/home.js";
import Clients from "./pages/clients/list.js";
import Client from "./pages/clients/single.js";
import Products from "./pages/products/list.js";
import Product from "./pages/products/single.js";

const routes = [
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: "Login"
    }
  },
  {
    path: '/',
    component: Secure,
    meta: {
      title: 'Secure',
      secure: true
    },
    children: [
      {
        path: '/',
        name: 'secure.home',
        component: Home,
        meta: {
          title: 'Home',
          secure: true
        }
      }, {
        path: '/clients',
        name: 'secure.clients',
        component: Clients,
        meta: {
          title: 'Clients',
          secure: true
        }
      }, {
        path: '/client',
        name: 'secure.client',
        component: Client,
        meta: {
          title: 'Client',
          secure: true
        }
      },
      {
        path: '/client/:id',
        name: 'secure.clientEdit',
        component: Client,
        meta: {
          title: 'Client',
          secure: true
        }
      },{
        path: '/products',
        name: 'secure.products',
        component: Products,
        meta: {
          title: 'Products',
          secure: true
        }
      },{
        path: '/product',
        name: 'secure.product',
        component: Product,
        meta: {
          title: 'Product',
          secure: true
        }
      },{
        path: '/product/:id',
        name: 'secure.productEdit',
        component: Product,
        meta: {
          title: 'Product',
          secure: true
        }
      }


    ]
  }

];

const router = new VueRouter({
  routes
});
router.beforeEach((to, from, next) => {
  const isSecure = to.matched.some((route) => route.meta.secure);
  if (!isSecure) return next();
  if (Storage.credentials().has()) {
    next();

  } else {
    if (from.name != 'login') {
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
    }
      
  }

})

export default router;