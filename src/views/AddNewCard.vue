<template>
  <div class="wrapper">
    <main>
      <h1>ADD NEW CARD</h1>
      <br>
      <p>NEW CARD</p>
    </main>

    <section>

      <card
        :cardHolder="holder.toUpperCase()"
        :cardNumber="cardNumSpacing(number)"
        :month="month"
        :year="year"
        :vendor="vendor"
      ></card>

      <card-form/>
    </section>
  </div>
</template>

<script>
import Card from "@/components/Card.vue"
import CardForm from '../components/CardForm.vue'
export default {
  components: {
    Card,
    CardForm
  },

  computed: {
    holder() {
      return this.$root.cardForm.cardHolder
    },
    number() {
      return this.$root.cardForm.cardNumber
    },
    month() {
      return this.$root.cardForm.month
    },
    year() {
      return this.$root.cardForm.year
    },
    vendor() {
      return this.$root.cardForm.vendor
    }
  },

  methods: {
    cardNumSpacing(s) {
      return s.toString().replace(/\d{4}(?=.)/g, '$& ');
    },
  }
}

</script>

<style>

  section {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

</style>