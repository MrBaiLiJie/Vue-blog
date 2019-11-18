import Vue from 'vue'
import Router from 'vue-router'
import HelloBlog from '@/components/HelloBlog'
import article from '@/views/article'
import project from '@/views/project'
import place from '@/views/place'
import course from '@/views/course'
import leaveMessage from '@/views/leaveMessage'
import about from '@/views/about'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HelloBlog',
      component: HelloBlog
    },
    {
      path: '/article',
      name: 'article',
      component: article,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/place',
      name: 'place',
      component: place,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/project',
      name: 'project',
      component: project,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/course',
      name: 'course',
      component: course,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/leaveMessage',
      name: 'leaveMessage',
      component: leaveMessage,
      meta: {
        keepAlive: true
      }
    },
    {
      path: '/about',
      name: 'about',
      component: about,
      meta: {
        keepAlive: true
      }
    },
  
  ]
})
