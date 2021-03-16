<template>
  <Note :elem="elem" :full=true />
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
        elem: [{title: "", desc: ""}]
      }
    },
  mounted() {
    //console.log("http://5.135.119.239:3090");
    axios
      .get('http://5.135.119.239:3090/notes/' + this.$route.params.id)
      .then(response => {
        var res = response.data.note
        console.log(res)
        this.elem = {title: res["title"], desc: res["content"][0], id: res["_id"]}
        //console.log({title: res[id]["title"], desc: res[id]["content"][0]})
      })
  }
}
</script>
