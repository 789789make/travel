<template>
	<div class="list" ref='wrapper'>
		<div >
		<div class="area">
			<div class="title">当前城市</div>
			<div class="container blockCity">
				<div class='container-item'>北京</div>
				<div class='container-item'>北京</div>
				<div class='container-item'>北京</div>
				<div class='container-item'>北京</div>
				<div class='container-item'>北京</div>
			</div>
		</div>
		<div class="area">
			<div class="title">热门城市</div>
			<div class="container blockCity">
				<div class='container-item'>北京</div>
			</div>
		</div>
		<div class="area">
			<div class="title ">A</div>
			<div class="container">
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>	
			</div>
		</div>
		<div class="area">
			<div class="title ">A</div>
			<div class="container">
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>	
			</div>
		</div>
		<div class="area">
			<div class="title ">A</div>
			<div class="container">
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>	
			</div>
		</div>
		<div class="area">
			<div class="title ">A</div>
			<div class="container">
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>
				<div class="item">北京</div>	
			</div>
		</div>
	</div>
	</div>
</template>
<style lang='stylus' scoped>
@import '~style/varibles.styl'
.list
	position: absolute
	top: 1.68rem
	right: 0
	left: 0
	bottom: 0
	overflow: hidden
	background: #eee
	.area
		.title
			font-size: .28rem
			line-height: .1rem
			color: rgba(0,0,0,.8)
			padding: .3rem .1rem
		.blockCity
			padding-right: .4rem
		.container
			overflow: hidden
			.item
				line-height: .7rem
				width: 100%
				background: white
				box-sizing: border-box
				border-bottom: .03rem solid #eee
				padding-left: .1rem
				font-size: .30rem
			.container-item
				text-align:center
				float: left
				width: 33.33%
				font-size: .28rem
				border: .01rem solid #eee
				box-sizing: border-box
				line-height: 1rem
				background: white
</style>
<script>
import bscroll from 'better-scroll'
export default
{
	name:'list',
	mounted ()
	{
		this.scroll = new bscroll(this.$refs.wrapper)
	}
}
</script>