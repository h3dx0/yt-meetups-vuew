<template>
  <v-container>
    <v-layout row>
      <v-flex xs12 offset-sm3>
        <h4>Alta de miembro</h4>
      </v-flex>
    </v-layout>
    <form @submit.prevent="onCreateMeetup">
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="title"
          label="Empresa"
          id="title"
          v-model="title"
          required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="owner"
          label="Nombre completo"
          id="owner"
          v-model="owner"
          required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="imageUrl"
          label="Tarjeta Digital"
          id="imageUrl"
          v-model="imageUrl"
          required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="imageUrl"
          label="Teléfono"
          id="imageUrl"
          v-model="imageUrl"
          required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-text-field
          name="imageUrl"
          label="Correo electrónico"
          id="imageUrl"
          v-model="imageUrl"
          required
          ></v-text-field>
        </v-flex>
      </v-layout>
      <v-layout row>
        <v-flex xs12 sm6 offset-sm3>
          <v-btn
          block
          class="primary"          
          type="submit"
          >GUARDAR
        </v-btn>
      </v-flex>
    </v-layout>
  </form>
</v-container>
</template>
<script>
export default {
  data () {
    return {
      title: '',
      location: '',
      imageUrl: '',
      description: ''
    }
  },
  computed: {
    formIsValid () {
      return this.title !== '' &&
      this.location !== '' &&
      this.imageUrl !== '' &&
      this.description !== ''
    }
  },
  methods: {
    onCreateMeetup () {
      const meetupData = {
        id: '123344',
        title: this.title,
        location: this.location,
        description: this.description,
        imageUrl: this.imageUrl,
        date: new Date()
      }
      this.$store.dispatch('createMeetup', meetupData)
      this.$router.push('/meetups')
    }
  }
}
</script>
