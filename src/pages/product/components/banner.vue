<template>
    <div>
        <div class="banner" @click="handleBannerClick">
            <router-link tag="div" to="/home" class="banner-arrow">
                <i class="iconfont icon-back"></i>
            </router-link>
            <img class="banner-img" :src="this.bannerImg" />
            <div class="banner-info">
                <div class="banner-tittle">
                    {{this.sightName}}
                </div>
                <div class="banner-number">
                    <i class="iconfont icon-scan"></i>
                    {{this.bannerImgs.length}}
                </div>
            </div>
        </div>
                 <common-gallary 
                :imgs="bannerImgs" 
                v-show="showGallary" 
                @close="handleGallaryClose">
                </common-gallary>
    </div>
</template>

<script>
    import CommonGallary from 'base/gallery';
    import { getProductDetail } from 'api/home'
    export default {
        name: 'BannerProduct',
        data () {
            return {                    
                showGallary: false
            }
        },
        props: {
            sightName: {
                type: String,
                default:''
            },
            bannerImg: {
                type: String,
                default: ''
            },
            bannerImgs: {
                type: [Array]
            }
        },     
        components: {
            CommonGallary
      },
        methods :{
            handleBannerClick() {
              this.showGallary = true;
            },
            handleGallaryClose() {
              this.showGallary = false;
          }
      }
   }
</script>

<style scoped lang="scss">
    @import "~assets/scss/mixins";
    .banner {
        position: relative;
        overflow: hidden;
        height: 0;
        padding-bottom: 55%;  
        &-arrow{
            background:grey;
            border-radius:.625rem;
            width: 2.25rem;
            height:1.125rem;
            text-align: center;
            font-size: .4rem;
            color: #fff;
            position:absolute;
            top:.6875rem;
            left:.5rem;
            z-index:1;
        }   
        &-img {
            /* position:relative; */
            /* position:absolute; */
            width:100%;
            /* z-index:-1; */
        }
        &-info {
            @include flex-between();
            position: absolute;
            padding: 0 10px 8px 10px;
            left: 0;
            right: 0;
            bottom: 0;
            line-height: .6rem;
            color: #fff;
            background-image: linear-gradient(top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));            
             &-title{
                flex: 1;
                font-size: .32rem;
                padding: 0 .2rem;     
            } 
            &-number{
                height: .32rem;
                line-height: .32rem;
                margin-top: .14rem;
                padding: 0 .4rem;
                border-radius: .2rem;
                background: rgba(0, 0, 0, .8);
                font-size: .24rem;     
            }
            &-icon{
                font-size:$icon-font-size;
            }
        } 

    }
</style>