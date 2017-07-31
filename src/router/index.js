import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MeetUps from '@/components/meetup/MeetUps'
import CreateMeetup from '@/components/meetup/CreateMeetup'
import Profile from '@/components/user/Profile'
import SignUp from '@/components/user/SignUp'
import SignIn from '@/components/user/SignIn'
import MeetUp from '@/components/meetup/MeetUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/meetups',
      name: 'MeetUps',
      component: MeetUps
    },
    {
      path: '/meetups/new',
      name: 'CreateMeetup',
      component: CreateMeetup
    },
    {
      path: '/meetups/:id',
      name: 'ViewMeetup',
      component: MeetUp
    },
    {
      path: '/user/profile',
      name: 'Profile',
      component: Profile
    },
    {
      path: '/signin',
      name: 'SignIn',
      component: SignIn
    },
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
