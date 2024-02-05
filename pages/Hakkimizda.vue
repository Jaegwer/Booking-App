<template>
  <div class="bg-black">
    <Banner />
    <div class="container mt-10">
      <div v-for="value in data" :key="value.id">
        <div class="grid grid-cols-4 gap-4">
          <div class="col-start-2 col-span-3 text-white">
            <h1 class="text-white text-4xl">SEYİRCİ İLETİŞİM MERKEZİ</h1>
            <p class="text-xl pt-5">{{ value.address }}</p>
            <p class="text-xl mt-5">Telefon:</p>
            <a :href="'tel:' + value.phone" class="text-blue block mt-2 text-xl">
              {{ value.phone }}
            </a>
            <p class="text-xl mt-5">E-posta:</p>
            <a :href="'mailto:' + value.mail" class="text-blue block mt-2 text-xl">
              {{ value.mail }}
            </a>
            <h1 class="text-4xl mt-20">{{ value.title }}</h1>
            <p class="text-2xl mt-10">{{ value.content }}</p>
          </div>
        </div>
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
  const q = collection(db, "AboutUs");
  const querySnapshot = await getDocs(q);
  const fetchedData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return fetchedData;
};
onMounted(async () => {
  data.value = await fetchData();
  console.log(data);
});
</script>

<style lang="scss" scoped></style>
