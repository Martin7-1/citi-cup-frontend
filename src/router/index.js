import {createRouter, createWebHistory} from 'vue-router'
// import store from '@/store/index'
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: ()=> import('@/views/Home'),
        },
        {
            path: '/login',
            name: 'login',
            component: () => import("@/views/Login")
        },
        {
            path: '/about',
            name: 'about',
            component: () => import("@/views/About"),
        },
        {
            path: '/consultant',
            name: 'consultant',
            beforeEnter: ()=>{
                const islogin = localStorage.getItem("user") != null;
                if(islogin){
                    return true;
                }else{
                    return {name: 'login'}
                }
            },
            component : () => import("@/views/Consultant")
        },
        {
            path: '/test',
            name: 'test',
            component : () => import("@/views/Test")
        },
        {
            path: '/quiz',
            name: 'quiz',
            component: () => import('@/views/Quiz')
        },
        {
            path: '/register',
            name: 'register',
            component: () => import('@/views/Register')
        },
        {
            path: '/consultant-initial',
            name: 'consultant-initial',
            component: () => import('@/views/ConsultInitial')
        }
    ]
})

export default router
