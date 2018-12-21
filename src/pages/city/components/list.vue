<template>
	<div class="list">
		<div class="area">
			<div class="title ">当前城市</div>
			<div class="container">
				<div class='container-item'>北京</div>
				<div class='container-item'>北京</div>
				<div class='container-item'>北京</div>
				<div class='container-item'>北京</div>
				<div class='container-item'>北京</div>
			</div>
		</div>
		<div class="area">
			<div class="title ">热门城市</div>
			<div class="container ">
				<div class='container-item'>北京</div>
			</div>
		</div>
		<div class="area">
			<div class="title ">A</div>
			<div class="container">
				<div class="container-item">北京</div>
			</div>
		</div>
	</div>
</template>
<style lang='stylus' scoped>
@import '~style/varibles.styl'
.list
	background: #eee
	.area
		.title
			font-size: .35rem
			line-height: .50rem
			color: rgba(0,0,0,.8)
			padding: .3rem .2rem
		.container
			overflow: hidden
			.container-item
				text-align:center
				float: left
				width: 33.33%
				border: .01rem solid #eee
				box-sizing: border-box
				line-height: .9rem
				background: white
</style>
<script>
	export default{
		name:'list'
	}
</script>