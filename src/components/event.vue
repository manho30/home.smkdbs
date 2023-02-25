<template>
  <div class="bg-white py-5 pb-8">
    <div class="container mx-auto px-4 pt-3">
      <h2 class="text-2xl font-extrabold mb-4">Recent Event</h2>
      <ol class="ml-1 relative border-l-2 border-gray-300">
        <li v-for="(event, index) in events" :key="index" class="mt-3 mb-10 ml-6 border-solid rounded-md p-4 hover:shadow-lg cursor-pointer">
          <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white">
            <svg aria-hidden="true" class="w-3 h-3 text-blue-800" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path>
            </svg>
          </span>
          <h3 class="flex-col items-center mb-1 text-lg font-bold text-gray-900">
            {{ event.title }}
            <div class="flex flex-row">
              <span v-if="isEventHappeningNow(event)" class="mr-1 bg-green-100 text-green-800 text-xs font-medium px-2 py-0.5 rounded">Held Today</span>
              <span v-if="isEventDueTomorrow(event)" class="mr-1 bg-yellow-100 text-yellow-800 text-xs font-medium px-2 py-0.5 rounded">End tomorrow</span>
              <span v-if="isEventHappeningTomorrow(event)" class="mr-1 bg-blue-100 text-blue-800 text-xs font-medium 2 px-2 py-0.5 rounded">Coming tomorrow</span>
              <span v-if="isEventDue(event)" class="mr-1 bg-red-100 text-red-800 text-xs font-medium px-2 py-0.5 rounded">Ended</span>
              <span v-if="!isEventHappeningNow(event) && !isEventDue(event)" class="ml-1 bg-indigo-100 text-indigo-800 text-xs font-medium px-2 py-0.5 rounded">Coming Soon</span>

            </div>
          </h3>
          <time class="block mb-2 text-sm font-normal leading-none text-gray-400">{{getDateString(index)}} </time>
          <p class="mb-4 text-base font-normal text-gray-500">{{ event.description }}</p>
        </li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'event',
  data() {
    return {
      events: [
        {
          title: "First",
          date: "March 1, 2022",
          due: "February 24, 2023",
          description: "This website still in development",
          ended: null,
          link: "#",
        },
        {
          title: "Second",
          date: "February 23, 2023",
          due: "February 27, 2023",
          description: "All the data is fake",
          ended: null,
          link: "#",
        },
        {
          title: "Third",
          date: "February 22, 2023",
          due: "February 26, 2023",
          description: 'Hello World',
          ended: null,
          link: "#",
        },
      ],
    };
  },
  mounted() {
    this.sortDateFromNewest();
    this.determineEventPast();
  },
  methods: {
    /**
     * Sorts the events by date from newest to oldest
     * @return {[{date: string, link: string, description: string, title: string},{date: string, link: string, description: string, title: string},{date: string, link: string, description: string, title: string}]}
     */
    sortDateFromNewest() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.events.sort((a, b) => new Date(b.date) - new Date(a.date));
    },

    /**
     * Gets the date string for the event
     * @param index
     * @return {string}
     */
    getDateString(index) {
      const event = this.events[index];
      if (event.ended) {
        return `Ended on ${event.due}`;
      }

      const eventDate = new Date(event.date);
      const eventDue = new Date(event.due);
      const today = new Date();

      if (eventDate.getTime() === eventDue.getTime()) {
        return `On ${eventDate.toLocaleDateString()}`;
      }

      if (eventDate.toDateString() === today.toDateString()) {
        return `Today`;
      }

      if (eventDate.getFullYear() === eventDue.getFullYear()) {
        return `${eventDate.toLocaleDateString()} - ${eventDue.toLocaleDateString({ month: "short", day: "numeric" })}`;
      }

      return `${eventDate.toLocaleDateString()} - ${eventDue.toLocaleDateString()}`;
    },

    /**
     * Checks if the event is happening now
     * @param {{date: string}} event
     * @return {boolean}
     */
    isEventHappeningNow(event) {
      if (!event.ended) return true;
    },

    /**
     * Checks if the event is happening tomorrow
     * @param {{date: string}} event
     * @return {boolean}
     */
    isEventHappeningTomorrow(event) {
      const today = new Date();
      const eventDate = new Date(event.date);
      return today.getDate() + 1 === eventDate.getDate() && today.getMonth() === eventDate.getMonth() && today.getFullYear() === eventDate.getFullYear();
    },

    isEventDueTomorrow(event) {
      const today = new Date();
      const eventDate = new Date(event.due);
      return today.getDate() + 1 === eventDate.getDate() && today.getMonth() === eventDate.getMonth() && today.getFullYear() === eventDate.getFullYear();
    },

    isEventDue(event) {
      return event.ended;
    },

    /**
     * Checks if the event has ended
     * @return {void}
     */
    determineEventPast() {
      const today = new Date();
      this.events.forEach((event) => {
        const eventDue = new Date(event.due);
        if (today.getTime() > eventDue.getTime()) {
          event.ended = true;
        }
      });
    },
  },
};
</script>
