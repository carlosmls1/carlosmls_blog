<template>
	<Layout
			:title="'Carlos Morales A'"
	>

		<div class="mx-10 w-full bg-white p-12 my-6">
			<div class="header flex items-end justify-between mb-12">
				<div class="title">
					<p class="text-4xl font-bold text-gray-800 mb-4">
						Blog
					</p>
					<p class="text-2xl font-light text-gray-400">
						All article are mad with love
					</p>
				</div>
				<div class="text-end">
					<form class="flex flex-col md:flex-row w-3/4 md:w-full max-w-sm md:space-x-3 space-y-3 md:space-y-0 justify-center">
						<div class=" relative ">
							<input type="text" id="&quot;form-subscribe-Search" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter a title"/>
						</div>
						<button class="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
							Search
						</button>
					</form>
				</div>
			</div>
			<Articles :articles="$page.strapi.articles" />
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
import Articles from "~/components/Articles";
import { getMetaTags } from "~/utils/seo";
import { getStrapiMedia } from "~/utils/medias";

export default {
	components: {
		Articles,
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
