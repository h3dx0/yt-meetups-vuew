<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-text-field v-model="search" placeholder="Buscar miembro"></v-text-field>
      </v-flex>
      <v-flex xs12 md4 v-for="meetup in meetups" :key="meetup.id" class="mb-2">
        <v-card class="">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <!-- <v-flex xs12>
                <v-card-media
                :src="meetup.imageUrl"
                height="125px"
                ></v-card-media>
              </v-flex> -->
              <v-flex xs12>
                <div>
                  <div class="headline">{{ meetup.owner}}</div>
                  <div>{{meetup.title}}</div>
                </div>
                <v-card-actions v-flex class="justify-space-around">
                 <a :href="`whatsapp://send?text=${meetup.imageUrl}`" data-action="share/whatsapp/share">
                  <img width="35"src="/static/whatsapp.png" alt="LOGO">
                </a>
                <a :href="`fb-messenger://share/?link=${meetup.imageUrl}&app_id=123456789`">
                  <img width="35"src="/static/msg.png" alt="LOGO">
                </a>
              </v-card-actions>
              <v-card-actions>
                <v-btn outline block color="primary":to="'/meetups/' + meetup.id">                 
                  Ver perfil
                </v-btn>
              </v-card-actions>
            </v-flex>
          </v-layout>
        </v-container>
      </v-card>
      {{search}}
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
/* eslint-disable */

export default {
 data () {
  return {
    search: ''        
  }
},
computed: {
  meetups () {
    return this.$store.getters.loadedMeetups
  }
}
}
</script>
