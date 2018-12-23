<template>
	<div class="detail-banner" @click='handleChangeGallaryShow'>
		<img class="banner-img" src="//img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_600x330_38a5c69c.jpg" alt="">
		<div class="banner-info">
		<div class="img-number"><span class="iconfont icon-img">&#xe67b;</span> 31</div>
		<div class="banner-name">峨眉山(AAAAA景区)</div>
		</div>
		<div class="banner-gradient"></div>
		<common-galarry :imgs='imgs' v-show='showGallary' @hide='handleChangeGallaryShow'></common-galarry>
	</div>
</template>

<style lang='stylus' scpoed>
.detail-banner
	overflow: hidden
	pisition: relative
	padding-bottom: 55%
	height: 0
	.banner-gradient
		height: .25rem
		position: absolute
		top: 3.9rem
		left: 0 
		right: 0
		background-image: linear-gradient( top, rgba( 0, 0, 0, 0), rgba( 0, 0, 0, .8))
	.banner-img
		width: 100%
	.banner-info
		position: absolute
		top: 3.0rem
		left: .15rem
		color: white
		z-index: 1
		.img-number
			width: .8rem
			font-size: .25rem
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
import commonGalarry from 'common/galarry/galarry'
export default
{
	name:'detailBanner',
	components:{
		commonGalarry
	},
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
			imgs:['http://img1.qunarzz.com/sight/p0/1712/16/16dd785ae3e2447ba3.img.jpg_r_800x800_dd060a69.jpg','http://img1.qunarzz.com/sight/p0/1712/2f/2fde369d83e19a8ba3.img.jpg_r_800x800_f300c3cd.jpg']
		}
	}
}
</script>