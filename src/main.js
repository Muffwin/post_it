import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faTrashAlt, faEdit)

createApp(App).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
