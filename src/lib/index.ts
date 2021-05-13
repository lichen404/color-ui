import Switch from './Switch/Switch.vue';
import Button from './Button/Button.vue';
import Tabs from './Tabs/Tabs.vue';
import Tab from './Tabs/Tab.vue';
import Dialog from './Dialog/Dialog.vue';
import {openDialog} from './Dialog/openDialog';
import "./color.scss";
export {default as Switch} from './Switch';
export {default as Button} from './Button';
export {default as Tabs} from './Tabs';
export {default as Dialog} from './Dialog';
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
