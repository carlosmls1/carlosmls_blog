<template>
		<div class="overflow-hidden shadow-lg rounded-lg h-full w-60 md:w-full cursor-pointer m-auto">
				<g-link
						class=""
						:to="{ path: '/article/' + article.slug }"
						:key="article.id"
				>
					<g-image :src="getStrapiMedia(article.image.url)"  class="max-h-40 w-full object-cover" />
				</g-link>
				<div class="bg-white dark:bg-gray-800 w-full p-4">

					<g-link
							v-if="article.category" class="text-indigo-500 text-md font-medium"
							:to="'/category/' + article.category.slug">{{
							article.category.name
						}}</g-link>
					<g-link
							class="hover:text-yellow-500"
							:to="{ path: '/article/' + article.slug }"
							:key="article.id"
					>
						<p class="text-gray-800 hover:text-pink-500	dark:text-white text-xl font-medium mb-2">
							{{ article.title }}
						</p>
					</g-link>
					<p class="text-gray-400 dark:text-gray-300 font-light text-md">
						Work at home, remote, is the new age of the job, every person can work at home....
					</p>
					<div class="flex items-center mt-4">
						<a href="#" class="block relative">
							<g-image
									class="mx-auto object-cover rounded-full h-10 w-10 shadow border"
									:src="getStrapiMedia(article.author.picture.url)"
									:alt="article.title"
							/>
						</a>
						<div class="flex flex-col justify-between ml-4 text-sm">
							<p class="text-gray-800 dark:text-white ">
								{{ article.author.name }}
							</p>
							<p class="text-gray-400 dark:text-gray-300">
								{{
									moment(article.published_at).format(
											"MMM Do YY"
									)
								}}
							</p>
						</div>
					</div>
				</div>
		</div>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";
import moment from "moment";

export default {
	data() {
		return {
			moment: moment,
		};
	},
  props: {
    article: Object,
  },
  methods: {
    getStrapiMedia,
  },
};
</script>
