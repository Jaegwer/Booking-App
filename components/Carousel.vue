
import type { NuxtImg } from '#build/components';
<template>
      <div>
        <splide :options="options">
        <splide-slide>
            <h1>boo1</h1>
           <img src="/placeholder.jpg" />
        </splide-slide>
        <splide-slide>
            <h1>boo2</h1>
            <img src="/placeholder.jpg" />
        </splide-slide>
        <splide-slide>
            <h1>boo3</h1>
			<img src="/placeholder.jpg" />
        </splide-slide>
        </splide>
    </div>
</template>

<script setup>
import { ref } from 'vue';
const options = ref({
	type: 'loop',
	perPage: 1,
	autoplay: true,
	pauseOnHover: false,
	resetProgress: false,
	arrows: true,
	pagination: false,
	speed: 1000,
	interval: 3000,
	lazyLoad: 'nearby',
	breakpoints: {
		640: {
			perPage: 1,
		},
		768: {
			perPage: 1,
		},
		1024: {
			perPage: 1,
		},
	},
});
</script>

<style lang="scss" scoped></style>
