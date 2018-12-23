<template>
	<div class="detail">
		<banner></banner>
		<detail-head></detail-head>
		<detail-list :list = 'list'></detail-list>
		<div class="container"></div>
	</div>
</template>

<style lang='stylus' scpoed>
.container
	height: 1500px
</style>

<script>
import detailHead from './components/header'
import banner from './components/banner'
import detailList from './components/list'
export default
{
	name:'detail',
	components:
	{
		banner,detailHead,detailList
	},
	data(){
		return{
			list:
			[
			{id:1,title:'儿童票',children:[{title:'儿童3馆联票'},{title:'儿童5馆联票',children:[{title:'儿童3馆联票-子票'},{title:'儿童5馆联票-字票'}]},]},
			{id:2,title:'学生票',children:[{title:'学生3馆联票'},{title:'学生5馆联票'}]},
			{id:3,title:'成人票',children:[{title:'成人3馆联票'},{title:'成人5馆联票'}]},
			{id:4,title:'特惠票',children:[{title:'超级优惠票1'},{title:'超级优惠票2'}]},
			]
		}
	}
}
</script>