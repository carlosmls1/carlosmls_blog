const c1 = () => import(/* webpackChunkName: "page--src--templates--category-vue" */ "/Users/carlosma/WebstormProjects/carlosmls/frontend/src/templates/Category.vue")
const c2 = () => import(/* webpackChunkName: "page--src--templates--article-vue" */ "/Users/carlosma/WebstormProjects/carlosmls/frontend/src/templates/Article.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--contact-vue" */ "/Users/carlosma/WebstormProjects/carlosmls/frontend/src/pages/Contact.vue")
const c4 = () => import(/* webpackChunkName: "page--src--pages--blog-vue" */ "/Users/carlosma/WebstormProjects/carlosmls/frontend/src/pages/Blog.vue")
const c5 = () => import(/* webpackChunkName: "page--node-modules--gridsome--app--pages--404-vue" */ "/Users/carlosma/WebstormProjects/carlosmls/frontend/node_modules/gridsome/app/pages/404.vue")
const c6 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/carlosma/WebstormProjects/carlosmls/frontend/src/pages/Index.vue")

export default [
  {
    path: "/category/tech/",
    component: c1
  },
  {
    path: "/category/story/",
    component: c1
  },
  {
    path: "/category/nature/",
    component: c1
  },
  {
    path: "/category/news/",
    component: c1
  },
  {
    path: "/article/a-bug-is-becoming-a-meme-on-the-internet/",
    component: c2
  },
  {
    path: "/category/food/",
    component: c1
  },
  {
    path: "/contact/",
    component: c3
  },
  {
    path: "/blog/",
    component: c4
  },
  {
    name: "404",
    path: "/404/",
    component: c5
  },
  {
    name: "home",
    path: "/",
    component: c6
  },
  {
    name: "*",
    path: "*",
    component: c5
  }
]
