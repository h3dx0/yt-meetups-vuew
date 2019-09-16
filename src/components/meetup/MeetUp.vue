<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>         
          <v-card-media
          :src="meetup.imageUrl"
          height="250px"
          ></v-card-media>
          <v-card-title primary-title>
            <div>
              <div class="headline">{{ meetup.owner}}</div>
              <div>{{meetup.title}}</div>
            </div>
          </v-card-title>
          <v-card-text>
            <div>
              <a :href="`mailto:${meetup.email}`">
                <v-icon class="mr-2">mail</v-icon>{{ meetup.email }}
              </a>
            </div>
            <div>
              <a :href="`tel:${meetup.phone}`" >
                <v-icon class="mr-2" >phone</v-icon>{{ meetup.phone }}
              </a>
            </div>
          </v-card-text>
          <v-card-title>
            <label>Compartir en:</label>
          </v-card-title>
          <v-card-actions v-flex class="justify-space-around">
           <a :href="`whatsapp://send?text=${meetup.imageUrl}`" data-action="share/whatsapp/share">
            <img width="35"src="/static/whatsapp.png" alt="LOGO">
          </a>
          <a :href="`fb-messenger://share/?link=${meetup.imageUrl}&app_id=123456789`">
            <img width="35"src="/static/msg.png" alt="LOGO">
          </a>
        </v-card-actions>
      </v-card>
      <v-btn outline block color="primary" :to="'/meetups/'">Regresar al listado</v-btn>
    </v-flex>
  </v-layout>
</v-container>
</template>

<script>
export default {
  props: ['id'],
  computed: {
    meetup () {
      return this.$store.getters.loadedMeetup(this.id)
    }
  }

}
</script>
