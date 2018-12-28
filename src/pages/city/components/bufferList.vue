<template>
	<div class="bfList" ref='bfList'>
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
	overflow: hidden
	position: absolute
	z-index: 999
	right:0
	top:20%
	.item
		margin-top: .001rem
		text-align: center
		color: $bgColor
		line-height: .35rem
</style>

<script>
export default{
	name:'bfList',
	props:['bflist'],
	data()
	{
		return {
			ifTouch:false,
			timer:null,
			offsetTop:''
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
	mounted:function(){
		this.setTopVal()
	},
	methods:
	{
		setTopVal:function(){
			this.offsetTop=this.$refs.bfList.offsetTop
		},
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
					/*alert(e.touches[0]['clientY'])*/
					const nowPosition=e.touches[0]['clientY']-this.$refs.bfList.offsetTop
					const indexBf=Math.floor(nowPosition/17)
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