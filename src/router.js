import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      component: ()=> import("@/layouts/MainLayout.vue"),
      children: [
        { path: "",       name: "home",  component: ()=> import("@/pages/Home.vue") },
        { path: "/about", name: "about", component: ()=> import("@/pages/About.vue") }, 
      ]
    }, 
    {
      path: "/docs",
      name: "docs", 
      component: ()=> import("@/layouts/DocsLayouts.vue"), 
      children: [
        { path: "/docs",                                    component: ()=> import("@/pages/Docs.vue") },
        { path: "/docs/overview",     name: "overview",     component: ()=> import("@/pages/docs/Overview.vue") },
        { path: "/docs/installation", name: "installation", component: ()=> import("@/pages/docs/Installation.vue") },
        { path: "/docs/quick-start",  name: "quick-start",  component: ()=> import("@/pages/docs/QuickStart.vue") },
        { path: "/docs/imports",      name: "imports",      component: ()=> import("@/pages/docs/Imports.vue") },
        { path: "/docs/markup",       name: "markup",       component: ()=> import("@/pages/docs/Markup.vue") },
        { path: "/docs/colors",       name: "colors",       component: ()=> import("@/pages/docs/Colors.vue") },
        { path: "/docs/aliases",      name: "aliases",      component: ()=> import("@/pages/docs/Aliases.vue") },
        { path: "/docs/render",       name: "render",       component: ()=> import("@/pages/docs/Render.vue") },
        { path: "/docs/ink",          name: "ink",          component: ()=> import("@/pages/docs/Ink.vue") },
        { path: "/docs/low-level",    name: "low-level",    component: ()=> import("@/pages/docs/LowLevel.vue") },
        { path: "/docs/utilities",    name: "utilities",    component: ()=> import("@/pages/docs/Utilities.vue") },
        { path: "/docs/types",        name: "types",        component: ()=> import("@/pages/docs/Types.vue") },
        { path: "/docs/examples",     name: "examples",     component: ()=> import("@/pages/docs/Examples.vue") },
        { path: "/docs/behavior",     name: "behavior",     component: ()=> import("@/pages/docs/Behavior.vue") },
        { path: "/docs/project",      name: "project",     component: ()=> import("@/pages/docs/Project.vue") },
      ]
    }, 
    {  
      path: "/:pathMatch(.*)*",
      name: "not-found",
      component: ()=> import("@/layouts/NotFoundLayouts.vue"),
    },
  ],
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition;
    return { top: 0 };
  },
});

export default router;