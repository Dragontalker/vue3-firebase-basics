const app = Vue.createApp({
  data() {
    return {
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45
    }
  },

  methods: {
    changeTitle() {
      console.log('Your clicked me!')
    }
  }
})

app.mount('#app')