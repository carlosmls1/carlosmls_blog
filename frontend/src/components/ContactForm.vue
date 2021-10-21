<template>
	<form v-on:submit.prevent="submitForm" class="flex w-full max-w-sm space-x-3">
		<div v-if="success">
			<h2 class="max-w-3xl text-5xl md:text-6xl font-bold mx-auto dark:text-white text-gray-800 text-center py-2">
				Thank you for you message
			</h2>
		</div>
		<div v-else class="w-full max-w-2xl px-5 py-5 m-auto mt-10 bg-white rounded-lg shadow border dark:bg-gray-800">
			<div class="mb-6 text-3xl font-light text-center text-gray-800 dark:text-white">
				Send a message!
			</div>
			<div class="grid max-w-xl grid-cols-2 gap-4 m-auto">
				<div class="col-span-2 lg:col-span-1">
					<div class=" relative ">
						<input
								required
								v-model="form.name"
								type="text" id="contact-form-name" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Name"/>
					</div>
				</div>
				<div class="col-span-2 lg:col-span-1">
					<div class=" relative ">
						<input
								required
								v-model="form.email"
								type="email" id="contact-form-email" class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="email"/>
					</div>
				</div>
				<div class="col-span-2">
					<div class=" relative ">
						<input
								required
								v-model="form.phone"
								type="phone"
									 id="contact-form-phone"
									 class=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
									 placeholder="phone"/>
					</div>
				</div>
				<div class="col-span-2">
					<label class="text-gray-700" for="name">
                            <textarea
																required
																v-model="form.message"
																class="flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 rounded-lg text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" id="comment" placeholder="Enter your comment" name="comment" rows="5" cols="40">
                            </textarea>
					</label>
				</div>
				<div class="col-span-2 text-right">
					<button type="submit" class="py-2 px-4  bg-indigo-600 hover:bg-indigo-700 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
						Send
					</button>
				</div>
			</div>
		</div>
	</form>
</template>

<script>
import axios from 'axios';

export default {
	name: 'PostFormAxios',
	data(){
		return{
			success: false,
			form: {
				name: '',
				email: '',
				phone: '',
				message: '',
			}
		}
	},
	methods:{
		submitForm(){
			axios.post((process.env.GRIDSOME_STRAPI_URL || "http://localhost:1337")+"/graphql", {
				query: `mutation {
									createMessage(input: { data: {
										name: "${this.form.name}",
										email: "${this.form.email}",
										message: "${this.form.phone}",
										phone: "${this.form.message}",
									} }) {
										message {
											name
											email
											message
											phone
										}
									}
								}`
			}, {
				headers: {
					'Content-Type': 'application/json'
				}
			})
					.then((res) => {
						//Perform Success Action
						this.success= true;
					})
					.catch((error) => {
						// error.response.status Check status code
					}).finally(() => {
				//Perform action in always
			});
		}
	}
}
</script>

<style scoped>

</style>