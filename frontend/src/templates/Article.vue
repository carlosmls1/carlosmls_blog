<template>
	<Layout
			:title="'Carlos Morales A'"
	>
		<section id="hero" class="z-0">
			<div class="bg-indigo-900 relative overflow-hidden w-screen h-100">
				<g-image :src="getStrapiMedia($page.strapi.articles[0].image.url)"  class="filter blur-sm absolute h-full w-full object-cover" />
				<div class="inset-0 bg-black opacity-25 absolute">
				</div>
				<div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-32 xl:py-40">
					<div class="lg:w-3/5 xl:w-2/5 flex flex-col items-start relative z-10">
						<g-link
								class="hover:text-indigo-500"
								:to="'/category/' + $page.strapi.articles[0].category.slug"
						>
							<span class="font-bold uppercase text-yellow-400">
								{{ $page.strapi.articles[0].category.name }}
							</span>
						</g-link>
						<h1 class="font-bold text-6xl sm:text-7xl text-white leading-tight mt-4">
							{{ $page.strapi.articles[0].title }}
						</h1>
						<a href="#content" class="block bg-white hover:bg-gray-100 py-3 px-4 rounded-lg text-lg text-gray-800 font-bold uppercase mt-10">
							Read More
						</a>
					</div>
				</div>
			</div>
		</section>
			<div class="w-full mx-20 -mt-8 z-10">
				<div class="grid grid-cols-1 md:grid-cols-4 gap-6	">
					<div class="col-span-3 shadow bg-white dark:bg-gray-500 rounded border p-16" id="content">
						<MyMarkdown :source="$page.strapi.articles[0].content"></MyMarkdown>
					</div>

					<div class="col-span-1 gap-y-6 grid">
						<AuthorCard :author="$page.strapi.articles[0].author"/>
						<categories/>
					</div>
				</div>
			</div>
	</Layout>
</template>

<page-query>
query($slug: String!) {
strapi {
articles(where: { slug: $slug }) {
title
description
content
published_at
image {
url
}
category{
name
slug
}
author {
name
picture {
url
}
}
}
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
}
}
</page-query>

<script>
import VueMarkdown from "vue-markdown";
import { getStrapiMedia } from "~/utils/medias";
import { getMetaTags } from "~/utils/seo";
import moment from "moment";
import highlight from 'highlight.js';
import MyMarkdown from "../components/MyMarkdown";
import Categories from "../components/Categories";
import AuthorCard from "../components/AuthorCard";

export default {
	data() {
		return {
			moment: moment,
		};
	},
	components: {
		AuthorCard,
		Categories,
		MyMarkdown,
		VueMarkdown,
	},
	methods: {
		getStrapiMedia,
	},
	metaInfo() {
		console.log(this.$page.strapi.articles[0].category)
		const { title, description, image } = this.$page.strapi.articles[0];
		const { defaultSeo, favicon } = this.$page.strapi.global;

		// Merge default and article-specific SEO data
		const seo = {
			...defaultSeo,
			metaTitle: title,
			metaDescription: description,
			shareImage: image,
		};
		return {
			title: this.$page.strapi.articles[0].title,
			meta: getMetaTags(seo),
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