import Home from './components/Home'
import Menu from './components/Menu'
//const Menu = () => import('./components/Menu')
import Admin from './components/Admin'
import Contact from './components/Contact'
//const Contact = () => import('./components/Contact')
import History from './components/History'
import Delivery from './components/Delivery'
import About from './components/About'
//const About = () => import('./components/About')
import OrderingGuide from './components/OrderingGuide'

export const routes = [
    {path: '/', component: Home },
    {path: '/menu', component: Menu },
    {path: '/contact', component: Contact },
    {path: '/admin', 
    component: Admin,
    beforeEnter: (to, from, next) => {
      alert('This area is for authorized users only. Please login to continue.');
      next()
    }
    },
    {path: '/about', component: About, children: [
      {path: '/history', component: History },
      {path: '/delivery', component: Delivery },
      {path: '/ordering-guide', component: OrderingGuide },
    ]},
    { path: '*', redirect: '/' }
  ]