<template>
  <h1 class="text-white text-2xl flex justify-center mt-5">
    <span class="lg:border-yellow lg:border-b">HABERLER</span>
  </h1>
  <div class="bg-gray py-24 sm:py-32">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8"
    >
      <article
        v-if="featuredPosts"
        v-for="post in featuredPosts"
        class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg"
      >
        <div
          class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col"
        >
          <div class="flex lg:border-t lg:border-yellow lg:pt-8">
            <img
              :src="post.url"
              alt=""
              class="rounded-md flex-none bg-gray-50"
            />
          </div>
          <time
            :datetime="post.date"
            class="block text-sm leading-6 text-light-gray"
            >{{ formatTimestamp(post.date) }}</time
          >
          <p class=" text-lg leading-8 text-white">
            {{ post.content }}
          </p>
        </div>
      </article>
      <div
        class="mx-auto w-full max-w-2xl border-t border-yellow pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0"
      >
        <div class="-my-12 divide-y divide-yellow">
          <article
            v-for="post in nonFeaturedPosts"
            :key="post.id"
            class="py-12"
          >
            <div class="group relative max-w-xl"></div>
            <div class="mt-4 flex">
              <img
                :src="post.url"
                alt=""
                class="h-72 w-72 flex-none rounded-md bg-gray-50"
              />
              <p class="mt-2 text-lg text-white group-hover:text-gray-600">
                <span class="a" />
                <time
                  :datetime="post.datetime"
                  class="block text-sm leading-6 text-light-gray"
                  >{{ formatTimestamp(post.date) }}</time
                >
                {{ post.content }}
              </p>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
const data = ref([]);
const featuredPosts = ref([]);
const nonFeaturedPosts = ref([]);
const fetchData = async () => {
  const db = getFirestore();
  const q = collection(db, "News");
  const querySnapshot = await getDocs(q);
  const fetchedData = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return fetchedData;
};
const filterPost = () => {
  featuredPosts.value = data.value.filter((item) => item.featured === true);
  nonFeaturedPosts.value = data.value.filter((item) => item.featured !== true);
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
  console.log(data);
  filterPost();
});
</script>

<style lang="scss" scoped></style>
