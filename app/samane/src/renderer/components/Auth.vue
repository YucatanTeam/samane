


<template>
  <div id="wrapper">
    <!-- <img id="logo" src="~@/assets/logo.png" alt="electron-vue"> -->
    <a class="waves-effect waves-light btn" @click="open('https://github.com/YucatanTeam/samane')">REPO</a>
  </div>
</template>

<script>
  // import SystemInformation from './LandingPage/SystemInformation'

  export default {
    name: 'auth',
    // components: { SystemInformation },
    methods: {
      open (link) {
        this.$electron.shell.openExternal(link)
      }
    }
  }
</script>

<style>

</style>
