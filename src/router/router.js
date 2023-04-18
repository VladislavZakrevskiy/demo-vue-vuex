import { createRouter, createWebHistory } from 'vue-router'
import Main from '../pages/Main.vue'
import PostPage from '../pages/PostPage.vue'
import About from '../pages/About.vue'
import PostById from '../pages/PostById.vue'
import VueXPostPage from '../pages/VueXPostPage.vue'


const routes = [
    {
        path: '/',
        component: Main
    },
    {
        path: '/posts',
        component: PostPage
    },
    {
        path: '/posts/:id',
        component: PostById
    },
    {
        path: '/about',
        component: About
    },
    {
        path: '/vxposts',
        component: VueXPostPage
    }
]


export const router = createRouter({
    routes,
    history: createWebHistory()
})