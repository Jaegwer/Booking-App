<template>
  <div class="bg-white py-24 sm:py-32">
    <div
      class="mx-auto grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 px-6 sm:gap-y-16 lg:grid-cols-2 lg:px-8"
    >
      <article
        v-for="post in featuredPosts" :key="post.id"
        class="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-lg"
      >
        <time
          :datetime="featuredPost.datetime"
          class="block text-sm leading-6 text-gray-600"
          >{{ featuredPost.date }}</time
        >
        <h2
          id="featured-post"
          class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
        >
          {{ post.content }}
        </h2>
        <p class="mt-4 text-lg leading-8 text-gray-600">{{ featuredPosts.content }}</p>
        <div
          class="mt-4 flex flex-col justify-between gap-6 sm:mt-8 sm:flex-row-reverse sm:gap-8 lg:mt-4 lg:flex-col"
        >
          <div class="flex">
            <a
              :href="featuredPost.href"
              class="text-sm font-semibold leading-6 text-indigo-600"
              aria-describedby="featured-post"
              >Continue reading <span aria-hidden="true">&rarr;</span></a
            >
          </div>
          <div class="flex lg:border-t lg:border-gray-900/10 lg:pt-8">
            <a
              :href="featuredPost.author.href"
              class="flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
            >
              <img
                :src="featuredPost.author.imageUrl"
                alt=""
                class="h-6 w-6 flex-none rounded-full bg-gray-50"
              />
              {{ featuredPost.author.name }}
            </a>
          </div>
        </div>
      </article>
      <div
        class="mx-auto w-full max-w-2xl border-t border-gray-900/10 pt-12 sm:pt-16 lg:mx-0 lg:max-w-none lg:border-t-0 lg:pt-0"
      >
        <div class="-my-12 divide-y divide-gray-900/10">
          <article v-for="item in nonFeaturedPosts" class="py-12">
			{{ item.content }}
            <div class="group relative max-w-xl">
              <time
                :datetime="post.datetime"
                class="block text-sm leading-6 text-gray-600"
                >{{ post.date }}</time
              >
              <h2
                class="mt-2 text-lg font-semibold text-gray-900 group-hover:text-gray-600"
              >
                <a :href="post.href">
                  <span class="absolute inset-0" />
                  {{ post.title }}
                </a>
              </h2>
              <p class="mt-4 text-sm leading-6 text-gray-600">
                {{ item.content }}
              </p>
            </div>
            <div class="mt-4 flex">
              <a
                :href="post.author.href"
                class="relative flex gap-x-2.5 text-sm font-semibold leading-6 text-gray-900"
              >
                <img
                  :src="post.author.imageUrl"
                  alt=""
                  class="h-6 w-6 flex-none rounded-full bg-gray-50"
                />
                {{ post.author.name }}
              </a>
            </div>
          </article>
        </div>
      </div>
    </div>
  </div>
  <div v-if="featuredPosts">
  <div v-for="post in featuredPosts" :key="post.id">
    <p>{{ post.content }}</p>
  </div>
</div>
<div v-else>
  <p>No featured posts available.</p>
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
onMounted(async () => {
  data.value = await fetchData();
  console.log(featuredPosts);
   filterPost();
});

const posts = [
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  {
    id: 2,
    title: "Boost your conversion rate",
    href: "#",
    description:
      "Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel iusto corrupti dicta laboris incididunt.",
    date: "Mar 10, 2020",
    datetime: "2020-03-16",
    author: {
      name: "Lindsay Walton",
      href: "#",
      imageUrl:
        "https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    },
  },
  // More posts...
];
</script>

<style lang="scss" scoped></style>
