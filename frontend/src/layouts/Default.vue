<template>
	<main class="dark:bg-gray-800 font-mono bg-white relative h-full">
		<header class="h-24 sm:h-32 flex items-center z-30 w-full shadow fixed bg-white dark:bg-gray-800">
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
		</header>
		<div class="flex relative z-20 items-center p-28">
			<div class="container mx-auto px-6 md:px-28 flex flex-col justify-between items-center relative ">
				<slot/>
			</div>
		</div>
    <Footer />
	</main>
</template>
<script>
import Footer from "../components/Footer";
export default {
	components: {Footer},
	props: ['title'],
	data: function () {
		return {
			title_page: this.title
		}
	}
}
</script>
<static-query>
query {
metadata {
siteName
}
}
</static-query>

<style>
</style>
