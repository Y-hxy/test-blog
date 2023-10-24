<template>
    <div class="hxy-main p-5">
        <ComicItem :comicData="listData" />
    </div>
</template>

<script setup>
import { getComicInfo } from '@/api'
import { onMounted, ref } from 'vue';
import ComicItem from './components/comicItem'

const listData = ref([])

onMounted(() => {
    loadData()
})

function loadData() {
    getComicInfo().then(res => {
        listData.value = res.data
    })
}
</script>

<style lang="scss" scoped></style>
