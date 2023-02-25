<template>
  <div class="bg-gray-100 py-4 pb-8">
    <div class="container mx-auto px-4 pt-3">
      <h2 class="text-3xl font-extrabold mb-4">Recent Announcements</h2>
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        <div v-for="announcement in sortedAnnouncements" :key="announcement.title" class="bg-white rounded-lg shadow-md p-4 hover:shadow-lg cursor-pointer" @click="goToAnnouncement(announcement)">
          <h3 class="text-lg font-bold mb-2">{{ announcement.title }}</h3>
          <p class="text-gray-600">{{ formatDate(announcement.date) }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'announcements',
  data() {
    return {
      announcements: [
        { title: 'Announcement 1', date: '2023-02-20', detailsUrl: '/announcement?id=1' },
        { title: 'Announcement 2', date: '2023-02-18', detailsUrl: '/announcement?id=2' },
        { title: 'Announcement 3', date: '2023-02-16', detailsUrl: '/announcement?id=3' }
      ]
    }
  },
  computed: {
    sortedAnnouncements() {
      // eslint-disable-next-line vue/no-side-effects-in-computed-properties
      return this.announcements.sort((a, b) => new Date(b.date) - new Date(a.date))
    }
  },
  methods: {
    formatDate(dateString) {
      const date = new Date(dateString)
      return `${date.toLocaleDateString()} ${date.toLocaleTimeString()}`
    },
    goToAnnouncement(announcement) {
      window.location.href = announcement.detailsUrl
    }
  }
}
</script>