<template>
  <Disclosure as="nav" class="bg-gray" v-slot="{ open }">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center">
          <div class="flex-shrink-0">
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
              alt="Your Company"
            />
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
              <NuxtLink
                to="/AboutUs"
                class="rounded-md px-3 py-2 font-medium text-white hover:text-dark-yellow"
                >Hakkımızda</NuxtLink
              >
              <NuxtLink
                to="/PlayList"
                class="rounded-md px-3 py-2 font-medium text-white hover:text-dark-yellow"
                >Oyunlar</NuxtLink
              >
            </div>
          </div>
        </div>
        <div class="hidden sm:ml-6 sm:block">
          <div class="flex items-center">
            <NuxtLink to="/Calendar">
              <button
                type="button"
                class="flex p-2 relative rounded-md bg-white bg-opacity-25 p-1 text-dark-yellow hover:bg-opacity-50"
              >
                <span class="absolute -inset-1.5" />
                <CalendarIcon class="h-6 w-6" aria-hidden="true" />
                <span class="">Oyun Takvimi</span>
              </button>
            </NuxtLink>
          </div>
        </div>
        <div class="-mr-2 flex sm:hidden">
          <!-- Mobile menu button -->
          <DisclosureButton
            class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
          >
            <span class="absolute -inset-0.5" />
            <span class="sr-only">Open main menu</span>
            <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
            <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
          </DisclosureButton>
        </div>
      </div>
    </div>

    <DisclosurePanel class="sm:hidden">
      <div class="space-y-1 px-2 pb-3 pt-2">
        <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
        <DisclosureButton
          as="a"
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Hakkımızda</DisclosureButton
        >
        <DisclosureButton
          as="a"
          href="#"
          class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
          >Oyunlar</DisclosureButton
        >
      </div>
      <div class="border-t border-gray-700 pb-3 pt-4">
        <div class="flex items-center px-5">
          <button
            type="button"
            class="relative ml-auto flex-shrink-0 rounded-full bg-gray-800 p-1 text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
          >
            <span class="absolute -inset-1.5" />
            <span class="sr-only">Oyun Takvimi</span>
            <CalendarIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
      </div>
    </DisclosurePanel>
  </Disclosure>
</template>

<script setup>
import { ref, computed, onMounted } from "vue";
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from "@headlessui/vue";
import {
  Bars3Icon,
  BellIcon,
  XMarkIcon,
  CalendarIcon,
} from "@heroicons/vue/24/outline";
const fetchData = async () => {
  const db = getFirestore();
  const collectionRef = collection(db, 'Navbar');
  const querySnapshot = await getDocs(collectionRef);

  const data = querySnapshot.docs.map(doc => ({
    id: doc.id,
    ...doc.data()
  }));

  return data;
};
const data = ref([]);
onMounted(async () => {
  data.value = await fetchData();
});
</script>

<style scoped></style>
