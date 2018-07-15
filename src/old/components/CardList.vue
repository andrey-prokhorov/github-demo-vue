<template>
  <div>
    <div class="new-user">
      <input type="text" v-model="username" placeholder="Github username" />
      <button type="submit" @click="getUser">Add card</button>
    </div>

    <div class="summary" v-if="hasUsers">
      Number of users: {{ numberOfUsers }}
    </div>

    <Card
      v-for="user in users"
      :key="user.id"
      :user="user"
    />
  </div>
</template>

<script>
import Card from '@/components/Card'
import { mapGetters } from 'vuex'

export default {
  components: {
    Card
  },
  data() {
    return {
      username: ''
    }
  },
  computed: {
    ...mapGetters('user', ['users', 'hasUsers', 'numberOfUsers'])
  },
  methods: {
    getUser() {
      this.$store.dispatch('user/getUser', this.username).catch(error => {
        console.error(error)
      })
    }
  }
}
</script>

<style>
.new-user {
  margin-bottom: 30px;
}
</style>
