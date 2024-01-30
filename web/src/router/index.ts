/**
 * router/index.ts
 *
 * Automatic routes for `./src/pages/*.vue`
 */

// Composables
import { createRouter, createWebHistory } from 'vue-router'

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
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes: routes,
})

export default router
