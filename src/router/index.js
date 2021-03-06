/* eslint-disable */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import MeetUps from '@/components/meetup/MeetUps'
import CreateMeetup from '@/components/meetup/CreateMeetup'
import Profile from '@/components/user/Profile'
import SignUp from '@/components/user/SignUp'
import SignIn from '@/components/user/SignIn'
import MeetUp from '@/components/meetup/MeetUp'
import AuthGuard from './auth-guard'

Vue.use(Router)

export default new Router({
  routes: [
  {
    path: '/',
    name: 'MeetUps',
    component: MeetUps
  },
  {
    path: '/meetups',
    name: 'MeetUps',
    component: MeetUps
  },
  {
    path: '/meetups/new',
    name: 'CreateMeetup',
    component: CreateMeetup,
    //beforeEnter: AuthGuard
  },
  {
    path: '/meetups/:id',
    name: 'ViewMeetup',
    props: true,
    component: MeetUp
  },
  {
    path: '/user/profile',
    name: 'Profile',
    component: Profile,
    beforeEnter: AuthGuard
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
