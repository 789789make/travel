<template>
	<div class="city">
		<city-header></city-header>
		<city-search></city-search>
		<city-list :hotlist='hotCityList' :citylist='cityList'></city-list>
		<bf-list :bflist='cityList'></bf-list>
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
</style>

<script>
import axios from 'axios'
import cityHeader from './components/cityheader'
import citySearch from './components/search'
import cityList from './components/list'
import bfList from './components/bufferList'
	export default{
		name: 'city',
		components:{
			cityHeader,citySearch,cityList,bfList
		},
		data(){
			return{
				hotCityList:[],
				cityList:[]
			}
		},
		mounted(){
			this.getCityInfo()
		},
		methods:{
			getCityInfo:function(){
				axios.get('/api/city.json')
					.then(this.getCityInfoSucc)
			},
			getCityInfoSucc:function(info){
				if(info.statusText)
				{	
					var data=info.data
					if(data.ret){
						this.hotCityList = data.data.hotCities
						this.cityList = data.data.cities
						console.log(data.data.cities)
					}
				}
				
			}
		}
	}
</script>