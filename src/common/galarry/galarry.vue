<template>
	<div class="galarry" @touch='handleHideGallary'>
		<div class="container">
			<swiper :options='swiperOptions'>
    			<swiper-slide v-for='item of gallaryImgs' :key='item'>
    				<div class="container-img">
    					<img class="swiper-img" :src="item" alt="">
    				</div>
    			</swiper-slide>
    			<div class="swiper-pagination"  slot="pagination">
    			</div>
    		</swiper>
		</div>
	</div>
</template>

<style lang='stylus' scoped>
.galarry
	z-index:99999
	position: fixed
	top: 0
	left: 0
	right: 0
	bottom: 0
	background: #000
	display: flex
	flex-direction: column
	justify-content: center
	.container
		height: 0 
		width: 100%
		padding-bottom: 100%
		.swiper-pagination
			color: white
		.container-img
			background: #000
			width: 100%
			height: 0
			padding-bottom: 100%
			position: relative
			.swiper-img
				position: absolute
				width: 100%
				top: 50%
				left: 50%
				transform: translate( -50%, -50%)
</style>
<script>
	export default{
		name: 'commonGalarry',
		props:{
			gallaryImgs:{
				type : Array,
				default(){
					return []
				}
			}
		},
		methods:{
			handleHideGallary:function(){
				this.$emit('change')
			}
		},
		data(){
			return{
				swiperOptions:{
					pagination:'.swiper-pagination',
					paginationType:'fraction',
					speed: 500,
					observer: true,//自身dom结构发生变化会自动自我刷新
					observeParents: true//父元素dom结构发生变化时会自动自我刷新
				}
			}
		}
	}
</script>