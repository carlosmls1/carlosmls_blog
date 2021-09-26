<template>
	<Layout :color="bg_color">
		<div class="flex flex-col content">
			<g-image
					:class="'bg-'+bg_color+'-500 md:mt-24 rounded-full w-28 mx-auto '"
					:src="
                  getStrapiMedia($page.strapi.homepage.hero.avatar.url)
                "
					alt="My Avatar"
			/>
			<p class="text-3xl my-6 text-center dark:text-white">
				{{ $page.strapi.homepage.hero.title }}
			</p>
			<h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
				Fullstack developer, building new web solutions for the day-to-day
			</h2>
			<div class="flex items-center justify-center mt-4">
				<g-link to="/contact" class="uppercase py-2 my-2 px-4 md:mt-16 bg-transparent dark:text-gray-800 dark:bg-white hover:dark:bg-gray-100 border-2 border-gray-800 text-gray-800 dark:text-white hover:bg-gray-800 hover:text-white text-md">
					CONNECT WITH ME
				</g-link>
			</div>
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
avatar{
url
}
subtitle
}
seo {
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
import Layout from '~/layouts/Homepage.vue'

import { getStrapiMedia } from "~/utils/medias";
import { getMetaTags } from "~/utils/seo";

Array.prototype.circleColor = function(){
	return this[Math.floor(Math.random()*this.length)];
}
export default {
	components: {
		Layout,
	},
	data: function () {
		return {
			bg_color: ['yellow'].circleColor()
		}
	},
	methods: {
		getStrapiMedia,
	},
	metaInfo: {
		title: 'Hello, world!'
	}
}

</script>
<style>
.content{
	position: absolute;
}
</style>