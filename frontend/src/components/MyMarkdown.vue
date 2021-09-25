<template>
	<div class="blog-content">
		<VueMarkdown v-bind="$props" />
	</div>
</template>
<script>
import VueMarkdown from 'vue-markdown'
import Prism from 'prismjs'
import 'prismjs/themes/prism-okaidia.css'

export default {
	components: {
		VueMarkdown
	},

	props: {
		...VueMarkdown.props,
		emoji: {
			default: false,
			type: Boolean
		},
		html: {
			default: false,
			type: Boolean
		}
	},

	mounted() {
		this.$nextTick(() => {
			Prism.highlightAll()
		});
	}
}
</script>
