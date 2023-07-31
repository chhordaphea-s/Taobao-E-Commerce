import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/cart",
      name: "cart",
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "/customerservice",
      name: "customerservice",
      component: () => import("../views/CustomerService.vue"),
    },
    {
      path: "/shippinginfo",
      name: "shippinginfo",
      component: () => import("../views/ShippingInfo.vue"),
    },
    {
      path: "/paymentmethod",
      name: "paymentmethod",
      component: () => import("../views/PaymentMethod.vue"),
    },
    {
      path: "/success",
      name: "success",
      component: () => import("../views/Success.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/Login.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUp.vue"),
    },
    {
      path: "/addtocart",
      name: "addtocart",
      component: () => import("../views/PopAddToCart.vue"),
    },
    {
      path: "/emailconfirm",
      name: "emailconfirm",
      component: () => import("../views/EmailConfirm.vue"),
    },
    {
      path: "/search",
      name: "search",
      component: () => import("../views/Search.vue"),
    },
    {
      path: "/userprofile",
      name: "userprofile",
      component: () => import("../views/UserProfile.vue"),
    },



  ],
});

export default router;
