import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
require('vue-component-lib-with-storybook/dist/dummylib.css')

createApp(App).use(router).mount('#app')
