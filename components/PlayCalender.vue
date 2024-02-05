<script>
import FullCalendar from '@fullcalendar/vue3'
import dayGridPlugin from '@fullcalendar/daygrid'


export default {
  components: {
    FullCalendar
  },
  data: function() {
    return {
      calendarOptions: {
        plugins: [dayGridPlugin],
        initialView: 'dayGridMonth',
        weekends: true,
        events: [
          { title: 'Meeting', start: new Date() }
        ],
		locale: 'tr'
      }
    }
  }
}
</script>

<template>
	<div class="bg-black">
		<FullCalendar :options='calendarOptions' />
	</div>

</template>