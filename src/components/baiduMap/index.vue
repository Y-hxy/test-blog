<template>
    <baidu-map class="bm-view" ak="rWwFHx3vlXEyrjw5uB4mdSKfynaHWZ0r" v="3.0" type="API"
        :center="{ lng: 110.380462, lat: 19.682669 }" :zoom="19" :scroll-wheel-zoom="true">
        <bm-navigation anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-navigation>
        <bm-scale anchor="BMAP_ANCHOR_TOP_RIGHT"></bm-scale>
        <bm-marker :position="{ lng: 110.380462, lat: 19.682669 }" :dragging="true" @click="infoWindowOpen">
            <bm-info-window :show="infoWindowShow" @close="infoWindowClose" @open="infoWindowOpen">旺角鲜牛肉加工店</bm-info-window>
        </bm-marker>
    </baidu-map>
</template >

<script setup>
import { ref } from 'vue';
import { BaiduMap, BmNavigation, BmScale, BmMarker, BmInfoWindow } from 'vue-baidu-map-3x'

const infoWindowShow = ref(false)

function infoWindowOpen() {
    infoWindowShow.value = true
}

function infoWindowClose() {
    infoWindowClose.value = false
}
</script>

<style lang='scss' scoped>
.bm-view {
    width: 100%;
    height: 500px;
}
</style>
