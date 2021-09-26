<template>
	<Layout :color="bg_color">
		<div class="flex flex-col content">
			<g-image
					:class="'bg-'+bg_color+'-500 md:mt-24 rounded-full w-28 mx-auto '"
					:src="
                  getStrapiMedia($page.strapi.contact.avatar.url)
                "
					alt="My Avatar"
			/>
			<p class="text-3xl my-6 text-center dark:text-white">
				{{ $page.strapi.contact.title }}
			</p>
			<div class="flex items-center justify-center mt-4">

				<ContactForm/>

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
contact {
title
avatar {
url
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
import ContactForm from "../components/ContactForm";

Array.prototype.circleColor = function(){
	return this[Math.floor(Math.random()*this.length)];
}
export default {
	components: {
		ContactForm,
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