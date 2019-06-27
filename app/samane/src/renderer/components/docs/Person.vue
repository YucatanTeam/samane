


<template>
  <div id="wrapper">
  
    <card name="doc" route="/" btn_name="back" img_name="logo.png">
      <div class="card-content">
        <p>{{content}}</p>
      </div>    
    </card>

  </div>
</template>

<script>
  import Card from '../Tags/Card'

  export default {
    name: 'person',
    components: { Card },
    data (){
      return {
        content : "wildonion"
      }
    },
    methods: {}
  }
</script>

<style>

</style>
