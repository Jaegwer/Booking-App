<template>
  <footer class="bg-gray" aria-labelledby="footer-heading">
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-2 xl:gap-8">
        <div class="space-y-8">
          <div
            class="rounded-md grid grid-cols-3 divide-x-2 bg-yellow w-48 p-3 gap-2"
          >
            <img
              class="h-12 w-24 rounded-md"
              src="/logo.jpeg"
              alt="Company name"
            />
            <p class="text-black font-bold">İMALATHANE SAHNE</p>
          </div>

          <p class="text-md leading-6 text-white italic">
            `Herkes bir hikaye anlatıcısıdır, tiyatro ise bu hikayeleri sahneye
            taşır.`
          </p>
          <p class="text-sm text-white">Stella Adler</p>
          <div class="flex space-x-6">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-yellow"
            >
              <span class="sr-only">{{ item.name }}</span>
              <component :is="item.icon" class="h-12 w-12" aria-hidden="true" />
            </a>
          </div>
        </div>
        <div class="mt-16 xl:mt-0">
          <div class="md:grid md:grid-cols-6 md:gap-8">
            <div class="col-span-3">
              <ul role="list" class="mt-6 space-y-4">
                <li v-for="item in data" :key="item.name">
                  <NuxtLink
                    :to="item.link"
                    class=" leading-6 text-white hover:text-dark-yellow"
                    >{{ item.name }}</NuxtLink
                  >
                </li>
              </ul>
            </div>
            <div class="mt-10 md:mt-0 col-span-3">
              <ul role="list" class="mt-6 space-y-4">
                <li>
                  <h1 class="font-semibold leading-6 text-white text-xl">
                    {{ contact.Header }}
                  </h1>
                  <p class=" leading-6 text-white mt-5 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="{1.5}"
                      stroke="currentColor"
                      class="w-6 h-6 text-yellow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                      />
                    </svg>

                    <span>{{ contact.Address }}</span>
                  </p>
                  <p class=" leading-6 text-white mt-5 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="{1.5}"
                      stroke="currentColor"
                      class="w-6 h-6 text-yellow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                      />
                    </svg>

                    <a
                      class="hover:text-yellow"
                      :href="'mailto:' + contact.Mail"
                      >{{ contact.Mail }}</a
                    >
                  </p>
                  <p class=" leading-6 text-white mt-5 flex">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="{1.5}"
                      stroke="currentColor"
                      class="w-6 h-6 text-yellow"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                      />
                    </svg>
                    <a
                      class="hover:text-yellow"
                      :href="'tel:' + contact.Phone"
                      >{{ contact.Phone }}</a
                    >
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
        <p class="text-xs leading-5 text-light-gray">
          &copy; {{ getCurrentYear() }}
          <a href="https://www.ufukcetin.dev" target="_blank">Ufuk ÇETİN</a> ,
          Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { defineComponent, h } from "vue";
import { getFirestore, collection, getDocs, doc } from "firebase/firestore";
const navigation = {
  social: [
    {
      name: "Instagram",
      href: "https://www.instagram.com/imalathanesahne?igsh=a2N0cHM5c25pczk%3D",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              "fill-rule": "evenodd",
              d: "M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z",
              "clip-rule": "evenodd",
            }),
          ]),
      }),
    },
    {
      name: "Twitter",
      href: "#",
      icon: defineComponent({
        render: () =>
          h("svg", { fill: "currentColor", viewBox: "0 0 24 24" }, [
            h("path", {
              d: "M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84",
            }),
          ]),
      }),
    },
  ],
};

const getCurrentYear = () => {
  return new Date().getFullYear();
};
const fetchData = async () => {
  const db = getFirestore();

  const firstCollectionPath = "Footer";
  const firstDocumentId = "8o62p8aqdRqOuvp5SfJ6";
  const secondCollectionPath = "Links";

  const firstCollectionRef = collection(db, firstCollectionPath);
  const firstDocumentRef = doc(firstCollectionRef, firstDocumentId);
  const secondCollectionRef = collection(
    firstDocumentRef,
    secondCollectionPath
  );

  const querySnapshot = await getDocs(secondCollectionRef);

  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return data;
};
const fetchSmt = async () => {
  const db = getFirestore();
  const collectionRef = collection(db, "Footer");
  const querySnapshot = await getDocs(collectionRef);

  const feet = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return feet;
};
const feet = ref([]);
const data = ref([]);
let contact = ref([]);
onMounted(async () => {
  data.value = await fetchData();
  feet.value = await fetchSmt();
});
watch(feet, (newFeet) => {
  contact.value = newFeet[2] || {};
});
</script>
