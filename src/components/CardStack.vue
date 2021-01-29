<template>
    <div class="wallet">
      <ul>
        <li @click="activeCard(index)" v-for="(card, index) in cards" :key="card.number">
          <card class="my-card"
            :cardHolder="card.cardHolder" 
            :cardNumber="card.cardNumber"
            :month="card.month"
            :year="card.year"
            :vendor="card.vendor"
          ></card>
        </li>
      </ul>
    </div>
</template>

<script>
import Card from './Card.vue'
export default {
    data(){
      return{
        cards: this.$root.cards
      }
  },
  
  components: { Card },
    
    methods: {

    activeCard(index) {
      this.$emit('selectedActive', index)
    },
  },    
}
</script>

<style scope>

li {
  display: flex;
  justify-content: center;
}

ul {
  list-style-type: none;
}

.wallet {
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  position: relative;
}

.my-card {
  cursor: pointer;
  margin-bottom: -120px;
}

</style>