<template>
  <div>
    <select v-model="selected">
    <option disabled value="">Please select house number</option>
    <option v-for="n in 10" :key="n">House {{n}}</option>
    </select>
    <span>Selected: {{ selected }}</span>      
  </div>
</template>

<script>
export default {
  data() {
    return {
      selected: ''
    }
  }
}
</script>
