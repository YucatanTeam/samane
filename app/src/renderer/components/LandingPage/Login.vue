<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-img
          src="~@/assets/image/logo.png"
          aspect-ratio="2.75"
          alt="electron-vue"
        ></v-img>

        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">UMZ AUTOMATION</h3>
            <div> {{ card_text }} </div>
          </div>
        </v-card-title>

        <v-card-actions>
          <v-btn flat color="orange">Login</v-btn>
          <v-btn flat color="orange">Explore</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
  export default {
    data () {
      return {
        card_text: 'hello from samane'
      }
    }
  }
</script>

<style scoped>
  
</style>
