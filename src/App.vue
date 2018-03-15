<template>
  <div id="bettrRockets" >
    <router-view name="Nav"></router-view>
    <router-view name="Main"></router-view>
    <router-view name="Footer"></router-view>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
  
}
.oswald{
  font-family: 'Oswald', sans-serif;
}
.slabo{
  font-family: 'Slabo 27px', serif;
}
.strong{
  font-weight:bold;
}
</style>
