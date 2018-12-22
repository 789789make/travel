<template>
	<div>
	<div class="search">
		<input v-model='keyword' class="search-input" type="text" placeholder="输入城市名或拼音">
	</div>
	<div class="search-content" v-show='ifSearch'>
		<ul>
				<li 
				class="search-item" 
				v-for='item of searchList' 
				:key='item.id'
				@click='handleClickCity(item.name)'
				>{{item.name}}</li>
				<li class="search-item" v-show='!ifResult'>没有匹配的数据</li>
		</ul>
	</div>
	</div>
</template>

<style lang='stylus' scoped>
@import '~style/varibles.styl'
.search
	height: .72rem
	background:  $bgColor
	margin-top: -.1rem
	padding: .1rem
	.search-input
		box-sizing: border-box
		width: 100%
		padding:0 .2rem
		border-radius: .1rem
		display: block
		margin: .05rem auto
		heigth: .62rem
		line-height: .62rem
		text-align: center
.search-content
	z-index: 3
	position: absolute
	background: #eee
	top: 1.68rem
	left: 0
	right: 0
	bottom: 0
	overflow: hidden
	.search-item
		width: 100%
		box-sizing: border-box
		line-height: .8rem
		font-size: .28rem
		background: white
		border-bottom: .02rem solid #eee
		padding-left: .1rem
</style>

<script>
	export default{
		name:'search',
		props:['cities'],
		data(){
			return {
				keyword:'',
				timer:null,
				searchList:'',
				ifResult:true
			}
		},
		methods:{
			handleClickCity:function(city)
			{
				this.$router.push('/')
				this.$store.commit('changeCity',city)
			}
		},
		computed:{
			ifSearch:function(){
				return this.keyword
			},
		},
		watch:{
			keyword:function(){
				if(this.timer){
					clearTimeout(this.timer)
				}
				this.timer=setTimeout(()=>
				{
					var res=[]
					if(this.keyword){
					for(var i in this.cities){
						this.cities[i].forEach((item,index)=>{
							if(item.name.indexOf(this.keyword)!=-1||item.spell.indexOf(this.keyword)!=-1)
							{
								res.push(item)
							}
						})
					}
					this.searchList=res
					this.ifResult=this.searchList.length
				}
				},50)
			}
		}
	}
</script>