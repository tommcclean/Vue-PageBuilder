import Vue from 'vue';
import commonComponents from '@/components/renderers';

commonComponents.forEach(component => {
	Vue.component(component.name, component);
});
