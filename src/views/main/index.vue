<template>
    <div class="hxy">
        <photo></photo>
        <tabs :name="tabName" @change="tabChange"></tabs>
        <div>
            <keep-alive>
                <component :is="currentTab"></component>
            </keep-alive>
        </div>
    </div>
</template>

<script setup>
import { ref, markRaw, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import photo from '@/components/photo'
import tabs from '@/components/tabs'
import mine from './components/mine'
import comic from './components/comic'
import gallery from './components/gallery'
import three from './components/three'

const route = useRoute()
const router = useRouter()
const tabName = ref(route.query.name || 'mine')
const tabList = {
    home: '',
    mine: markRaw(mine),
    comic: markRaw(comic),
    gallery: markRaw(gallery),
    three: markRaw(three)
}

const currentTab = computed(() => {

    return tabList[tabName.value]
})

function tabChange(name) {
    console.log(name);
    if (name !== 'home') {
        tabName.value = name
    } else {
        router.push({
            path: '/home'
        })
    }
}

</script>

<style lang='scss' scoped>
.hxy{
    padding-top: 100px;
}
</style>
