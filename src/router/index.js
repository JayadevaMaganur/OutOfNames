import { createRouter, createWebHistory } from "vue-router";
import Login from "../views/Login.vue";
import Signup from "../views/Signup.vue";
import Dashboard from "../views/Dashboard.vue";
<<<<<<< HEAD
import Enquiry from "../views/Enquiry.vue";
import Orders from "../views/Orders.vue";
import Logout from "../views/logout.vue";
import Departments from "../views//Departments.vue";
import Store from "../views/Store.vue";
=======
>>>>>>> 923f2b0a05057f79fb37408a3fc87b08ef83cb4c
import firebase from "firebase";

const routes = [
    {
        path: "/",
        name: "Login",
        component: Login
    },
    {
        path: "/signup",
        name: "Signup",
        component: Signup
    },
    {
        path: "/dashboard",
        name: "Dashboard",
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    },
    {
        path: "/enquiry",
        name: "Enquiry",
        component: Enquiry
    },
    {
        path: "/orders",
        name: "Orders",
        component: Orders
    },
    {
        path: "/logout",
        name: "Logout",
        component: Logout
    },
    {
        path: "/departments",
        name: "Departments",
        component: Departments
    },
    {
        path: "/store",
        name: "Store",
        component: Store
        
    },
];

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
});

router.beforeEach((to, from, next) => {
    const authenticatedUser = firebase.auth().currentUser;
<<<<<<< HEAD
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth);
=======
    const requiresAuth = to.matched.some(record => record.meta.requiresAuth)

>>>>>>> 923f2b0a05057f79fb37408a3fc87b08ef83cb4c
    if (requiresAuth && !authenticatedUser) {
        alert("You are not authorized to access this area.");
        next("login");
    } else {
        next();
    }
});

export default router;
