// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api
import '~/assets/style.scss';

import DefaultLayout from "~/layouts/Default.vue";
import InstantSearch from 'vue-instantsearch';

export default function (Vue) {
  Vue.component("Layout", DefaultLayout);
	Vue.use(InstantSearch);
}
