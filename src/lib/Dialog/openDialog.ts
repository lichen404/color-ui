import Dialog from './Dialog.vue';
import {createApp, h} from 'vue';

export const openDialog = (options) => {
    const {title, content,closeOnClickOverlay,onCancel,onAccept} = options;
    const div = document.createElement('div');
    document.body.appendChild(div);
    const app = createApp({
        render() {
            return h(Dialog, {
                visible: true,
                closeOnClickOverlay,
                title,
                'onUpdate:visible': (newVisible) => {
                    if (!newVisible) {
                        app.unmount();
                        div.remove();
                    }
                },
                onAccept,
                onCancel,
            }, {
                 content
            });
        }
    });
    app.mount(div);
};
