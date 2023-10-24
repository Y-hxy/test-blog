<template>
	<div class="hxy-main" ref="wrap">
		<div>
			<Animate></Animate>
		</div>
		<div v-if="createStatus" class="createpdf flex justify-end pointer" @click="createPDF">生成PDF简历</div>
		<div v-for="(item, index) in infoData">
			<div class="hxy-main-item-head">
				<div class="title-before">{{ item.title }}</div>
			</div>
			<div class="hxy-main-item-box">
				<!-- 个人信息 && 联系方式 -->
				<div class="flex flex-wrap w-full" v-if="item.type === 0">
					<div class="hxy-main-item-box-item" v-for="items in item.data">
						<div class="mr-10px">{{ items.title }}:</div>
						<div>{{ items.text }}</div>
					</div>
				</div>
				<!-- 个人优势 && 自我评价 -->
				<div class="text-14px" v-for="items in item.data" v-else-if="item.type == 1">{{ items }}</div>
				<!-- 工作经历 && 项目经历 -->
				<div class="text-14px mb-30px" v-for="items in item.data" v-else>
					<div class="flex justify-between mb-2">
						<div class="flex" v-if="item.type === 4">
							<div class="font-bold text-16px mr-5">{{ items.schoolName }}</div>
							<div class="mr-5">{{ items.diploma }}</div>
							<div>{{ items.subject }}</div>
						</div>
						<div class="flex" v-else>
							<div class="font-bold text-16px mr-5">{{ item.type === 2 ? items.companyName : items.projectName }}</div>
							<div>{{ items.position }}</div>
						</div>
						<div class="text-12px">{{ items.time }}</div>
					</div>
					<div v-if="item.type === 3">
						<div>
							<span class="font-bold">项目描述：</span><span>{{ items.projectDescribe }}</span>
						</div>
						<div>
							<span class="font-bold">项目职责：</span><span>{{ items.duty }}</span>
						</div>
						<div class="font-bold">主要技术：</div>
						<div v-for="skill in items.skill">{{ skill }}</div>
					</div>
					<div v-else v-for="text in items.content">{{ text }}</div>

				</div>
			</div>
		</div>
	</div>
</template>

<script setup>
import 'animate.css';
import { ref, onMounted, nextTick } from 'vue';
import { getMineInfo } from '@/api'
import PdfLoader from '@/utils/pdfLoad.js'
import Animate from './animate.vue'

const infoData = ref([])
const createStatus = ref(true)
const wrap = ref(null)

onMounted(() => {
	loadData()
})
const scrollContainer = document.querySelector('.scroll-container');
 
function sta() {
	scrollContainer.scrollLeft += 50;
}

// 加载页面数据
function loadData() {
	getMineInfo().then(res => {
		infoData.value = res.data
	})
}

// 生成PDF简历
function createPDF() {
	createStatus.value = false
	nextTick(() => {
		let pdf = new PdfLoader(wrap.value, '叶秀端个人简历', 'itemClass')
		pdf.getPDF(() => {
			createStatus.value = true
		})
	})
}
</script>

<style lang="scss" scoped>
.scroll-container {
  width: 500px;
  height: 200px;
  overflow-x: scroll;
}
 
.scroll-inner {
  display: flex;
  white-space: nowrap;
}
 
.item {
  width: 200px;
  height: 200px;
  line-height: 200px;
  text-align: center;
  font-size: 24px;
  background-color: #eee;
  margin-right: 20px;
}
.hxy {
	.hxy-main {
		padding: 20px;

		position: relative;

		.createpdf {
			position: absolute;
			right: 20px;
			top: 20px;
		}

		.hxy-main-item-head {
			display: flex;
			align-items: center;
			font-weight: bold;
			padding: 10px 0;
			justify-content: space-between;
			border-bottom: 1px solid #d3d3d3;
			margin-bottom: 20px;
		}

		.hxy-main-item-box {
			line-height: 30px;
			padding-left: 16px;
			margin-bottom: 30px;

			.hxy-main-item-box-item {
				width: 33.33%;
				height: 30px;
				display: flex;
				align-items: center;
				font-size: 14px;
			}
		}
	}
}
</style>
