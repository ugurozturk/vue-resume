// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueAnalytics from 'vue-analytics'

Vue.config.productionTip = false

// Configuration VueAnalytics
Vue.use(VueAnalytics, {
    id: 'UA-42442811-12',
    router
})

/* eslint-disable no-new */
new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App }
})
