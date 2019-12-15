<template>
    <section>
        <grid-layout
            :layout="layout"
            :auto-size="false"
            :col-num="48"
            :row-height="10"
            :is-draggable="true"
            :is-resizable="false"
            :vertical-compact="false"
            :use-css-transforms="false">
            <grid-item v-for="item in layout" :key="item.i"
                :x="item.x"
                :y="item.y"
                :w="item.w"
                :h="item.h"
                :i="item.i"
                @resize="resizeEvent"
                @move="moveEvent"
                @resized="resizedEvent"
                @moved="movedEvent">
                <CardContainer :card="item.card"></CardContainer>
            </grid-item>
        </grid-layout>
    </section>
</template>

<script>
import CardContainer from '../components/CardContainer'
import GridLayout from 'vue-grid-layout'
export default {
    components: {
        CardContainer,
        GridLayout: GridLayout.GridLayout,
        GridItem: GridLayout.GridItem
    },
    mounted() {
    },
    data() {
        return {
            layout: [
                {
                    x:0,
                    y:0,
                    w:48,
                    h:16,
                    i:0,
                    card: {
                        src: '/card/83ce91e32da614bf6d662135b6806865.js',
                        name: 'UploadCard'
                    }
                }
            ],
            newX:0,
            newY:0
        }
    },
    methods: {
        moveEvent: function(i, newX, newY,e){
        //console.log(e)
        //console.log("MOVE i=" + i + ", X=" + newX + ", Y=" + newY);
        },
        resizeEvent: function(i, newH, newW){
        //console.log("RESIZE i=" + i + ", H=" + newH + ", W=" + newW);
        },
        movedEvent: function(i, newX, newY,e){
        //console.log(e)
        //console.log("MOVED i=" + i + ", X=" + newX + ", Y=" + newY);
        },
        resizedEvent: function(i, newH, newW, newHPx, newWPx){
        //console.log("RESIZED i=" + i + ", H=" + newH + ", W=" + newW + ", H(px)=" + newHPx + ", W(px)=" + newWPx);
        }
    }
}
</script>
<style>

</style>

