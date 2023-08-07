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
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/products/:id",
      name: "products",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/cart/",
      name: "cart",
      component: () => import("../views/Cart.vue"),
    },
    {
      path: "/customerservice/:id",
      name: "customerservice",
      component: () => import("../views/CustomerService.vue"),
    },
    {
      path: "/shippinginfo/:id",
      name: "shippinginfo",
      component: () => import("../views/ShippingInfo.vue"),
    },
    {
      path: "/paymentmethod/:id",
      name: "paymentmethod",
      component: () => import("../views/PaymentMethod.vue"),
    },
    {
      path: "/success/:id",
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
    {
      path: "/order",
      name: "order",
      component: () => import("../views/Order.vue"),
    },
    {
      path: "/userprofile",
      name: "userprofile",
      component: () => import("../views/UserProfile.vue"),
    },
    {
      path: "/landingpage",
      name: "landingpage",
      component: () => import("../views/LandingPageView.vue"),
    },
    



  ],
});

export default router;
