import { createRouter, createWebHistory } from "vue-router";

// Layout
import Home from "@/views/Home.vue";
import About from "@/views/About.vue";
import Docs from "@/views/Docs.vue";
import MainLayouts from "@/layouts/MainLayouts.vue";
import DocsLayout from "@/layouts/DocsLayout.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: MainLayouts,
      children: [
        { path: "/", component: Home },
        { path: "/about", name: "about",component: About },
        {
          path: "/docs",
          name: "docs",
          component: DocsLayout,
          children: [
            { path: "/docs", component: () => import("@/views/Docs.vue") },
            { path: "/docs/overview", component: () => import("@/views/docs/Overview.vue") },
            { path: "/docs/installation", component: () => import("@/views/docs/Installation.vue") },
            { path: "/docs/quick-start", component: () => import("@/views/docs/QuickStart.vue") },
            { path: "/docs/imports", component: () => import("@/views/docs/Imports.vue") },
            { path: "/docs/markup", component: () => import("@/views/docs/Markup.vue") },
            { path: "/docs/colors", component: () => import("@/views/docs/Colors.vue") },
            { path: "/docs/aliases", component: () => import("@/views/docs/Aliases.vue") },
            { path: "/docs/render", component: () => import("@/views/docs/Render.vue") },
            { path: "/docs/ink", component: () => import("@/views/docs/Ink.vue") },
            { path: "/docs/low-level", component: () => import("@/views/docs/LowLevel.vue") },
            { path: "/docs/utilities", component: () => import("@/views/docs/Utilities.vue") },
            { path: "/docs/types", component: () => import("@/views/docs/Types.vue") },
            { path: "/docs/examples", component: () => import("@/views/docs/Examples.vue") },
            { path: "/docs/behavior", component: () => import("@/views/docs/Behavior.vue") },
            { path: "/docs/project", component: () => import("@/views/docs/Projects.vue") },
          ]
        },
        { path: "/:pathMatch(.*)*", component: () => import("@/views/NotFound.vue") },
      ],
    }, 
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition

    const app = document.querySelector("#app");
    if (app) app.scrollTo({ top: 0, behavior: "auto" });
    return false
  },
});

export default router;