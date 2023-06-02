<template>
  <h1>This is a transaction Details Page {{ id }}</h1>
  <div v-if="transaction">
    Category: {{ transaction.category }} <br/>
    Comments: {{ transaction.comments }} <br/>
    Type: {{ transaction.type }} <br/>
    Total: {{ transaction.total }} <br/>
    Date: {{ transaction.date }} <br/>
  </div>
  <div v-else>
    Loading...
  </div>

  <button @click="back">Back</button>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      transaction: null
    }
  },
  mounted() {
    fetch('http://localhost:3000/transactions/' + this.id)
      .then(res => res.json())
      .then(data => this.transaction = data)
      .catch(err => console.log(err))
  },
  methods: {
    back() {
      this.$router.go(-1)
    }
  }
}
</script>

<style>

</style>