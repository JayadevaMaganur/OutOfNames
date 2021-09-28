import { createApp } from "vue";
import firebase from "firebase";
import App from "./App.vue";
import router from "./router";



// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDpe84WtNQH4nb9hr_xwgVUyGFcwqZdJ3A",
    authDomain: "my-vue-app-e9742.firebaseapp.com",
    databaseURL: "https://vue-auth-xxxxxx.firebaseio.com",
    projectId: "my-vue-app-e9742",
    storageBucket: "my-vue-app-e9742.appspot.com",
    messagingSenderId: "72051610721",
    appId: "1:72051610721:web:e852afece6ffe004878620"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

createApp(App)
    .use(router)
    .mount("#app");
