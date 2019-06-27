

<template>
	<div class="row">
    <div class="col s12 m6">
      <div class="card">
      	<div class="card-image" v-if="img_name">
	      <img :id="card_img" src="~@/assets/logo.png" :alt="card_img">
	    </div>
      	<slot><!-- [....] --></slot>
      	<div class="card-action" v-if="route">
	    	<router-link :to="route">{{btn_name}}</router-link>
	  	</div>
      </div>
    </div>
  </div>
</template>


<script>
	export default {
    name: 'card',
    props:['name', 'img_name', 'route', 'btn_name'],	
    data (){
    	return {
    		card_name : this.name,
    		card_img  : this.img_name.split(".")[0]
     	}
    },
    
    methods: {}
 }
</script>

<style>
	
</style>