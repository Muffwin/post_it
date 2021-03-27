<template>
<div class="container">
    <div class="row justify-content-md-center">
        <div class="mb-3">
            <label for="noteControlInput" class="form-label">Titre de la note</label>
            <input v-model="formdata.title" type="text" class="form-control" id="note" placeholder="Mon titre">
        </div>
        <div class="mb-3">
            <label for="noteTextArea" class="form-label">Contenu de la note</label>
            <textarea v-model="formdata.content" class="form-control" id="note" rows="3"></textarea>
        </div>
    </div>
    <button type="submit" @click="createNote" class="btn btn-primary">Submit</button>
</div>
</template>

<script>
    export default {
        name: 'Form',
        data() {
            return {
                formdata: {
                    title: this.pTitle,
                    content: this.pContent
                }
            }
        },
        props: {
            pTitle: String,
            pContent: String
        },
        methods: {
            createNote() {
                this.$emit('clickForm', this.formdata);
            }
        }
    }
</script>


