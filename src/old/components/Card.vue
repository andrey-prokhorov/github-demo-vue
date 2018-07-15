<template>
  <div class="card">
    <img :src="user.avatar_url" alt="" class="avatar" />
    <div class="name">{{ user.name }}</div>
    <div>{{ user.company }}</div>
  </div>
</template>

<script>
export default {
  props: {
    user: { type: Object, required: true }
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
