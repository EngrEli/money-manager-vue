<template>
  <div class="flex-transaction">
    {{ transaction.category }}
    {{ transaction.comments }}
    {{ transaction.total }}
  </div>
</template>

<script>
export default {
  props: ['transaction']
}
</script>

<style>

</style>