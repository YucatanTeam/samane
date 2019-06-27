



<template>
  
  <card name="auth" route="/docs/person" btn_name="login" img_name="logo.png">
    <div class="card-content">
        <p>{{content}}</p>
    </div>
  </card>

</template>

<script>
  import Card from './Tags/Card'

  export default {
    name: 'auth',
    components: { Card },
    data() {
      return {
        content : "this is a tesr content"
      }
    },
    methods: {    }
  }
</script>

<style>

</style>
