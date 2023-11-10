import Vue from 'vue';
import Element from 'element-ui'; // 引入elementUi，因为要用到elementui里的结构
import 'element-ui/lib/theme-chalk/index.css'

import hljs from 'highlight.js' //引入高亮js
import 'highlight.js/styles/googlecode.css' //引入高亮js样式文件

//正常情况引入yiui要根据目录../../一层一层去引入的，
//这里为了方便在yiui文件夹根目录下npm link一下，把yiui添加到本地全局，
//注意要以package.json里的name名字为准
//然后在yiui-doc文件夹下npm link yi-ui一下，把本地全局的yiui引入到文档项目下
//成功之后在yiui-doc下的nodemodule下就能看到这个yiui文件夹了(实际上是个链接，每次yiui文件夹改动了，这里的也会改动)
//这样就可以以下面一行的方式引用了
import yiUi from 'yi-ui' // 要编写对应的文档的包
import 'yi-ui/dist/yi-ui.css'
// 写了一个高亮指令，可以去解析pre code里面的标签，添加高亮
Vue.directive('highlight', function (el) {
  let blocks = el.querySelectorAll('pre code');
  blocks.forEach((block) => {
    hljs.highlightBlock(block)
  })
})
export default ({
  Vue,
  options,
  router,
  siteData
}) => {
  Vue.use(Element);
  Vue.use(yiUi) // 设置为全局组件
}