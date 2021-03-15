<template>
    <div :class="{ full: isFull }">
      <h1>{{ elem.title }}</h1>
      <p :class="{desc : !isFull}">{{ elem.desc }}</p>
    </div>
</template>

<script>
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
  mounted() {
    console.log(this.elem.id);
    console.log(this.full)
  }
}
</script>

<style scoped>
.full {
  width: 900px;
  height: 600px;
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