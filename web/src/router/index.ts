/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHashHistory } from 'vue-router'

export const routes = [
  {
    path: "/",
    meta: {
      requiresAuth: false,
      layout: "default",
    },
    component: () =>
      import("@/components/HomePage.vue"),
  } as any,
  {
    path: "/dashboard",
    meta: {
      requiresAuth: false,
      layout: "ui",
    },
    component: () => import("@/pages/dashboard.vue"),
  },
  {
    path: "/:pathMatch(.*)",
    redirect: "/",
    name: "notMatch",
    hidden: true
  },
];

const router = createRouter({
  history: createWebHashHistory(process.env.BASE_URL),
  routes: routes,
})

export default router
