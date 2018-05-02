<template>
  <div>
    <img :src="card.avatar_url" style="width: 75" alt="" />
    <div style="fontWeight: '700'">{{ card.name }}</div>
    <div>{{ card.company }}</div>
  </div>
</template>

<script>
export default {
  props: {
    card: { type: Object, required: true }
  }
}
</script>

<style>

</style>
