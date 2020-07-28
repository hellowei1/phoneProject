<template>
  <div class="product">
    <banner-product
      :sightName="sightName"
      :bannerImg="bannerImg"
      :bannerImgs="gallaryImgs"
    >
    </banner-product>
    <detail-list :list="list"></detail-list>
    <!-- <content-product></content-product> -->
  </div>
</template>

<script>
  import BannerProduct from './components/banner';
  import ContentProduct from './components/content';
  import DetailList from './components/list';
  import { getProductDetail } from 'api/home';
  export default {
    name: 'Product',
    components: {
      BannerProduct,
      DetailList
    },
    data() {
      return {
        sightName: '【升级版】瑞视达T1',
        bannerImg: 'https://m.360buyimg.com/mobilecms/s480x480_jfs/t5023/41/1537645509/101169/e475633/58f1c417N41a38df9.jpg!q70.jpg',
        gallaryImgs: ["https://m.360buyimg.com/mobilecms/s480x480_jfs/t4945/276/1549681469/49434/a119b2fc/58f1c3f8N423e11df.jpg!q70.jpg", "https://m.360buyimg.com/mobilecms/s480x480_jfs/t4816/219/1550213777/166785/ed4f20aa/58f1c41aNdaec69c7.jpg!q70.jpg", "https://m.360buyimg.com/mobilecms/s480x480_jfs/t12619/47/275768324/95542/a67e50f8/5a07c5acNf48fbd9e.jpg!q70.jpg", "https://m.360buyimg.com/mobilecms/s480x480_jfs/t1/67752/2/8113/231184/5d60f2d9Eda893ff6/2dcdde0c172c9316.jpg!q70.jpg"],
        list: [{
          "title": "jd商城新款推荐",
          "children": [{
            "title": "jd商城新款推荐",
            "children": [{
              "title": "jd商城新款推荐 - 某一连锁店销售"
            }]
          }, {
            "title": "jd瑞视达T1"
          }]
        }, {
          "title": "jd商城新款推荐"
        }, {
          "title": "jd商城瑞视达T1"
        }, {
          "title": "jd商城新款推荐"
        }]
      }
    },
    methods: {
      // getDetailInfo(){
      //   const that = this;
      //   return getProductDetail(that).then(data => {
      //     const detail = data.data.data;
      //     this.sightName = detail.sightName;
      //     this.bannerImg = detail.bannerImg;
      //     this.gallaryImgs = detail.gallaryImgs;
      //     this.list = detail.categoryList;
      //   });
      // }
    },
    mounted() {
        // this.getDetailInfo()
    }

  };
</script>

<style lang="scss" scoped>
 @import "~assets/scss/mixins";
 .product {
    overflow: hidden;
    position: absolute;
    top: 0;
    left: 0;
    z-index: $product-z-index;
    width: 100%;
    height: 100%;
    background-color: $bgc-theme;
  }
</style>
