<template>
    <div>
        <div class="item" v-for="(item, index) of list" :key="index">
            <div class="item-title border-bottom">
                <span class="item-title-icon"></span>
                {{item.title}}
            </div>
            <div v-if="item.children" class="item-chilren">
                <detail-list :list="item.children"></detail-list>
            </div>
        </div>
        
    </div>
</template>

<script>
    export default {
        name: 'DetailList',
        props: {
            list: Array
        }
    }
</script>

<style lang="scss" scoped>
    @import "~assets/scss/mixins";
    .item-title-icon {
        position: relative;
        left: .06rem;
        top: .06rem;
        display: inline-block;
        width: .56rem;
        height: .56rem;
        background: url(http://s.qunarzz.com/piao/image/touch/sight/detail.png) 0 -.35rem no-repeat;
        margin-right: .1rem;
        /* background-size: .4rem 3rem;  */
    }
    .item-title{
        line-height: 1.8rem;
        font-size: 1rem;
        padding: 0 .4rem;
    }
    .item-chilren{
        padding: 0 .4rem;
    }

</style>