import Switch from './Switch.vue';
import Button from './Button/Button.vue';
import Tabs from './Tabs.vue';
import Tab from './Tab.vue';
import Dialog from './Dialog.vue';
import {openDialog} from './openDialog';

export {default as Switch} from './Switch.vue';
export {default as Button} from './Button';
export {default as Tabs} from './Tabs.vue';
export {default as Dialog} from './Dialog.vue';
export {openDialog as openDialog} from './openDialog';
export default {
    install: (app, options) => {
        app.component('Tabs', Tabs);
        app.component('Tab', Tab);
        app.component('Dialog', Dialog);
        app.component('Button', Button);
        app.component('Switch', Switch);
        app.config.globalProperties.$dialog = openDialog;
        const {colors} = options;
        if (colors) {
            for (const color in colors) {
                if (colors.hasOwnProperty(color)) {
                    document.documentElement.style.setProperty(`--color-${color}`, colors[color]);
                }
            }
        }

    }
};
