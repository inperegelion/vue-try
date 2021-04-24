import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    name: "Catalog",
    component: () => import("../views/Catalog.vue"),
  },
  {
    path: "/profile",
    name: "Profile",
    component: () => import("../views/Profile.vue"),
  },
  {
    path: "/helloworld",
    name: "Helloworld",
    component: () => import("../views/Helloworld.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

router.afterEach((to, from) => {
  console.log(composeCloseMessage(from.name, from.path));
});

export default router;

function composeCloseMessage(pageName, pagePath) {
  return pageName
    ? `${pageName.toUpperCase()} PAGE IS CLOSED`
    : `PAGE ON ${pagePath.toUpperCase()} IS CLOSED`;
}
