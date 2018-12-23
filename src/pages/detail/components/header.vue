<template>
	<div class="header">
		<div 
		class="header-return" 
		v-show='ifTop'>
			<router-link
			 tag='span'
			 to='/'
			 class="iconfont icon-back"
			 >
			&#xe624;</router-link>
		</div>
		<div 
		class="header-fixed"
		v-show='!ifTop' :style = "opacityStyle">
			<router-link  
			tag='span' 
			to='/' 
			class="iconfont icon-back"
			>
			&#xe624;</router-link>
			峨眉山
		</div>
	</div>
</template>
<style lang='stylus' scoped>
@import '~style/varibles.styl'
.header
	position:fixed
	top: 0
	left: 0
	right: 0
	z-index: 999
	.header-fixed
		opacity : 0
		position: absolute
		top: 0
		line-height: .88rem
		width: 100%
		background: $bgColor
		text-align: center
		color: white
		font-size: .35rem
		.icon-back
			position: absolute
			left: .15rem
			font-size: .4rem
	.header-return
		.icon-back
			width: .7rem
			height: .7rem
			font-weight: bold
			font-size: .35rem
			color: white
			display: inline-block
			background: rgba( 0, 0, 0, .6)
			text-align: center
			line-height: .7rem
			border-radius: 1rem
			margin-top: .05rem
			margin-left : .09rem
</style>

<script>
export default{
	name: 'detail-header',
	data(){
		return {
			ifTop:true,
			opacityStyle:{
				opacity:0
			}
		}
	},
	methods:{
		showScrollTop:function(){
			var scrollTop = document.documentElement.scrollTop
			if(scrollTop&&scrollTop <= 200){
				this.ifTop = false
				this.opacityStyle.opacity = scrollTop/200
			}
			else if(scrollTop === 0){
				this.ifTop = true
			}	
		}
	},
	activated(){//进入页面触发的钩子函数,前提是用了keep-alive
		window.addEventListener('scroll',this.showScrollTop)//会有bug，切换到其他页面也会有scroll事件
	},
	deactivated(){//离开页面触发的钩子函数
		window.removeEventListener('scroll',this.showScrollTop)
	}
}
</script>