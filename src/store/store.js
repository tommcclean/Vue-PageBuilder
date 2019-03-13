import Vue from 'vue';
import Vuex from 'vuex';

import editMode from '@/store/edit-mode-module.js';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		editMode
	}
});

export default store;