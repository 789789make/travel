<template>
  <div id="app">
  	<!-- <transition name="pageSlide"> -->
  		<keep-alive exclude = 'detail'>
    		<router-view/>
		</keep-alive>
	<!-- </transition> -->
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
a{
	color:black
}
</style>
