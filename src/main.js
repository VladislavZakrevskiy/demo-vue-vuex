import { createApp } from 'vue'
import App from './App.vue'
import UI from './components/UI'
import { router } from './router/router'
import directives from './directives'
import store from './store'

const app = createApp(App)

UI.forEach(ui => app.component(ui.name, ui))

directives.forEach(dir => app.directive(dir.name, dir))

app
    .use(store)
    .use(router)
    .mount('#app')
