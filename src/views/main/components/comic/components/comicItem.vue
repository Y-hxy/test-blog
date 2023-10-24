<template>
    <div class="box">
        <div class="box-item flex pointer p-10px mb-5 relative rounded-6px overflow-hidden text-#333"
            v-for="(item, index) in comicData" @mouseenter="getMousePointion">
            <div class="release-circle" :style="{ top: mouseY, left: mouseX }"></div>
            <div class="relative flex">
                <div class="cover w-200px h-268px rounded-6px overfolw-hidden">
                    <img :src="item.cover" alt="">
                </div>
                <div class="flex-1 pl-15px">
                    <div class="flex">
                        <div class="text-18px font-bold mr-30px">{{ item.title }}</div>
                        <div class="flex items-end">
                            <span class="tags text-12px rounded-4px mr-10px" v-for="icon in item.label">{{ icon }}</span>
                        </div>
                    </div>
                    <div class="flex items-center text-12px pt-15px pb-15px">
                        <div class="mr-15px">{{ item.staTime }}</div>
                        <div class="mr-10px">{{ item.season }}</div>
                        <div>{{ item.playType }}，{{ item.episodeAll }}</div>
                    </div>
                    <div class="text-13px leaing-20px pr-50px mb-5">
                        <div class="text-14px mb-5px">角色声优：</div>
                        <span class="mr-15px" v-for="li in item.userList">{{ li }}</span>
                    </div>
                    <div class="text-13px leaing-20px pr-50px">
                        <span>{{ item.text }}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const mouseX = ref('50%')
const mouseY = ref('50%')

const props = defineProps({
    comicData: Array
})

function getMousePointion(event){
    mouseX.value = `${event.layerX}px`
    mouseY.value = `${event.layerY}px`
}

</script>

<style lang="scss" scoped>
.box {
    .box-item {
        transition: .4s;

        .release-circle {
            content: "";
            position: absolute;
            top: 50%;
            left: 50%;
            width: 0;
            height: 0;
            border-radius: 50%;
            transition: width 1s, height 1s;
            background: #69bda8;
            transform: translate3d(-50%, -50%, 0);
            will-change: left, top;
        }

        .cover {
            border: 3px solid #FFFFFF;
            box-sizing: border-box;

            img {
                width: 100%;
                height: 100%;
            }
        }

        .tags {
            color: #555555;
            padding: 1px 3px;
            border: 1px solid #555555;
        }
    }

    .box-item:hover {
        color: #FFFFFF;
        // box-shadow: 0 0px 32px #bababa;

        .release-circle {
            width: 2100px;
            height: 2100px;
        }
        .tags{
            color: #f8f8f8;
            border-color: #f8f8f8;
        }
    }
}
</style>
