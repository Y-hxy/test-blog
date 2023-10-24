<template>
    <div class="hxy-main">
        <div class="flex flex-wrap">
            <div class="mr-5 mb-5" v-for="(item, index) in listData" :key="index" @click="openAlbum(item.id)">
                <galleryItem :infoData="item"></galleryItem>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { getGalleryInfo } from '@/api'
import galleryItem from './components/galleryItem'

const listData = ref([])

onMounted(() => {
    loadData()
})

function loadData() {
    getGalleryInfo().then(res => {
        listData.value = res.data
    })
}

function openAlbum(id) {
    console.log(id);
}

</script>

<style lang='scss' scoped></style>
