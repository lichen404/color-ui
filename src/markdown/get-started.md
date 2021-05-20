## 开始使用

### 引入 Color-UI

```js
import '@lichen404/color-ui/package/lib/color-ui.css'
import colorUI from '@lichen404/color-ui'
import App from './App.vue'
import {createApp} from 'vue'

const app = createApp(App)
app.use(colorUI, {
    colors: {
        // 配置不同主题的 rgb 色值，支持以下五种属性
        primary: '25,128,255',
        danger: '255,71,87',
        success: '70,201,58',
        dark: '30,30,30',
        warning: '255,186,0'
    }
})
app.mount('#app')
```

### 引入单个组件
以 Button 组件为例：
```js
import '@lichen404/color-ui/package/lib/color-ui.css'
import {Button} from '@lichen404/color-ui'
import App from './App.vue'
import {createApp} from 'vue'

const app = createApp(App)
// 单独引入不支持配置主题色，将使用默认的主题颜色
app.use('Button',Button)
app.mount('#app')
```

