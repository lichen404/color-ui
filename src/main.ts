import {createApp} from 'vue';
import App from './App.vue';
import './lib/color.scss';
import './index.scss';
import router from './router';
import 'github-markdown-css';
import Markdown from './components/Markdown.vue'
import Button from './lib/Button/Button.vue'
import Switch from './lib/Switch/Switch.vue'
import Dialog from './lib/Dialog/Dialog.vue'
import Tabs from './lib/Tabs/Tabs.vue'
import Tab from './lib/Tabs/Tab.vue'


const app = createApp(App);
app.use(router);
app.component('Markdown',Markdown)
app.component('Button',Button)
app.component('Switch',Switch)
app.component('Dialog',Dialog)
app.component('Tabs',Tabs)
app.component('Tab',Tab)
app.mount('#app');
