<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card>
          <v-card-title>
            <h6 class="green--text">{{ meetup.title }}</h6>
          </v-card-title>
          <v-card-media
            :src="meetup.imageUrl"
            height="400px"
          ></v-card-media>
          <v-card-text>
            <div class="blue--text">
              {{ meetup.date }} - In havana
            </div>
            <div>
             {{meetup.description}}
            </div>
          </v-card-text>
          <v-card-action>
            <v-spacer></v-spacer>
            <v-btn class="primary">REGISTER</v-btn>
          </v-card-action>
        </v-card>
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
