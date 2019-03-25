import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

Vue.prototype.$axios = Axios;
Vue.config.productionTip = false;


Vue.filter('forTimeData', (string) => {
    if (!string) {
        return ''
    }
    let oldTime = new Date(string).getTime();
    let time = new Date().getTime() - oldTime
    if (time < 0) {
        return ''
    } else if (time / 1000 < 30) {
        return '刚刚'
    } else if (time / 1000 < 60) {
        return parseInt(time / 1000) + '秒前'
    } else if((time/60000 < 60)){
        return parseInt(time/60000) + '分钟前'
    } else if(time/3600000 < 24){
        return parseInt(time/3600000) + '小时前'
    } else if(time/86400000 < 31){
        return parseInt(time/86400000) + '天前'
    }  else if(time/2592000000 < 12){
        return parseInt(time/2592000000) + '月前'
    } else{
        return parseInt(time/31536000000) + '年前'
    }
})
Vue.filter('tabFormatter',function (post) {
    if(post.top == true){
        return '置顶'
    }else if(post.good == true){
        return '精华'
    }else if(post.tab == 'ask'){
        return '问答'
    }else if(post.tab == 'share'){
        return '分享'
    }else{
        return '招聘'
    }
})
new Vue({
    router,
    render: h => h(App)
}).$mount('#app')
