<template>
  <div>
    <input type="text" v-model="username" placeholder="Github username" />
    <button type="submit" @click="getUser">Add card</button>

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

// export const state = {
//   username: '',
//   cards: []
// }

export default {
  components: {
    Card
  },
  data: function() {
    return {
      username: '',
      cards: []
    }
  },
  methods: {
    getUser: function() {
      getGithubUser(this.username).then(response => {
        console.log(response)
        this.cards.push(response.data)
      })
    }
  }
}
</script>