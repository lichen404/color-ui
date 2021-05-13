import Dialog from './Dialog.vue'
import {openDialog} from './openDialog';
export default (app)=>{
    app.component('Dialog',Dialog)
    app.config.globalProperties.$dialog = openDialog;
    const colors = {
        primary:'25,128,255',
        danger:'255,71,87',
        success:'70,201,58',
        dark:'30,30,30',
        warning:'255,186,0',
    }
    for(const color in colors){
        document.documentElement.style.setProperty(`--color-${color}`, colors[color]);
    }
}
