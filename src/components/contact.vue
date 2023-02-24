<template>
  <div class="bg-gray-100 py-4 pb-8">
    <div class="container mx-auto px-4">
      <h2 class="text-2xl font-bold mb-3">Contact Us</h2>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div v-for="(contact, index) in contacts" :key="index" class="bg-white rounded-lg shadow-md p-4 focus:ring-2 ring-blue-500 hover:shadow-lg">
          <h3 class="text-lg font-bold mb-2">{{ contact.title }}</h3>
          <p class="text-gray-600">{{ contact.value }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'contact',
  data() {
    return {
      contacts: [
        { title: 'Phone', value: '123-456-7890', type: 'phone' },
        { title: 'Fax', value: '123-456-7891', type: 'fax' },
        { title: 'Email', value: 'info@example.com', type: 'email' }
      ],
    }
  },
}
</script>