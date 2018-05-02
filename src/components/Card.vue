<template>
  <div class="card">
    <img :src="card.avatar_url" alt="" class="avatar" />
    <div class="name">{{ card.name }}</div>
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
.avatar {
  width: 75px;
}

.name {
  font-weight: '700';
}

.card {
  padding: 15px;
}
</style>
