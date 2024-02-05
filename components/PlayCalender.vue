<script setup>

import { ref, onMounted } from "vue";
import { getFirestore, collection, getDocs } from "firebase/firestore";
import FullCalendar from "@fullcalendar/vue3";
import dayGridPlugin from "@fullcalendar/daygrid";
import trLocale from "@fullcalendar/core/locales/tr";





const formatTimestamp = (timestamp) => {
  const milliseconds = timestamp.seconds * 1000 + timestamp.nanoseconds / 1e6;
  const dateObject = new Date(milliseconds);
  const year = dateObject.getFullYear();
  const month = dateObject.getMonth() + 1;
  const day = dateObject.getDate();
  const hours = dateObject.getHours();
const minutes = dateObject.getMinutes();
  return `${year}-${month < 10 ? "0" + month : month}-${
    day < 10 ? "0" + day : day
  } ${hours}:${minutes}`;
};
const calendarOptions = {
  plugins: [dayGridPlugin],
  initialView: "dayGridMonth",
  locale: trLocale,
  events: async function (info, successCallback, failureCallback) {
    const db = getFirestore();
    const q = collection(db, "Calendar");
     querySnapshot = await getDocs(q);
    let events = [];

    querySnapshot.docs.forEach((doc) => {
      events.push({ title: doc.title,
			start: formatTimestamp(doc.date),
		});
    });

    successCallback(events);
  }
};


onMounted(async() => {

  console.log(calendarOptions.events);
});
</script>
<template>
	<div class="bg-black">
		<FullCalendar :options='calendarOptions' />
	</div>

</template>