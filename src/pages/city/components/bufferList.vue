<template>
	<div class="bfList">
		<ul>
			<li 
				class="item" 
				v-for='(item,index) in buffers'
				:key='index'
				:ref='item'
				@click='handleBfClick'
				@touchstart='handleTouchStart'
				@touchmove='handleTouchMove'
				@touchend='handleTouchEnd'
				>
				{{item}}
			</li>
		</ul>
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
.bfList
	overflow: hiddem
	position: absolute
	z-index: 999
	right:0
	top:50%
	transform:translate(0,-50%)
	.item
		margin-top: .001rem
		text-align: center
		color: $bgColor
		line-height: .40rem
</style>

<script>
export default{
	name:'bfList',
	props:['bflist'],
	data()
	{
		return {
			ifTouch:false
	}
	},
	computed:
	{
		buffers:function()
		{
			var arr=[];
			for(var i in this.bflist)
			{
				arr.push(i)
			}
			return arr
		}
	},
	methods:
	{
		handleBfClick:function(e)
		{
			this.$emit('change',e.target.innerText)
		},
		handleTouchStart:function(e)
		{
			this.ifTouch = true
		},
		handleTouchMove:function(e)
		{
			if(this.ifTouch)
			{	
				const startBf=e.target.innerText
				const startIndex=this.buffers.indexOf(startBf)
				const startPosition=this.$refs[startBf][0].offsetTop
				const nowPosition=e.touches[0]['clientY']-89-30
				const sub=nowPosition
				const indexBf=Math.floor(sub/20)
				this.$emit('change',this.buffers[indexBf])
			}
		},
		handleTouchEnd:function()
		{
			this.ifTouch = false
		}
	}
}
</script>