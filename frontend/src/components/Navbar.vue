<template>
	<div class="container mx-auto px-6 flex items-center justify-between">
		<div class="uppercase text-gray-800 dark:text-white font-black text-3xl">
			{{ title_page }}
		</div>
		<div class="flex items-center">
			<nav class="font-sen text-gray-800 dark:text-white uppercase text-lg lg:flex items-center hidden">
				<g-link class="py-2 px-6 flex hover:text-black" to="/">Home</g-link>
				<g-link class="py-2 px-6 flex hover:text-black" to="/blog">Blog</g-link>
				<g-link class="py-2 px-6 flex hover:text-black" to="/contact">Contact</g-link>
			</nav>

			<button class="lg:hidden flex flex-col ml-4">
                    <span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
				<span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
				<span class="w-6 h-1 bg-gray-800 dark:bg-white mb-1">
                    </span>
			</button>
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
