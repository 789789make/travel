<template>
	<div class="detail">
		<banner></banner>
		<detail-head></detail-head>
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
export default
{
	name:'detail',
	components:
	{
		banner,detailHead
	}
}
</script>