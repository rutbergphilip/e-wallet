<template>
    <div class="card-body" v-bind:class="vendor">
      
      <div class="chip-logo">
        <img v-if="vendor == 'bitcoin'" :src="require(`../assets/chip-dark.svg`)" alt="">
        <img v-else :src="require(`../assets/chip-light.svg`)" alt="">
        <img class="vendor-logo" :src="require(`../assets/vendor-${vendor}.svg`)" alt=""/>
      </div>
      <div class="card-number">
        <p class="card-number-text">{{cardNumber}}</p>
      </div>

      <div class="holder-expiry-wrapper">
        <div class="card-holder">
          <h6>CARDHOLDER NAME</h6>
          <h4>{{cardHolder.toUpperCase()}}</h4>
        </div>
        <div class="expiry">
          <h6>VALID THRU</h6>
          <h4>{{month}}/{{year}}</h4>
        </div>
      </div>

    </div>
</template>

<script>
export default {
  props: {
    cardNumber: {
      type: String,
      required: true,
    },
    cardHolder: {
      type: String,
      required: true,
    },
    month: {
      type: String,
      required: true,
    },
    year: {
      type: String,
      required: true,
    },
    vendor: {
      type: String,
      required: true,
    }
  },
};
</script>

<style scoped>
    .card-body {
      display: flex;
      flex-direction: column;
      width: 380px;
      height: 230px;
      border-radius: 10px;
      box-sizing: border-box;
      background-color: grey;
      box-shadow: rgb(37, 37, 37) 5px 5px 5px 5px; 
      padding: 1rem;
      position: relative;
    }

    .card-number {
      font-size: 28px;
      letter-spacing: 3px;
      margin-bottom: 30px;
      padding-top: 10px;
    }

    .card-holder {
      text-align: left;
    }

    .expiry {
      text-align: right;
    }

    .holder-expiry-wrapper {
      display: flex;
      justify-content: space-between;
    }

    .chip-logo {
      display: flex;
      justify-content: space-between;
      height: 100px;
      align-items: baseline;
    }

    .vendor-logo {
      align-self: end;
    }

    .ninja {
      background-color: #333333;
      color: #fff;
    }

    .bitcoin {
      background-color: #f7931a;
      color: #000;
    }

    .blockchain {
      background-color: #7f50e4;
      color: #fff;
    }

    .evil {
      background-color: #de2e4d;
      color: #fff;
    }
</style>