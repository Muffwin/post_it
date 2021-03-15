<template>
<div>
  <img alt="Vue logo" src="../assets/logo.png">
  <div class="notes">
    <Note @click="disp_note(item)" v-for="item in postList" :full=false :elem="{id: item.id, title: item.title, desc: item.desc}" :key="item.id" />
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
  mounted() {
    // if (localStorage.postList) {
    //   this.postList = JSON.parse(localStorage.postList)
    // }
  },
  watch: {
    postList(newPostList) {
      localStorage.postList = newPostList
    }
  },
  data() {
    return {
      postList: [
        {id: 0, title: 'Première note', desc: 'Je suis une note !'},
        {id: 1, title: 'Deuxième note', desc: 'Salut les amigos'},
        {id: 2, title: 'Troisième note', desc: 'Vuejs c\'est pas si mal en fait'},
        {id: 3, title: 'Quatrième note', desc: 'Dédicace à WIWI'},
        {id: 4, title: 'Première note', desc: 'Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !Je suis une note !'},
      ]
    }
  },
  methods: {
    test() {
      this.postList.push({id: this.postList.length, title: 'New note', desc: 'C\'est comme le new coke mais c\'est la new note lol'})
      //console.log(this.postList.handler)
      //localStorage.postList = JSON.stringify(this.postList)
      //alert("lol")
    },
    disp_note(id) {
      this.$router.push('/note/' + JSON.stringify(id));
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