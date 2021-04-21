const app = Vue.createApp({
  data() {
    return {
      showBooks: true,
      title: 'The Final Empire',
      author: 'Brandon Sanderson',
      age: 45,
      x: 0,
      y: 0
    }
  },

  methods: {
    toggleShowBooks() {
      this.showBooks = !this.showBooks
    },
    handleEvent(event) {
      console.log(event.type)
    },
    handleMouseMove(event) {
      this.x = event.offsetX
      this.y = event.offsetY
    }
  }
})

app.mount('#app')