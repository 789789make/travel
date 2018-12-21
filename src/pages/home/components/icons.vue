<template>
	<div class="icons">
		<swiper class='swiperContent' :options="swiperOption" ref="mySwiper"  v-if='showIcons' >
		<swiper-slide v-for='item in pages' :key='item.id'>
		<div class="icon" v-for='items in item' >
			<div class="iconImg">
				<img class="iconImg-content" :src="items.iconUrl" alt="">
			</div>
			<p class="icon-info">{{items.info}}</p>
		</div>
		</swiper-slide>
		<div class="swiper-pagination"  slot="pagination"></div>
		<!-- <swiper-slide>
		<div class="icon">
			<div class="iconImg">
				<img class="iconImg-content" src="http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png" alt="">
			</div>
			<p class="icon-info">message</p>
		</div>
		</swiper-slide> -->
		</swiper>
	</div>
</template>
<style lang='stylus' scpoed>
@import '~style/varibles.styl'
.icons 
	margin-top: .1rem
	.swiperContent
		height: 0
		padding-bottom: 50%
		.swiper-pagination
			margin-bottom: -.2rem
.icon
	overflow: hidden
	position: relative
	height: 0
	float: left
	width:25%
	padding-bottom: 23%
	.iconImg
		position: absolute
		top: 0
		left: 0
		bottom: .40rem
		right : 0
		box-sizing: border-box
		padding: 0 .1rem
		.iconImg-content
			display:block
			margin:.1rem auto
			height:90%
	.icon-info
		text-align: center
		color:$iconTextColor
		position: absolute 
		bottom: 0
		left: 0
		right: 0
		line-height: .40rem
		$ellipsis()
</style>
<script >
	export default{
		name:'headerIcon',
		props:
		{
			icons: Array
		},
		data(){
			return {
				swiperOption:
				{
					pagination:'.swiper-pagination',
					loop:true
				}
			}	
		},
		computed:{
			pages:function() {
				var pages=[];
				this.icons.forEach(function(item,index){
						 var page=Math.floor(index/8)
                         if(!pages[page]){
							pages[page]=[]
                         }
                         pages[page].push(item)
					})
				return pages
			},
			showIcons:function(){
				return this.icons.length
			}
		}
	}
</script>