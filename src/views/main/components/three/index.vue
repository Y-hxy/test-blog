<template>
    <div class="hxy-main" ref="hxyMain"></div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import * as THREE from 'three'
import gsap from 'gsap'
import * as dat from 'dat.gui'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls'

const hxyMain = ref(null)

onMounted(() => {
    createScene()
})

function createBox() {
    // 创建场景
    const scene = new THREE.Scene()
    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    // 移动相机
    camera.position.set(10, 10, 10)
    // 添加相机到场景中
    scene.add(camera)

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
    const cube = new THREE.Mesh(geometry, material);
    scene.add(cube);

    // 初始化渲染器
    const renderer = new THREE.WebGL1Renderer()
    // 设置渲染尺寸大小
    renderer.setSize(980, 500)
    // 将webgl渲染的canvas内容添加到body
    hxyMain.value.appendChild(renderer.domElement);
    // 使用渲染器，通过相机将场景渲染出来
    renderer.render(scene, camera)
}

function createScene() {
    // 创建场景
    const scene = new THREE.Scene()

    // 创建相机
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
    // 移动相机
    camera.position.set(10, 10, 10)

    // 添加相机到场景中
    scene.add(camera)

    // 创建几何体
    // const cubeGeometry = new THREE.BoxGeometry(2, 2, 2)
    // 创建材质
    // const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xffff00 })
    // 创建物体
    // const cube = new THREE.Mesh(cubeGeometry, cubeMaterial)
    // 移动物体
    // cube.position.set(5, 0, 0)
    // 旋转物体
    // cube.rotation.set(1, 0, 0)
    // 缩放物体
    // cube.getWorldScale.set(3, 2, 1)

    const geometry = new THREE.SphereGeometry(5, 11, 5);
    const material = new THREE.MeshBasicMaterial({ color: 0xffff00 });
    const cube = new THREE.Mesh(geometry, material);
    // 添加几何体到场景中
    scene.add(cube);
    // scene.add(cube)

    // 创建控制器
    const gui = new dat.GUI();
    // 设置移动几何体
    gui.add(cube.position, 'x')
        .min(0)
        .max(8)
        .step(0.01)
        .name('移动X轴')
        .onChange((value) => {
            console.log(`值被修改: ${value}`);
        })
        .onFinishChange((value) => {
            console.log(`完全停下来：${value}`);
        })
    // 设置修改颜色
    gui.addColor({ color: '#ffff00' }, 'color')
        .name('修改颜色')
        .onChange((value) => {
            cube.material.color.set(value)
        })
    // 设置选项框
    gui.add(cube, 'visible').name("是否显示")
    // 设置点击事件
    const obj = {
        fn: () => {
            // 设置动画
            var animate1 = gsap.to(cube.position, {
                x: 8,
                duration: 5, // 运动时长
                repeat: -1, // 重复次数，无限次-1
                yoyo: true,// 往返运动
                delay: 1,// 延迟2秒运动
            })
        }
    }
    gui.add(obj, 'fn').name('点击运动')

    // 初始化渲染器
    const renderer = new THREE.WebGL1Renderer()
    // 设置渲染尺寸大小
    renderer.setSize(980, 500)
    // 将webgl渲染的canvas内容添加到body
    hxyMain.value.appendChild(renderer.domElement);
    // 使用渲染器，通过相机将场景渲染出来
    renderer.render(scene, camera)

    // 创建轨道控制器
    const controls = new OrbitControls(camera, renderer.domElement)
    // 设置控制器阻尼
    controls.enableDamping = true
    // 添加坐标轴辅助器
    const axesHelper = new THREE.AxesHelper(8)
    // 添加辅助器到场景
    scene.add(axesHelper)

    function animate() {
        controls.update()
        requestAnimationFrame(animate)
        // 旋转物体
        cube.rotation.x += 0.01
        cube.rotation.y += 0.01
        renderer.render(scene, camera);
    }
    animate()
}







</script>

<style lang='scss' scoped></style>
