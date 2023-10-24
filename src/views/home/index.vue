<template>
    <div class="hxys">
        <div class="flex demo">
            <div class="demo-content m-20px" v-for="i in 8">
                <div class="box1">
                    <div v-for="(item, index) of iconList" class="hhd" :class="`rota${index}`"
                        :style="`transform: rotate(${item.rotate}deg);opacity: ${item.opacity}`">
                        <div class="img"></div>
                    </div>
                </div>
                <div class="icons"></div>
                <div class="pic"></div>
                <div class="uzi">
                    <img class="uziimg" src="../../assets/images/uzi.png" alt="">
                </div>
            </div>
        </div>
        <div class="box" :style="{ height: pageHeight + 'px' }">
            <div class="hxy-video">
                <div class="hxy-video-shade"></div>
                <video id="videoEl" class="hxy-video-bg" muted="muted" autoplay preload="auto" loop="loop"
                    :src="videoUrl"></video>
            </div>
            <div class="hxy-mains">
                <div class="hxy-main-photo">
                    <img :src="photoUrl" alt="">
                </div>
                <div class="hxy-main-tab">
                    <div class="hxy-main-tab-item" v-for="(item, index) in tabList" :key="index">
                        <div class="hxy-main-tab-item-text" @click="goItem(item.name)">{{ item.text }}</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { getData } from '@/api'
import { onMounted, reactive, ref } from 'vue'
import photoUrl from '@/assets/images/tx.jpg'
import videoUrl from '@/assets/video/1.mp4'
import { useRouter } from 'vue-router'

const router = useRouter()

const tabList = ref([])
const pageHeight = document.documentElement.clientHeight

const iconList = reactive([
    { rotate: 20, opacity: 1 },
    { rotate: 27, opacity: 0.9 },
    { rotate: 34, opacity: 0.8 },
    { rotate: 41, opacity: 0.7 },
    { rotate: 48, opacity: 0.6 },
    { rotate: 55, opacity: 0.5 },
    { rotate: 62, opacity: 0.4 },
])

onMounted(() => {
    getData().then(res => {
        tabList.value = res.data
    })

})

function goItem(name) {
    router.push({
        name: 'main',
        query: {
            name
        }
    })
}

function play() {
    const videoEl = document.querySelector('#videoEl')
    videoEl.play()
}
</script>

<style lang="scss" scoped>
@import '@/assets/styles/config.scss';

.demo{
    position: fixed;
    z-index: 2;
}
.demo-content {
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 200px;
    height: 200px;
    background: url("@/assets/images/bg.png") no-repeat;
    background-size: 100% 100%;

    .Collimator {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        z-index: 4;
        opacity: 0;
        -webkit-transform: scale(.1);
        -ms-transform: scale(.1);
        transform: scale(.1);
        -webkit-transition: .5s;
        -o-transition: .5s;
        transition: .5s;
    }

    .Collimator::after {
        display: block;
        content: "";
        position: absolute;
        left: -0.1vw;
        top: -0.1vw;
        width: 100%;
        height: 100%;
        background: url("@/assets/images/icon1.png") no-repeat;
        background-size: contain;
    }

    .outside_box {
        transform-origin: 0.52vw 5.73vw;
        width: 0.52vw;
        height: 11.98vw;
        position: absolute;
        left: 50%;
        margin-left: -0.26vw;
        top: 50%;
        margin-top: -5.99vw;
        transition: all 1s ease;
        z-index: 3;

        .outside {
            width: 100%;
            height: 100%;
            z-index: 10;
            text-align: center;
            padding-top: 0.94vw;
            -webkit-box-sizing: border-box;
            box-sizing: border-box;
        }

    }
}

.demo-content:hover .Collimator {
    opacity: 1;
}

.hxys {
    .box {
        position: relative;

        .hxy-video {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;

            .hxy-video-shade {
                position: absolute;
                top: 0;
                left: 0;
                width: 100%;
                height: 100%;
                background-color: rgba(0, 0, 0, .4);
            }

            .hxy-video-bg {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }
        }

        .hxy-mains {
            // width: $mainWidth;
            padding: 200px;
            margin: 0 auto;
            position: relative;
            z-index: 1;

            .hxy-main-photo {
                width: 200px;
                height: 200px;
                margin: 0 auto;
                border-radius: 50%;
                overflow: hidden;

                img {
                    width: 100%;
                    height: 100%;
                    opacity: .8;
                }
            }

            .hxy-main-name {
                font-size: 18px;
                color: #fff;
                text-align: center;
                padding: 15px 0;
            }

            .hxy-main-tab {
                margin-top: 100px;
                display: flex;
                justify-content: space-around;

                .hxy-main-tab-item {
                    flex: 1;
                    color: #FFFFFF;
                    font-size: 14px;
                    text-align: center;
                    display: flex;
                    align-items: center;
                    justify-content: center;

                    .hxy-main-tab-item-text {
                        width: 50%;
                        height: 100%;
                        line-height: 30px;
                        border-radius: 20px;
                        box-shadow: 0 0 20px #555555;
                        background: rgba(0, 0, 0, .5);
                        cursor: pointer;
                    }

                    .hxy-main-tab-item-text:hover {
                        box-shadow: 0 0 20px #999999;
                        background: rgba(0, 0, 0, .7);
                    }
                }
            }
        }
    }
}
</style>

<style lang="scss" scoped>
@import '/src/assets/styles/animate.scss';

.box1 {
    position: relative;
    width: 200px;
    height: 200px;
    z-index: 111;

    .hhd {
        position: absolute;
        top: 10px;
        left: 96px;
        width: 8px;
        height: 180px;

        .img {
            width: 6px;
            height: 20px;
            border-radius: 2px;
            background-color: #ffc400;
        }
    }
}

.pic {
    width: 200px;
    height: 200px;
    background: url("@/assets/images/bg1.png") no-repeat;
    position: absolute;
    left: -10px;
    top: 40px;
    background-size: 110%;
    z-index: 1;
}

.uzi {
    width: 200px;
    position: absolute;
    top: 40px;
    z-index: 3;

    .uziimg {
        width: 200px;
    }
}

.icons {
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 2;
    opacity: 0;
    transform: scale(.1);
    transition: .5s;
}

.icons::after {
    display: block;
    content: "";
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    background: url("@/assets/images/icon1.png") no-repeat;
    background-size: contain;
}

.hhd {
    animation-iteration-count: 1;
}

.demo-content:hover .icons {
    opacity: 1;
    animation: iconss 1.6s linear infinite;
    animation-direction: alternate;
}

.demo-content:hover .uzi {
    animation: uzi 1.6s linear infinite;
    animation-direction: alternate;
}

.demo-content:hover .rota0 {
    animation: hhd0 .81s linear infinite;
    animation-iteration-count: 1;
    animation-timing-function: ease-out;
}

.demo-content:hover .rota1 {
    animation: hhd1 .81s linear infinite;
    animation-iteration-count: 1;
    animation-delay: 30ms;
    animation-timing-function: ease-out;
}

.demo-content:hover .rota2 {
    animation: hhd2 .81s linear infinite;
    animation-iteration-count: 1;
    animation-delay: 60ms;
    animation-timing-function: ease-out;
}

.demo-content:hover .rota3 {
    animation: hhd3 .81s linear infinite;
    animation-iteration-count: 1;
    animation-delay: 90ms;
    animation-timing-function: ease-out;
}

.demo-content:hover .rota4 {
    animation: hhd4 .81s linear infinite;
    animation-iteration-count: 1;
    animation-delay: 120ms;
    animation-timing-function: ease-out;
}

.demo-content:hover .rota5 {
    animation: hhd5 .81s linear infinite;
    animation-iteration-count: 1;
    animation-delay: 150ms;
    animation-timing-function: ease-out;
}

.demo-content:hover .rota6 {
    animation: hhd6 .81s linear infinite;
    animation-iteration-count: 1;
    animation-delay: 160ms;
    animation-timing-function: ease-out;
}
</style>
