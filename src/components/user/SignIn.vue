<template>
  <v-container>
    <v-layout row v-if="error">
      <v-flex xs12>
        <app-alert @dismissed="onDismissed" :text="error.message"></app-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs12>
        <v-card>
          <v-card-text>
            <v-container>
              <form @submit.prevent="onSignIp">
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="email"
                      label="Mail"
                      id="email"
                      v-model="email"
                      type="email"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-text-field
                      name="password"
                      label="Password"
                      id="password"
                      v-model="password"
                      type="password"
                      required
                    ></v-text-field>
                  </v-flex>
                </v-layout>
                <v-layout row>
                  <v-flex xs12>
                    <v-btn type="submit" primary
                      :loading="loading"
                      :disabled="loading">
                      Sign Up
                      <span slot="loader"
                            class="custom-loader"
                      >
                        <v-icon light>cached</v-icon>
                      </span>Sign In</v-btn>
                  </v-flex>
                </v-layout>
              </form>
            </v-container>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    computed: {
      user () {
        return this.$store.getters.user
      },
      error () {
        /* obtengo el error que hay en el store y se asigna a una propiedad */
        return this.$store.getters.error
      },
      loading () {
        return this.$store.getters.loading
      }
    },
    watch: {
      user (value) {
        if (value !== null && value !== undefined) {
          this.$router.push('/')
        }
      }
    },
    methods: {
      onSignIp () {
        this.$store.dispatch('signIn', {
          email: this.email,
          password: this.password
        })
      },
      onDismissed () {
        /* se ejecuta la accion clearError (no la mutation) para limpiar se actualiza tmb la propiedad error */
        this.$store.dispatch('clearError')
      }
    }
  }
</script>
