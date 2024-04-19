import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import Create from "@/pages/Create.vue";
import Header from "@/components/Header.vue";

// 경로 관련된
const routes = [
  {
    // 경로
    path: "/",
    name: "Home", // 나 헤더 쓸거!
    components: { default: Home, header: Header },
  },
  {
    path: "/create",
    name: "Create", // 나 헤더쓸거야!
    components: { default: Create, header: Header },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;

// =====================================================
// 기본 셋팅 !!
//import { createRouter, createWebHistory } from "vue-router";
// 경로 관련된
// const routes = [];
// const router = createRouter({
//   history: createWebHistory(process.env.BASE_URL),
//   routes,
// });
// export default router;
