<template>
	<div class="wrapper">
	<swiper :options="swiperOption" ref="mySwiper" >
    <swiper-slide v-for='item in swiperList' :key='item.id'>
    	<img class="swiper-img" :src="item.imgUrl" alt="">
    </swiper-slide>
    <div class="swiper-pagination"  slot="pagination"></div>
   <!--  <div class="swiper-button-prev" slot="button-prev"></div>
    <div class="swiper-button-next" slot="button-next"></div> -->
  <!--   <div class="swiper-scrollbar"   slot="scrollbar"></div> -->
  </swiper>
  </div>
</template>
<script>
	export default{
		name:'homeSwiper',
		data(){
			return{
				swiperOption:{
					pagination: '.swiper-pagination',
					loop:true,
					autoplay:3000,
					speed:300
				},
				swiperList:[{
					id:'0001',
					imgUrl:'https://img1.qunarzz.com/vc/f5/10/9c/b647d3ee724a720ce0fa6101f0.jpg'
				},{
					id:'0002',
					imgUrl:'https://img1.qunarzz.com/vc/d4/d0/62/a6b7c23c1b251dfc874ce66efa.jpg'
				},{
					id:'0003',
					imgUrl:'https://img1.qunarzz.com/vc/a4/29/dd/4a0734b77f675da2a8ca4a9879.jpg'
				},{
					id:'0004',
					imgUrl:'https://img1.qunarzz.com/vc/30/e6/6c/7236d07f50947d523bcdeadae8.jpg'
				}
				]
			}
		}
	}
</script>
<style lang='stylus' scoped>
.wrapper >>> .swiper-pagination-bullet-active
	background: white
.wrapper
	overflow:hidden
	height: 0
	width: 100%
	padding-bottom: 30.5%
	.swiper-img
		width: 100%
</style>