<template>
  <div class="wrapper">
    <h1>Wallet</h1>
    <br>
    <div class="selected-card">
        <ul>
          <li v-for="card in cards" :key="card.number">
            <card v-if="card == setActiveCard"
              :cardHolder="card.cardHolder"
              :cardNumber="card.cardNumber"
              :month="card.month"
              :year="card.year"
              :vendor="card.vendor"
            ></card>
          </li>
        </ul>
      <card-stack
        @selectedActive="writeCard"
      ></card-stack>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue"
import CardStack from '../components/CardStack.vue'
export default {
  data(){
    return{
      cards: this.$root.cards,
      setActiveCard: this.$root.cards[0]
    }
  },

  components: {
    Card,
    CardStack
  },

  methods: {
    writeCard(index) {
      this.setActiveCard = this.$root.cards[index]
    }
  }
}
</script>

<style>

</style>