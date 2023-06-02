<template>
  <router-link :to="{ name: 'TransactionDetails', params: {id: transaction.id} }">
    <div class="flex-transaction">
      {{ transaction.category }}
      {{ transaction.comments }}
      {{ transaction.total }}
    </div>
  </router-link>
</template>

<script>
export default {
  props: ['transaction'],
}
</script>

<style>

</style>