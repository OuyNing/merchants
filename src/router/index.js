import Vue from 'vue';
import VueRouter from 'vue-router';
import HelloWorld from '../components/HelloWorld.vue'
Vue.use(VueRouter)

const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push(location) {
    return originalPush.call(this, location).catch(err => err)
}

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld,
        redirect: "/HelloWorld"
    }
]

const router = new VueRouter({
    routes
})

export default router
