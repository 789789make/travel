<template>
	<div class="wrapper">
	<swiper :options="swiperOption" ref="mySwiper" >
    <swiper-slide v-for='item in swiper' :key='item.id'>
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
		props:{
			swiper:Array,
		},
		data(){
			return{
				swiperOption:
				{
					pagination: '.swiper-pagination',
					loop:true,
					autoplay:3000,
					speed:300
				}
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