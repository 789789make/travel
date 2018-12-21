<template>
	<div class="city">
		<city-header></city-header>
		<city-search></city-search>
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
</style>

<script>
import cityHeader from './components/cityheader'
import citySearch from './components/search'
	export default{
		name: 'city',
		components:{
			cityHeader,citySearch
		}
	}
</script>