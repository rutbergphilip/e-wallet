<template>
    <form @submit.prevent>
    
        <div class="cardNumber">
          <label for="number">CARD NUMBER</label>
          <input @input="number" v-model="cardForm.cardNumber" maxlength="19" type="text" id="number" placeholder="xxxx xxxx xxxx xxxx">
        </div>

        <div class="cardHolder">
          <label for="holder">CARDHOLDER</label>
          <input @input="holder" v-model="cardForm.cardHolder" maxlength="25" type="text" id="holder" placeholder="Name on card">
        </div>

        <div class="month-year">
          <div class="month">
            <label for="month">MONTH</label>
            <select @change="month" v-model="cardForm.month" type="text" id="month">
              <option value="" disabled selected hidden>MM</option>
              <option value="01">01</option>
              <option value="02">02</option>
              <option value="03">03</option>
              <option value="04">04</option>
              <option value="05">05</option>
              <option value="06">06</option>
              <option value="07">07</option>
              <option value="08">08</option>
              <option value="09">09</option>
              <option value="10">10</option>
              <option value="11">11</option>
              <option value="12">12</option>
            </select>
          </div>

          <div class="year">
            <label for="year">YEAR</label>
            <select @change="year" v-model="cardForm.year" type="text" id="year">
              <option value="" disabled selected hidden>YY</option>
              <option value="21">21</option>
              <option value="22">22</option>
              <option value="23">23</option>
              <option value="24">24</option>
              <option value="25">25</option>
            </select>
          </div>
        </div>

        <div class="vendor">
          <label for="vendor">VENDOR</label>
          <select ref="selectedVendor" @change="vendor" v-model="cardForm.vendor" type="text" id="vendor">
            <option value="empty" disabled selected hidden>Vendor</option>
            <option value="bitcoin">Bitcoin</option>
            <option value="blockchain">Blockchain</option>
            <option value="ninja">Ninja</option>
            <option value="evil">Evil</option>
          </select>
        </div>

        <router-link :to="{name: 'Home'}">
          <button class="add-card" @click="submitCard">ADD CARD</button>
        </router-link>

      </form>
</template>

<script>
export default {
    data(){
        return{
            cardForm: {
              cardHolder: "",
              cardNumber: "",
              month: "",
              year: "",
              vendor: "empty",
            },
        }
    },
    methods: {
        holder() {
            this.$root.cardForm.cardHolder = this.cardForm.cardHolder
        },
        number() {
            this.cardForm.cardNumber = this.cardForm.cardNumber.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
            this.$root.cardForm.cardNumber = this.cardForm.cardNumber
        },
        month() {
            this.$root.cardForm.month = this.cardForm.month
        },
        year() {
            this.$root.cardForm.year = this.cardForm.year
        },
        vendor() {
            this.$root.cardForm.vendor = this.cardForm.vendor
        },

        submitCard() {
          try {
            this.$root.cards.push({
                cardHolder: this.cardForm.cardHolder,
                cardNumber: this.cardNumSpacing(this.cardForm.cardNumber),
                month: this.cardForm.month,
                year: this.cardForm.year,
                vendor: this.cardForm.vendor,
                chip: this.cardForm.chip
            })
          } catch (err) {
            console.log(err)
          } finally {
            this.$root.cardForm.cardHolder = ""
            this.$root.cardForm.cardNumber = ""
            this.$root.cardForm.month = ""
            this.$root.cardForm.year = ""
            this.$root.cardForm.vendor = "empty"
          }
        },

        cardNumSpacing(s) {
          return s.toString().replace(/\d{4}(?=.)/g, '$& ');
        },
      }
    }
</script>

<style>

/* -------------------------------------------- */

form {
    height: fit-content;
    width: fit-content;
  }

  input[type=text]:focus{
  outline: 1px solid #3498db; 
}

  select[type=text]:focus{
  outline: 1px solid #3498db; 
}
 
  button[type=text]:focus{
  outline: 1px solid #3498db; 
}

button:focus {
  outline: 0;
}

  .cardNumber, .cardHolder, .month, .year, .vendor {
    padding: 1rem;
  }

    .add-card {
    cursor: pointer;
    border: 1px solid #3498db; 
    background-color: transparent; 
    height: 60px; 
    width: 250px; 
    color: #3498db; 
    font-size: 1rem;
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
    margin-top: 20px;
    -moz-transition: all 0.2s ease-in;
    -o-transition: all 0.2s ease-in;
    -webkit-transition: all 0.2s ease-in;
    transition: all 0.2s ease-in;
  }

  .add-card:hover {
  border-color: #3498db;
  text-shadow:0px 0px 30px #3498db;
  -moz-transition: all 0.2s ease-in;
  -o-transition: all 0.2s ease-in;
  -webkit-transition: all 0.2s ease-in;
  transition: all 0.2s ease-in;
}

  input, label {
    display: block;
    text-align: left;
  }

  .cardNumber {
    display: flex;
    flex-direction: column;
  }

  .vendor {
    display: flex;
    flex-direction: column;
  }

  label[for="number"] {
    display: flex;
    text-align: left;
  }

  #number {
    border: 1px solid #3498db; 
    background-color: transparent; 
    height: 30px; 
    width: 433px; 
    color: #3498db; 
    font-size: 1rem;
    padding-left: 10px; 
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
  }

  #holder {
    border: 1px solid #3498db; 
    background-color: transparent; 
    height: 30px; 
    width: 433px;
    color: #3498db; 
    font-size: 1rem;
    padding-left: 10px; 
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
  }

  #month, #year {
    cursor: pointer; 
    border: 1px solid #3498db; 
    background-color: transparent; 
    height: 30px; 
    width: 200px; 
    color: #3498db; 
    font-size: 1rem;
    padding-left: 10px; 
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
  }

  #vendor {
    cursor: pointer;
    border: 1px solid #3498db; 
    background-color: transparent; 
    height: 30px; 
    width: 433px;
    color: #3498db; 
    font-size: 1rem;
    padding-left: 10px; 
    box-shadow: 0 3px 3px rgba(0, 0, 0, 0.6);
  }

  .month-year {
    display: flex;
    flex-direction: row;
  }

</style>