import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

// scss
import "./assets/scss/main.scss"

createApp(App).use(router).mount("#app");
