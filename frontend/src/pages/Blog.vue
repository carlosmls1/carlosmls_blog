<template>
	<Layout
			:title="'Carlos Morales A'"
	>

		<div class="lg:mx-10 w-full bg-white lg:p-12 my-6 dark:bg-gray-800">
			<ais-instant-search
					:routing="routing"
					:search-client="searchClient" :index-name="indexName">

				<div class="header flex flex-col md:flex-row items-end justify-between mb-12">
					<div class="title px-5 mx-auto md:ml-0">
						<p class="text-4xl font-bold text-gray-800 dark:text-white mb-4">
							Blog
						</p>
						<p class="text-2xl font-light text-gray-400 hidden md:block">
							Check Out our latest news
						</p>
					</div>
					<div class="text-end mx-auto md:mx-0">
						<ais-search-box>
							<template v-slot="{ currentRefinement, isSearchStalled, refine }">


								<form class="flex flex-col md:flex-row w-3/4 w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
									<div class=" relative ">
										<input
												type="search"
												:value="currentRefinement"
												@input="refine($event.currentTarget.value)"
												id="form-subscribe-Search"
												class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent dark:text-white dark:bg-gray-800"
												placeholder="Search here"/>
									</div>
									<button class="hidden md:block flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
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
						<nav class="lg:px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6 mt-10" aria-label="Pagination">
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
	query {
	strapi {
	global {
	siteName
	favicon {
	url
	}
	defaultSeo {
	metaTitle
	metaDescription
	shareImage {
	url
	}
	}
	}
	homepage {
	hero {
	title
	}
	seo {
	metaTitle
	metaDescription
	shareImage {
	url
	}
	}
	}
	articles(sort: "published_at:desc") {
	slug
	title
	category {
	name
	slug
	}
	image {
	url
	}
	author {
	name
	picture {
	url
	}
	}
	}
	}
}
</page-query>

<script>
import algoliasearch from 'algoliasearch/lite';
import { history } from 'instantsearch.js/es/lib/routers';

import 'instantsearch.css/themes/satellite-min.css';

import Articles from "~/components/Articles";
import { getMetaTags } from "~/utils/seo";
import { getStrapiMedia } from "~/utils/medias";

export default {
	components: {
		Articles,
	},
	data() {
		return {
			indexName: (process.env.GRIDSOME_ALGOLIA_INDEX || 'dev_blog'),

			searchClient: algoliasearch(
					'VY1QDMCLPW',
					'010f9f0bf7a16d7b98149442c61c291f'
			),
			routing: {
				router: history()
			},
		};
	},
	metaInfo() {
		const { seo } = this.$page.strapi.homepage;
		const { defaultSeo, favicon } = this.$page.strapi.global;

		// Merge default and article-specific SEO data
		const fullSeo = {
			...defaultSeo,
			...seo,
		};

		return {
			title: fullSeo.metaTitle,
			meta: getMetaTags(fullSeo),
			link: [
				{
					rel: "favicon",
					href: getStrapiMedia(favicon.url),
				},
			],
		};
	},
};
</script>
