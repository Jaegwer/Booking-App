<template>
	<div>
	  <splide :options="options">
		<splide-slide class="relative" v-for="item in data" :key="item.id">
		  <h1 class="absolute text-white bottom-20 left-0 text-3xl">{{ item.header }}</h1>
		  <img :src="item.url" />
		</splide-slide>
	  </splide>
	</div>
  </template>

  <script setup>
  import { ref, onMounted } from 'vue';
  import { getFirestore, collection, getDocs } from "firebase/firestore";

  const data = ref([]);
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

  const fetchData = async () => {
	const db = getFirestore();
	const q = collection(db, "Carousel");
	const querySnapshot = await getDocs(q);
	const fetchedData = querySnapshot.docs.map((doc) => ({
	  id: doc.id,
	  ...doc.data(),
	}));
	return fetchedData;
  };

  onMounted(async () => {
	data.value = await fetchData();
  });
  </script>

  <style  scoped>

  </style>
