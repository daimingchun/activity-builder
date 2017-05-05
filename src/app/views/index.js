import Vue from 'vue';
import App from './App.vue';
import Workspace from './Workspace.vue';
import TplLib from './TplLib.vue';
import store from './store';
import VueRouter from 'vue-router';
import support from '../support';
import './style/font-awesome.css';
import 'element-ui/lib/theme-default/index.css';
import ElementUI from 'element-ui';

support.initDB();
Vue.use(ElementUI);
Vue.use(VueRouter);
const router = new VueRouter({
	routes: [
		{ 
			path: '/', 
			component: Workspace
		},
		{
			path: '/tplLib',
			component: TplLib
		}
	]
});
new Vue({
	store,
	router,
	el: '#app',
	render: h => h(App)
});
