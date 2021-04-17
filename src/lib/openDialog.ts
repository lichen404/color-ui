import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
    const {title, content,closeOnClickOverlay} = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                closeOnClickOverlay,
                'onUpdate:visible': (newVisible) => {
                    if (!newVisible) {
                        app.unmount();
                        div.remove();
                    }
                }
            }, {
                title, content
            });
        }
    });
    app.mount(div);
};
