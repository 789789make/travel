<template>
	<div class="city">
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
		<bf-list></bf-list>
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
</style>

<script>
import cityHeader from './components/cityheader'
import citySearch from './components/search'
import cityList from './components/list'
import bfList from './components/bufferList'
	export default{
		name: 'city',
		components:{
			cityHeader,citySearch,cityList,bfList
		}
	}
</script>