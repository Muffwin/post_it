<template>
    <div>
        <h1>{{ data.title }}</h1>
        <p>{{ data.desc }}</p>
    </div>
</template>

<script>
export default {
  name: 'Note',
  props: {
    data: Object,
  },
}
</script>

<style scoped>
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