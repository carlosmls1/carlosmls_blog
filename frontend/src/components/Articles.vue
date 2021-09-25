<template>
	<div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
		<Card
				v-for="article in Articles"
				:article="article"
				:key="article.id"
		/>
	</div>
</template>

<script>
import Card from "~/components/Card";

export default {
  props: {
    articles: Array,
  },
  components: {
    Card,
  },
  computed: {
    ArticlesCount() {
      return Math.ceil(this.articles.length);
    },
    Articles() {
      return this.articles;
    },
  },
};
</script>
