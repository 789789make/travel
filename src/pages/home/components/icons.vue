<template>
	<div class="icons">
		<swiper class='swiperContent' :options="swiperOption" ref="mySwiper" >
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
		data(){
			return {
				swiperOption:{
					pagination:'.swiper-pagination'
					},
				iconList:[{
					id:'0001',
					iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/95/f3dd6c383aeb3b02.png',
					info:'景点门票'
					},{
					id:'0002',
					iconUrl:'http://img1.qunarzz.com/piao/fusion/1804/ff/fdf170ee89594b02.png',
					info:'北京必游'
					},{
					id:'0003',
					iconUrl:'http://img1.qunarzz.com/piao/fusion/1804/5a/13ceb38dcf262f02.png',
					info:'一日游'
					},{
					id:'0004',
					iconUrl:'http://img1.qunarzz.com/piao/fusion/1811/f6/e54fad3ea337b02.gif',
					info:'年终大促'
					},{
					id:'0005',
					iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/76/eb88861d78fb9902.png',
					info:'动植物园'
					},{
					id:'0006',
					iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/ab/6f7d6e44963c9302.png',
					info:'泡温泉'
					},{
					id:'0007',
					iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/fa/2548667cb6e902.png',
					info:'野生动物园'
					},{
					id:'0008',
					iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/fc/b10a6b2e4f0fe102.png',
					info:'滑雪'
					},{
					id:'0009',
					iconUrl:'http://img1.qunarzz.com/piao/fusion/1803/80/416c6ab3368d1f02.png',
					info:'全部玩乐'
						}]
			}
		},
		computed:{
			pages:function() {
				var pages=[];
				this.iconList.forEach(function(item,index){
						 var page=Math.floor(index/8)
                         if(!pages[page]){
							pages[page]=[]
                         }
                         pages[page].push(item)
					})
				return pages
			}
		}
	}
</script>