<template>
  <Note :elem=JSON.parse(this.$route.params.elem) :full=true />
</template>

<script>
import Note from '@/components/Note.vue'

export default {
  name: 'ViewNote',
  components: {
    Note,
  },
  data() {
    return {
        title: "",
        desc: ""
      }
    },
  mounted() {
    var data = JSON.parse(this.$route.params.elem);
    this.title = data["title"];
    this.desc = data["desc"];
  }
}
</script>
