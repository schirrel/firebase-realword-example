import Storage from './services/storage.js';

import Secure from "./layouts/secure.js";
import Login from "./pages/login.js";
import Home from "./pages/home.js";

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
	children:[ {
        path: '/',
        name: 'secure.home',
        component: Home,
        meta: {
          title: 'Home',
          secure: true
        }
      }]
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
    //  next({ name: 'vencimento'})

  } else {
    if (from.name != 'login')
      next({
        path: '/login',
        params: { nextUrl: to.fullPath }
      })
  }

})

export default router;