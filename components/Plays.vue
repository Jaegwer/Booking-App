<template>
  <div class="bg-black">
    <h1 class="text-white text-2xl flex justify-center mt-5">
      <span class="lg:border-yellow lg:border-b">OYUNLAR</span>
    </h1>
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8"
      >
        <a v-for="play in data" :key="play.id" :href="play.link" target="_blank" class="group">
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg sm:aspect-h-3 sm:aspect-w-2"
          >
            <img
              :src="play.url"
              alt=""
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div
            class="mt-4 flex items-center justify-between text-base font-medium text-white"
          >
            <h3>{{ play.info }}</h3>
            <p>{{ formatTimestamp(play.date) }}</p>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const data = ref([]);
const fetchData = async () => {
  const db = getFirestore();
  const q = collection(db, "Plays");
  const querySnapshot = await getDocs(q);
  const fetchedData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return fetchedData;
};
const formatTimestamp = (timestamp) => {
  const milliseconds = timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6;
  const dateObject = new Date(milliseconds);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();

  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  } `;
};
onMounted(async () => {
  data.value = await fetchData();
});
</script>

<style lang="scss" scoped></style>
