<template>
<div class="header">
<div class="header-left">
	<span class="iconfont icon-back">&#xe624;</span>
</div>
<div class="header-input">
<span class="iconfont">&#xe632;</span> 输入城市景点/游玩主题</div>
<router-link to='city'>
<div class="header-right">{{city}} <span class="iconfont">&#xe6aa;</span></div>
</router-link>
</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
.header
	display: flex
	line-height: .86rem
	background: $bgColor
	position: relative
	z-index: 5
	color: #fff
	.header-left
		float:left
		width: .64rem
		text-align: center
	.header-input
		border-radius: .1rem
		margin-top: .12rem
		height: .64rem
		line-height: .64rem
		margin-left: .2rem
		color: #ccc
		background: #fff
		flex:1
		padding-left: .2rem
	.header-right
		$ellipsis()
		padding: 0 .1rem
		color: white
		float:right
		text-align: center
		font-size: .3rem
</style>
<script>
import { mapState } from 'vuex'
export default 
{
  name:'homeHeader',
  computed:{
  	...mapState(['city','num'])
  },
}
</script>

