<template>
  <div>
    <home-header></home-header>
    <home-swiper :list="swiperList"></home-swiper>
    <home-icon :list="iconList"></home-icon>
  </div>
</template>

<script>
import HomeHeader from './components/HomeHeader.vue'
import HomeSwiper from './components/Swiper.vue'
import HomeIcon from './components/Icons.vue'
import axios from "axios";

export default {
  name: 'Home',
  components:{
    HomeHeader,
    HomeSwiper,
    HomeIcon
  },
  data () {
    return {
      lastCity: '',
      swiperList: [],
      iconList: []
    }
  },
  mounted () {
     this.getHomeData();
  },
  methods:{
    getHomeData(){
      axios.post('/index').then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc(res){
      res = res.data
      if(res.ret && res.data){
        const data = res.data
        this.swiperList = data.swiperList
        this.iconList = data.iconList
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
