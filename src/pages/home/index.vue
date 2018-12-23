<template>
<div ref='wrapper'>
<div>
<home-header></home-header>
<home-swiper :swiper='swiperData' ></home-swiper>
<home-icons  :icons='iconsData'></home-icons>
<home-recommend :recommend='recommendData'></home-recommend>
<home-weekend :weekend='weekendData'></home-weekend>
</div>
</div>
</template>
<script>
import homeHeader from'./components/header'
import homeSwiper from'./components/swiper'
import homeIcons from './components/icons'
import homeRecommend from './components/recommend'
import homeWeekend from './components/weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default{
  name:'home',
  data(){
    return {
    lastCity:'',
    swiperData:[],
    iconsData:[],
    recommendData:[],
    weekendData:[],
    }
  },
  computed:{
    ...mapState(['city'])
  },
   components:{
    homeHeader,homeSwiper,homeIcons,homeRecommend,homeWeekend
  },
  methods:{
  	getHomeInfo(){
  		axios.get('/api/home.json?/city='+this.city)
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
  // mounted(){
  //   console.log('mounted')
  // },
  activated(){//active在页面被重新加载时候触发
     console.log('active')
    if(this.lastCity != this.city)
    {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  },
}
</script>
<style>
</style>
