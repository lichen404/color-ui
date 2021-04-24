import Home from '../views/Home.vue';
import Doc from '../views/Doc.vue';
import SwitchDemo from '../components/switchDemo/SwitchDemo.vue';
import ButtonDemo from '../components/buttonDemo/ButtonDemo.vue';
import DialogDemo from '../components/dialogDemo/DialogDemo.vue';
import TabsDemo from '../components/tabsDemo/TabsDemo.vue';
import {createRouter, createWebHashHistory} from 'vue-router';
import Markdown from '../components/Markdown.vue';
import {h} from 'vue';

const md = filename => h(Markdown, {
    path: `../markdown/${filename}.md`,
    key: filename
});
const history = createWebHashHistory();
const router = createRouter({
    history,
    routes: [
        {path: '/', component: Home},
        {
            path: '/doc', component: Doc,
            children: [
                {path: '', redirect: '/doc/intro'},
                {path: 'intro', component: md('intro')},
                {path: 'get-started', component: md('get-started')},
                {path: 'install', component: md('install')},
                {
                    path: 'switch', component: SwitchDemo
                },
                {
                    path: 'button', component: ButtonDemo
                },
                {
                    path: 'dialog', component: DialogDemo
                },
                {
                    path: 'tabs', component: TabsDemo
                }
            ]
        }
    ]
});


export default router;
