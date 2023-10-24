<template>
	<div id="hxy">
		<RouterView></RouterView>
		<Audio />
	</div>
</template>

<script setup>
import Audio from '@/components/audio'

</script>

<style lang="scss">
@import '@/assets/styles/config.scss';

#hxy {
	width: 100%;
	height: 100vh;
	position: fixed;
	left: 0;
	top: 0;
	overflow: auto;
	background-image: url(./assets/images/gallery/bg.jpg);
	background-size: cover;
	background-position: center;
}

.hxy-main {
	width: $mainWidth;
	padding: 20px 10px;
	background-color: rgba(255, 255, 255);
	border-radius: 4px;
	// box-shadow: 0 0 8px rgba(0, 0, 0, .5);
	box-sizing: border-box;
	margin: 30px auto;
	overflow: hidden;
}
</style>
