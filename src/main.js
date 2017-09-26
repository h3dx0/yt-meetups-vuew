import Vue from 'vue'
import Vuetify from 'vuetify'
import App from './App'
import router from './router'
import { store } from './store/'
import * as firebase from 'firebase'
import AlertCmp from './components/common/Alert.vue'
Vue.use(Vuetify)
Vue.config.productionTip = false

/* Registradno cmp global para toda la app */
Vue.component('app-alert', AlertCmp)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  store,
  router,
  render: h => h(App),
  //  al crear la instancia incluimos firebase
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyB1YvqWmet7chUUtYavK21CH_pbbSUFg3Q',
      authDomain: 'youtube-dev-meetup-27f54.firebaseapp.com',
      databaseURL: 'https://youtube-dev-meetup-27f54.firebaseio.com',
      projectId: 'youtube-dev-meetup-27f54',
      storageBucket: 'youtube-dev-meetup-27f54.appspot.com'
    })
  }
})
