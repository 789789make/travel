<template>
<div>
<home-header :city='city'></home-header>
<home-swiper :swiper='swiperData' ></home-swiper>
<home-icons  :icons='iconsData'></home-icons>
<home-recommend :recommend='recommendData'></home-recommend>
<home-weekend :weekend='weekendData'></home-weekend>
</div>
</template>
<script>
import homeHeader from'./components/header'
import homeSwiper from'./components/swiper'
import homeIcons from './components/icons'
import homeRecommend from './components/recommend'
import homeWeekend from './components/weekend'
import axios from 'axios'
export default{
  name:'home',
  data(){
    return {
    swiperData:[],
    iconsData:[],
    recommendData:[],
    weekendData:[],
    city:'北京'
    }
  },
   components:{
    homeHeader,homeSwiper,homeIcons,homeRecommend,homeWeekend
  },
  methods:{
  	getHomeInfo(){
  		axios.get('/api/home.json')
  		.then(this.getHomeInfoSucc)
  	},
  	getHomeInfoSucc(res){
      var data=res.data
  		this.swiperData=data.headSwiper
      this.iconsData=data.iconList
      this.recommendData=data.recommendList
      this.weekendData=data.weekendList
  	}
  },
  mounted(){
  	this.getHomeInfo()
  }
}
</script>
<style>
</style>
