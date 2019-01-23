<template>
  <div class="wrapper">
    <swiper :options="swiperOption">
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgURL">
      </swiper-slide>
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOption: {
         pagination: {
            el: '.swiper-pagination',
          },
         loop: true,
         autopaly: 3000
      },
      swiperList:[{
          id:'001',
          imgURL:'http://img1.qunarzz.com/piao/fusion/1801/1a/94428c6dea109402.jpg_640x200_2cf590d8.jpg'
        },
        {
          id:'002',
          imgURL:'http://img1.qunarzz.com/piao/fusion/1803/41/1b93b76d7f197c02.jpg_640x200_971065c4.jpg'
        },
      ]
    }
  }
}

</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: #fff
  .wrapper
    overflow hidden
    width 100%
    height 0
    padding-bottom: 31.25%
    background: #eee
    .swiper-img
      width: 100%
</style>