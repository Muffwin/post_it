<template>
  <div :class="{ full: isFull }">
    <h1>{{ elem.title }}</h1>
    <p :class="{desc : !isFull}">{{ elem.desc }}</p>
    <font-awesome-icon
      v-if="isFull === true"
      class="binNote"
      :icon="['fas', 'trash-alt']"
      @click="deleteNote"
      size="5x" />
  </div>

</template>

<script>
import axios from 'axios'

export default {
  name: 'Note',
  props: {
    elem: Object,
    full: Boolean
  },
  data() {
    return {
      isFull: this.full
    }
  },
  methods: {
    deleteNote() {
      var res = confirm("Do you wish to delete this note ?")
      if (!res) return
      axios({
        method: 'delete',
        url: `http://5.135.119.239:3090/notes/${this.$route.params.id}`,
      })
      .then(() => this.$router.push('/'))
    }
  }
}
</script>

<style scoped>
.full {
  width: 900px;
  height: 600px;
}
.binNote {
  margin-left: 90%;
  margin-top: 45%;
  color: red;
}
.desc {
  overflow: hidden;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
}
div {
  width: 300px;
  height: 200px;
  padding: 15px;
  background-color: yellow;
  box-shadow: 10px 10px 5px grey;
  display: inline-block;
  margin: 20px;
  
}
</style>