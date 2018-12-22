<template>
	<div class="list" ref='wrapper'>
		<div>
		<div class="area">
			<div class="title">当前城市</div>
			<div class="container blockCity">
				<div class='container-item nowCity'>{{city}}</div>
			</div>
		</div>
		<div class="area">
			<div class="title">热门城市</div>
			<div class="container blockCity">
				<div 
				class='container-item' 
				v-for='item of hotlist' 
				:key='item.id'
				@click='handleClickCity(item.name)'
				>{{item.name}}</div>
			</div>
		</div>
		<div 
		class="area" 
		v-for='(item,index) of citylist' 
		:key='index'
		:ref='index'
		>	
			<div class="title" >{{index}}</div>
				<div class="container">
						<div class="item"
				 		v-for='(items,index) of item'
				 		@click='handleClickCity(items.name)'
				 		>{{items.name}}
				 		</div>
				</div>
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
				$ellipsis()
			.nowCity
				color: $bgColor!important
			.container-item
				$ellipsis()
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
import { mapState,mapActions,mapMutations } from 'vuex'
export default
{
	name:'list',
	props:['hotlist','citylist','buffer'],
	mounted ()
	{
		this.scroll = new bscroll(this.$refs.wrapper)
	},
	computed:{
		...mapState(['city'])
	},
	watch:
	{
			buffer:function()
			{
				if(this.buffer)
				{
					const ele=this.$refs[this.buffer][0]
					this.scroll.scrollToElement(ele)
				}
			}
	},
	methods:
	{
		handleClickCity:function(city)
		{
			/*this.$store.dispatch('changeCity',city)*/
			this.changeCity(city)
			this.$router.push('/')
		},
		...mapActions(['changeCity'])
	}
}
</script>