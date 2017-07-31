<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs12>
        <v-card class="info">
          <v-container fluid grid-list-lg>
            <v-layout row>
              <v-flex xs5 sm4 md3>
                <v-card-media
                  src="http://flyiteasy.com/wp-content/uploads/2014/10/Havana_Cuba.jpg"
                  height="125px"
                ></v-card-media>
              </v-flex>
              <v-flex xs7 sm8 md9>
                <v-card-title primary-title>
                  <div>
                    <div class="headline white--text">My MeetUp in Havana</div>
                    <div>Havana</div>
                    <div>15 July 2017</div>
                  </div>
                </v-card-title>
                <v-card-actions>
                  <v-btn flat to="">
                    <v-icon left>arrow_forward</v-icon>
                    View MeetUp
                  </v-btn>
                </v-card-actions>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
