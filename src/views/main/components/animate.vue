<template>
  <div class="jackpot">
    <div class="up-icon"></div>
    <div class="dwon-icon"></div>
    <div class="list flex">
      <div ref="itembox" class="item-box" v-for="item of list">
        <div class="item flex items-center justify-center">{{ item.name }}</div>
      </div>
    </div>
  </div>
  <div class="flex justify-center pointer" @click="prizeDraw">
    点击打开
  </div>
</template>

<script setup>
import { ref, reactive, onMounted, nextTick } from 'vue'
import anime from 'animejs';

const itembox = ref(null)

const pageData = reactive({
  name: "Monster",
  price: "0.6",
  prizes: [
    { id: 1, name: "奖品1", odds: 5 },
    { id: 2, name: "奖品2", odds: 5 },
    { id: 3, name: "奖品3", odds: 5 },
    { id: 4, name: "奖品4", odds: 15 },
    { id: 5, name: "奖品5", odds: 20 },
    { id: 6, name: "奖品6", odds: 25 },
    { id: 7, name: "奖品7", odds: 25 },
  ],
})

// 奖池列表
const list = ref([])

// 乱序
const randomSort = () => {
  return Math.random() > 0.5 ? -1 : 1;
}

onMounted(getOdds)

// 根据概率odds生成奖池列表
function getOdds() {
  const { prizes } = pageData
  prizes.forEach(item => {
    for (let i = 0; i < item.odds; i++) {
      list.value.push(item)
    }
  })
  list.value = list.value.sort(randomSort)
}

// 开始抽奖
function prizeDraw() {
  
  anime({
    targets: '.list',
    translateX: translateX(),
    duration: 6000,
    easing: 'cubicBezier(0,.88,.32,.99)'
  })
}

// 计算横移量15
function translateX() {
  // 获取奖品宽度
  const width = itembox.value[0].clientWidth
  // 获取范围随机数
  const random = getRandom(60, 80)

  return -width * random + 5
}

// 生成范围随机数
function getRandom(min, max) {
  const float = Math.random()
  const diff = max - min
  // 介于 0 和差值之间的随机数
  const random = Math.round(diff * float) + min

  return random
}
</script>

<style lang='scss' scoped>
.jackpot {
  width: 100%;
  overflow-y: auto;
  position: relative;
  padding: 20px 0;

  .up {
    position: absolute;
    top: 190px;
    left: 50%;
    margin-left: -5px;
  }

  .dwon-icon {
    position: absolute;
    top: 5px;
    left: 50%;
    margin-left: -5px;
    width: 0;
    height: 0;
    border-top: 10px solid cadetblue;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid transparent;
  }

  .up-icon {
    position: absolute;
    top: 195px;
    left: 50%;
    margin-left: -5px;
    width: 0;
    height: 0;
    border-top: 10px solid transparent;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid cadetblue;
  }

  .item-box{
    flex: 0 0 180px;
    padding: 0 5px;
    .item {
      height: 180px;
      background-color: bisque;
    }
  }

}

.jackpot::-webkit-scrollbar {
  display: none;
}
</style>
