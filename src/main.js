import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

new Vue({
  data() {
    return {
      cardForm: {
          cardHolder: "",
          cardNumber: "",
          month: "",
          year: "",
          vendor: "empty"
      },
      cards: [
        {
          cardHolder: "Philip Rutberg",
          cardNumber: "1111 2222 3333 4444",
          month: "01",
          year: "22",
          vendor: "ninja"
        },
        {
          cardHolder: "Per Persson",
          cardNumber: "6543 4878 1238 4955",
          month: "09",
          year: "23",
          vendor: "bitcoin",
        }
      ]
    }
  },
  router,
  render: h => h(App)
}).$mount('#app')