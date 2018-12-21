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
	z-index: 2
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
			ifTouch:false,
			timer:null
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
			this.$emit('change',e.target.innerText)
		},
		handleTouchMove:function(e)
		{	
			if(this.ifTouch)
			{	
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer=setTimeout(()=>{
					const nowPosition=e.touches[0]['clientY']-89-25
					const indexBf=Math.floor(nowPosition/20)
					if(indexBf>=0&&indexBf<this.buffers.length){
					this.$emit('change',this.buffers[indexBf])
					}
				},15)//事件节流
			}
		},
		handleTouchEnd:function()
		{
			this.ifTouch = false
		}
	}
}
</script>