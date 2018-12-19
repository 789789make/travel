<template>
	<div class="wrapper">
	<swiper :options="swiperOption" ref="mySwiper">
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
					loop:true
				},
				swiperList:[{
					id:'0001',
					imgUrl:'https://img1.qunarzz.com/vc/f5/10/9c/b647d3ee724a720ce0fa6101f0.jpg'
				},{
					id:'0002',
					imgUrl:'https://img1.qunarzz.com/vc/d4/d0/62/a6b7c23c1b251dfc874ce66efa.jpg'
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
	padding-bottom: 31.25%
	.swiper-img
		width: 100%
</style>