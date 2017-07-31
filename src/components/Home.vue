<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12 sm6 class="text-sm-right text-xs-center">
        <v-btn large to="/meetups" class="info">Explore meetups</v-btn>
      </v-flex>
      <v-flex xs12 sm6 class="text-sm-left text-xs-center">
        <v-btn large to="/meetups/new" class="info">Organize meetups</v-btn>
      </v-flex>
    </v-layout>
    <v-layout row wrap class="mt-2">
      <v-flex xs12>
        <v-carousel style="cursor:pointer;">
          <v-carousel-item
            v-for="item in meetups"
            :src="item.imageUrl"
            @click="onLoadMeetup(item.id)"
            :key="item.id">
            <div class="title">
              {{ item.title }}
            </div>
          </v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>
    <v-layout>
      <v-flex xs12 sm6 class="text-xs-center">
        <p>Join or awesome our meetups </p>
      </v-flex>

    </v-layout>
  </v-container>
</template>
<script>
  export default {
    data () {
      return {
        meetups: [
          { imageUrl: 'http://flyiteasy.com/wp-content/uploads/2014/10/Havana_Cuba.jpg', id: '1', title: 'Havana Meetup' },
          { imageUrl: 'http://www.indiamike.com/files/images/57/97/51/buddha-park.jpg', id: '2', title: 'India Meetup' }
        ]
      }
    },
    methods: {
      onLoadMeetup (id) {
        this.$router.push('/meetups/' + id)
      }
    }
  }
</script>
<style scoped>
  .title{
    position: absolute;
    bottom:50px;
    color: #fff;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 15px;
  }
</style>
