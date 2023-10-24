<template>
	<div>
		<div class="hxy-info-photo">
			<img :src="photoUrl" alt="">
		</div>
		<div class="hxy-info-name">叶秀端</div>
	</div>
</template>

<script setup>
import photoUrl from '@/assets/images/tx.jpg'

</script>

<style lang="scss" scoped>
.hxy-info-photo {
	width: 150px;
	height: 150px;
	margin: 0 auto;
	border-radius: 50%;
	overflow: hidden;

	img {
		width: 100%;
		height: 100%;
		opacity: .8;
	}
}

.hxy-info-name {
	margin: 30px 0;
	text-align: center;
	font-size: 16px;
	color: #FFFFFF;
}
</style>
