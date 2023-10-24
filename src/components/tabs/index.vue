<template>
	<div class="flex items-center justify-center">
		<div class="item ml-5 mr-5 pointer" :class="{ 'show': tabName == item.name }" v-for="(item, index) in tabList"
			@click="toTab(item.name, index)">
			{{ item.text }}
		</div>
	</div>
</template>

<script setup>
import { getTabData } from '@/api'
import { ref, onMounted } from 'vue';

const emit = defineEmits()
const props = defineProps({
	name: String
})

const tabList = ref([])
const tabName = ref(props.name)

onMounted(() => {
	loadData()
})
function loadData() {
	getTabData().then(res => {
		tabList.value = res.data
	})
}
function toTab(name) {
	if (name != tabName.value) {
		tabName.value = name
		emit('change', name)
	}
}
</script>

<style lang="scss" scoped>
	.item {
		color: #DDDDDD;
	}

	.item:hover {
		color: #1890ff;
		text-decoration: underline;
	}

	.show {
		font-size: 14px;
		font-weight: bold;
		color: #DDDDDD !important;
		text-decoration: underline;
	}
</style>
