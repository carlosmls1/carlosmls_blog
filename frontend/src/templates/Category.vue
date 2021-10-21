<template>
	<Layout
			:title="$page.strapi.categories[0].name"
	>

		<div class="mx-10 w-full bg-white p-12 my-6 dark:bg-gray-800">
			<ais-instant-search
					:routing="routing"
					:search-client="searchClient" index-name="dev_blog">

				<div class="header flex items-end justify-between mb-12">
					<div class="title">
						<p class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
							Blog
						</p>
						<p class="text-2xl font-light text-gray-400">
							Check Out our latest news cat
						</p>
					</div>
					<div class="text-end">
						<ais-search-box>
							<template v-slot="{ currentRefinement, isSearchStalled, refine }">


								<form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
									<div class=" relative ">
										<input
												type="search"
												:value="currentRefinement"
												@input="refine($event.currentTarget.value)"
												id="form-subscribe-Search"
												class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white dark:bg-gray-800"
												placeholder="Search here"/>
									</div>
									<button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
										<span :hidden="!isSearchStalled">Loading...</span>
										<span :hidden="isSearchStalled">Search</span>

									</button>
								</form>
							</template>
						</ais-search-box>
					</div>
				</div>
				<ais-hits>
					<template v-slot="{ items }">
						<Articles :articles="items" />
					</template>
				</ais-hits>
				<ais-pagination>
					<template
							v-slot="{
							currentRefinement,
							nbPages,
							pages,
							isFirstPage,
							isLastPage,
							refine,
							createURL,
							nbHits,
							padding
						}"
					>
						<nav class="px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-10" aria-label="Pagination">
							<div class="hidden sm:block">
							</div>
							<div class="flex-1 flex justify-between sm:justify-end">
								<a v-if="!isFirstPage"
									 :href="createURL(currentRefinement - 1)"
									 @click.prevent="refine(currentRefinement - 1)"
									 class="dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50">
									Previous
								</a>
								<a v-if="!isLastPage"
									 :href="createURL(currentRefinement + 1)"
									 @click.prevent="refine(currentRefinement + 1)"
									 class="dark:text-white dark:bg-gray-800 dark:hover:bg-gray-700 ml-3 relative inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
								>
									Next
								</a>
							</div>
						</nav>
					</template>
				</ais-pagination>

			</ais-instant-search>
		</div>
	</Layout>
</template>

<page-query>
query($slug: String!) {
  strapi {
    categories(where: { slug: $slug }) {
      name
    }
  }
}
</page-query>

<script>
import algoliasearch from 'algoliasearch/lite';
import { history } from 'instantsearch.js/es/lib/routers';

import 'instantsearch.css/themes/satellite-min.css';
//import Layout from '~/layouts/Pages.vue'

import Articles from "~/components/Articles";

export default {
  components: {
    Articles,
  },
  metaInfo() {
    return {
      title: this.$page.strapi.categories[0].name.toUpperCase(),
    };
  },
	data() {
		return {
			searchClient: algoliasearch(
					'VY1QDMCLPW',
					'010f9f0bf7a16d7b98149442c61c291f'
			),
			routing: {
				router: history()
			},
		};
	},
};
</script>
