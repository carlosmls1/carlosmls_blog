<template>
	<div class="shadow-lg rounded-2xl w-full bg-white dark:bg-gray-800 border">
		<div class="flex flex-col items-center justify-center p-4 ">
			<a href="#" class="block relative">
				<g-image
						class="mx-auto object-cover rounded-full h-16 w-16  border-2 border-white dark:border-gray-800"
						:src="getStrapiMedia(author.picture.url)"
						alt=""
				/>
			</a>
			<p class="text-gray-800 dark:text-white text-lg text-center font-medium mt-2">
				{{ author.name }}
			</p>
			<p class="none text-gray-400 text-xs mb-4">
				{{ author.name }}
			</p>
			<p class="none text-xs p-2 bg-pink-500 text-white px-4 rounded-full">
				Writer
			</p>
		</div>
	</div>
</template>

<script>
import { getStrapiMedia } from "~/utils/medias";

export default {
	props: {
		author: Object,
	},
	methods: {
		getStrapiMedia,
	},
};
</script>
