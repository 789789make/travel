<template>
  <div id="app">
  	<keep-alive>
    	<router-view/>
	</keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
*{
	touch-action: none;
}
a{
	color:black
}
</style>
