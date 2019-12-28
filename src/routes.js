import Home from './views/Home'
import About from './views/About'
import Todos from './views/Todos'

export const routes = [
    {
        path: '/',
        component: Home,
        name: 'Home'
    },
    {
        path: '/about',
        component: About,
        name: 'About'
    },
    {
        path: '/todos',
        component: Todos,
        name: 'Todos'
    }
]
