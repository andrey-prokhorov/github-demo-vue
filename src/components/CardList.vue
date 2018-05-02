<template>
  <div>
    <div class="new-user">
      <input type="text" v-model="username" placeholder="Github username" />
      <button type="submit" @click="getUser">Add card</button>
    </div>
    <Card
      v-for="card in cards"
      :key="card.id"
      :card="card"
    />
  </div>
</template>

<script>
import Card from '@/components/Card'
import { getGithubUser } from '@/api'

export default {
  components: {
    Card
  },
  data() {
    return {
      username: '',
      cards: []
    }
  },
  methods: {
    getUser() {
      getGithubUser(this.username).then(response => {
        console.log(response)
        this.cards.push(response.data)
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
