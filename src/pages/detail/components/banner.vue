<template>
	<div class="detail-banner" @click='handleChangeGallaryShow'>
		<img class="banner-img" :src="bannerImg" alt="">
		<div class="banner-info">
		<div class="img-number"><span class="iconfont icon-img">&#xe67b;</span> {{this.gallaryImgs.length}}</div>
		<div class="banner-name">峨眉山(AAAAA景区)</div>
		</div>
		<div class="banner-gradient"></div>
		<fade-animation>
		<common-galarry :gallaryImgs='this.gallaryImgs' v-show='showGallary'  @hide='handleChangeGallaryShow'></common-galarry>
		</fade-animation>
	</div>
</template>

<style lang='stylus' scpoed>
.detail-banner
	overflow: hidden
	position: relative
	padding-bottom: 55%
	height: 0
	.banner-gradient
		height: .25rem
		position: absolute
		bottom: 0rem
		left: 0 
		right: 0
		background-image: linear-gradient( top, rgba( 0, 0, 0, 0), rgba( 0, 0, 0, .8))
	.banner-img
		width: 100%
	.banner-info
		position: absolute
		bottom: .3rem
		left: .15rem
		color: white
		z-index: 1
		.img-number
			width: .8rem
			font-size: .3rem
			letter-space: 1rem
			border-radius: 1rem
			background: rgba(0,0,0,.6)
			margin-bottom: .1rem
			text-align: center
			padding: .08rem .2rem
			.icon-img
				font-size: .20rem
		.banner-name
			width: 100%
			font-size: .36rem
</style>

<script>
import fadeAnimation from 'common/fade/fade'
import commonGalarry from 'common/galarry/galarry'
export default
{
	name:'detailBanner',
	components:{
		commonGalarry,fadeAnimation
	},
	props:['bannerImg','gallaryImgs'],
	methods:
	{
		handleChangeGallaryShow:function()
		{
			this.showGallary = !this.showGallary
		}
	},
	data(){
		return{
			showGallary: false,
		}
	}
}
</script>