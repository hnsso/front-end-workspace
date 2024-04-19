import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "@/assets/reset.css";
//            router사용할게
createApp(App).use(store).use(router).mount("#app");
