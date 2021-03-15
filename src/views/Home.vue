<template>
<div>
  <img alt="Vue logo" src="../assets/logo.png">
  <div class="notes">
    <Note :data="{title: 'Première note', desc: 'Je suis une note !'}" />
    <Note :data="{title: 'Deuxième note', desc: 'Salut les amios'}"/>
    <Note :data="{title: 'Troisième note', desc: 'Vuejs c\'est pas si mal en fait'}"/>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
//import HelloWorld from '@/components/HelloWorld.vue'
import Note from '@/components/Note.vue'

export default {
  name: 'Home',
  components: {
    Note
  }
}
</script>

<style scoped>
.home {
  display: inline-block;
}
</style>