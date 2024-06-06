import './assets/main.css'

import { createApp } from 'vue'
import { createMemoryHistory, createRouter } from 'vue-router'
import Dashboard from "./views/dashboard/Dashboard.vue"
import App from "./App.vue";
import Signup from "./views/auth/Signup.vue"
import Login from "./views/auth/Login.vue";
import Search from "./views/dashboard/Search.vue";
import Landing from "./views/dashboard/Landing.vue";
import PlaysetViewer from "./views/PlaysetViewer.vue";
import PlayerViewer from "./views/PlayerViewer.vue";
import Settings from "./views/settings/Settings.vue";
import MyAccount from "./views/settings/MyAccount.vue";
import Security from "./views/settings/Security.vue";
import ConnectedServices from "./views/settings/ConnectedServices.vue";

const routes = [
    { path: '/player', component: PlayerViewer },
    { path: '/playset/:ref', component: PlaysetViewer },
    { path: '/login', component: Login },
    {
        path: '/settings',
        component: Settings,
        children: [
            {
                path: '',
                component: MyAccount,
            },
            {
                path: 'security',
                component: Security,
            },
            {
                path: 'connectedservices',
                component: ConnectedServices,
            }
        ]
    },
    { path: '/signup', component: Signup },
    {
        path: '/dashboard',
        component: Dashboard,
        children: [
            {
                path: '',
                component: Landing
            },
            {
                path: 'search/:query',
                component: Search,
            }
        ]
    },
    { path: '/', component: App },
]

const router = createRouter({
    history: createMemoryHistory(),
    routes: routes
})

createApp(App)
    .use(router)
    .mount('#app')
