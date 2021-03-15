<template>
<div>
  <img alt="Vue logo" src="../assets/logo.png">
  <div class="notes">
    <Note v-for="item in postList" :elem="{title: item.title, desc: item.desc}" :key="item" />
    <!-- <Note :data="{title: 'Première note', desc: 'Je suis une note !'}" />
    <Note :data="{title: 'Deuxième note', desc: 'Salut les amigos'}"/>
    <Note :data="{title: 'Troisième note', desc: 'Vuejs c\'est pas si mal en fait'}"/> -->
  </div>
  <h3 @click="test">Add a post-it</h3>
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
  },
  data() {
    return {
      postList: [
        {title: 'Première note', desc: 'Je suis une note !'},
        {title: 'Deuxième note', desc: 'Salut les amigos'},
        {title: 'Troisième note', desc: 'Vuejs c\'est pas si mal en fait'},
        {title: 'Quatrième note', desc: 'Dédicace à WIWI'},
      ]
    }
  },
  methods: {
    test() {
      alert('Alors, on attend pas fabrice ???')
    }
  }
}
</script>

<style scoped>
.home {
  display: inline-block;
}

#footer { 
    position: fixed; 
    padding: 10px 10px 0px 10px; 
    bottom: 0; 
    width: 100%; 
    /* Height of the footer*/  
    height: 40px; 
    background: grey; 
}
</style>