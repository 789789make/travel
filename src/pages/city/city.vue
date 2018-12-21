<template>
	<div class="city">
		<city-header></city-header>
		<city-search></city-search>
		<city-list></city-list>
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
.city
	background: #eee
</style>

<script>
import cityHeader from './components/cityheader'
import citySearch from './components/search'
import cityList from './components/list'
	export default{
		name: 'city',
		components:{
			cityHeader,citySearch,cityList
		}
	}
</script>