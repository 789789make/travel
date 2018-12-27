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
	touch-action: none;
}
a{
	color:black
}
.pageSlide-enter , .pageSlide-leave-to{
			transform: translate(-100%,0)
		}
.pageSlide-enter-active , .pageSlide-leave-to{
			transition:all .5s;
		}
</style>
