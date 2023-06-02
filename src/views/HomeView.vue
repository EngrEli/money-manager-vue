<template>
  <h1>Home</h1>
  <div v-for="transaction in transactions" :key="transaction.id">
    <TransactionSingle 
      :transaction="transaction"
    />
  </div>
</template>

<script>
import TransactionSingle from '../components/TransactionSingle.vue'

export default {
  name: 'HomeView',
  components: { TransactionSingle },
  data() {
    return {
      transactions: []
    }
  },
  mounted() {
    fetch('http://localhost:3000/transactions')
      .then(res => res.json())
      .then(data => this.transactions = data)
      .catch(err => console.log(err))
  }
}
</script>
