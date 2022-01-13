import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    component: () => import("../views/Comic.vue"),
    children: [
      {
        path: "",
        name: "ComicHome",
        component: () => import("../views/comics/ComicList.vue"),
      },
    ],
  },
  {
    path: "/comics",
    component: () => import("../views/Comic.vue"),
    children: [
      {
        path: ":id",
        name: "ComicContent",
        component: () => import("../views/comics/ComicContent.vue"),
      },
    ],
  },
  {
    path: "/login",
    name: "Login",
    component: () => import("../views/Login.vue"),
  },
  {
    path: "/about",
    name: "About Site",
    component: () => import("../views/AboutSite.vue"),
  },
  {
    path: "/user",
    name: "User",
    component: () => import("../views/User.vue"),
  },
  {
    path: "/group",
    component: () => import("../views/Group.vue"),
    children: [
      {
        path: "",
        name: "Group Home",
        component: () => import("../views/group/GroupInfo.vue"),
      },
      {
        path: "members",
        component: () => import("../views/group/MemberList.vue"),
      },
      {
        path: "custom",
        component: () => import("../views/group/CustomGroup.vue"),
      },
    ],
  },
  {
    path: "/log",
    name: "Log",
    component: () => import("../views/Log.vue"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;
