<template>
  <Note :elem="apiData" :full=true />
</template>

<script>
import Note from '@/components/Note.vue'
import axios from 'axios'

export default {
  name: 'ViewNote',
  components: {
    Note,
  },
  data() {
    return {
        apiData: []
      }
    },
  mounted() {
    axios
      .get('http://5.135.119.239:3090/notes/' + this.$route.params.id)
      .then(response => {
        var res = response.data.note
        this.apiData = {title: res["title"], desc: res["content"][0], id: res["_id"]}
      })
  }
}
</script>
