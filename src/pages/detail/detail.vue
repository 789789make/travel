<template>
	<div class="detail">
		<banner :bannerImg='bannerImg' :gallaryImgs='gallaryImgs'></banner>
		<detail-head></detail-head>
		<detail-list :categoryList = 'categoryList'></detail-list>
	</div>
</template>
<style lang='stylus' scpoed>
</style>

<script>
import detailHead from './components/header'
import banner from './components/banner'
import detailList from './components/list'
import axios from 'axios'
export default
{
	name:'detail',
	components:
	{
		banner,detailHead,detailList
	},
	methods:{
		getDetailInfo:function()
		{
			axios.get('/api/detail.json',{
				params:{
					id:this.$route.params.id
				}
			}).then(this.handleGetDataSucc)
		},
		handleGetDataSucc:function(res){
			var data = res.data
			if(data.ret){
				let detailData = data.data
				this.sightName = detailData.sightName
				this.bannerImg = detailData.bannerImg
				this.gallaryImgs = detailData.gallaryImgs
				this.categoryList = detailData.categoryList
			}
		}
	},
	mounted:function(){
		console.log('mounted');
		this.getDetailInfo()
	},
	data(){
		return{
			list:[],
			sightName:'',
			bannerImg:'',
			gallaryImgs:[],
			categoryList:[]
		}
	}
}
</script>