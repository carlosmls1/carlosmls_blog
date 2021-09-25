<template>

	<div class="relative bg-white dark:bg-gray-800 shadow-lg rounded-2xl border">
		<div class="flex flex-col sm:flex-row sm:justify-around">
			<div class="w-72">
				<nav class="mt-10 px-6 ">
							<g-link
									v-for="category in $static.strapi.categories"
									:key="category.id"
									:to="'/category/' + category.slug"
									class="hover:text-gray-800 hover:bg-gray-100 flex items-center p-2 my-6 transition-colors dark:hover:text-white dark:hover:bg-gray-600 duration-200  text-gray-600 dark:text-gray-400 rounded-lg "
							>
								{{category.name}}
							</g-link>
				</nav>
			</div>
		</div>
	</div>


</template>

<static-query>
query {
strapi {
categories {
id
name
slug
}
global {
siteName
}
}
}
</static-query>
