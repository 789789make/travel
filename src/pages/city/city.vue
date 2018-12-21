<template>
	<div class="city">
		<city-header></city-header>
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
</style>

<script>
import cityHeader from './components/cityheader'
	export default{
		name: 'city',
		components:{
			cityHeader
		}
	}
</script>