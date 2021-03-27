<template>
<div>
  <img alt="Vue logo" src="../assets/logo.png">
  <div class="notes">
    <Note @click="dispNote(item.id)" v-for="item in postList" :full=false :elem="{id: item.id, title: item.title, desc: item.desc}" :key="item.id" />
  </div>
  <h3 @click="showNoteForm" :style="{cursor: 'pointer'}">Add a post-it</h3>
  <Form v-if="showForm === true" @clickForm="addNote"/>
</div>
</template>

<script>
// @ is an alias to /src
import Note from '@/components/Note.vue'
import Form from '@/components/Form.vue'
import axios from 'axios'

export default {
  name: 'Home',
  components: {
    Note, Form
  },
  mounted() {
    this.getData();
  },
  data() {
    return {
      postList: [],
      showForm: false
    }
  },
  methods: {
    showNoteForm() {
      this.showForm = !this.showForm
    },
    addNote(params) {
      axios({
        method: 'post',
        url: 'http://5.135.119.239:3090/notes',
        data: {
          title: params.title,
          content: [
            params.content
          ]
        }
      }).then(() => {
        this.showForm = false
        this.getData()
      })
    },
    dispNote(id) {
      this.$router.push('/note/' + id);
    },
    getData() {
    this.postList = [];
    axios
    .get('http://5.135.119.239:3090/notes')
    .then(response => {
      response.data.notes.forEach((item) =>{
        this.postList.push({id: item["_id"], title: item["title"], desc: item["content"][0]})
      })
    })
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