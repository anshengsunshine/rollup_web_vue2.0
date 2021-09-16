# rollup_web_vue2.0
用于测试 <-- `rollup_test` / `ansheng-lib`   --> 打包后的效果  
`rollup_test` ：本地打包测试  
`ansheng-lib` ：npm打包测试

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


## 测试包  

### 本地测试  

`npm link ansheng-lib`  

`src/main.js`  
import AnshengLib from 'ansheng-lib'
Vue.use(AnshengLib)

`views/Home.vue`  
`<asl-hello></asl-hello>`  
`<asl-test></asl-test>`  

