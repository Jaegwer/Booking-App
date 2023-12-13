// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	devtools: { enabled: true },
	css: ['~/assets/css/main.css'],

	plugins: [
		'~/plugins/splide-plugin.js', '~/plugins/firebase.client.js'
	],
	runtimeConfig: {
		public: {
			apiKey: process.env.FB_apiKey,
			authDomain: process.env.FB_authDomain,
			projectId: process.env.FB_projectId,
			storageBucket: process.env.FB_storageBucket,
			messagingSenderId: process.env.FB_messagingSenderId,
			appId: process.env.FB_appId,
			measurementId: process.env.FB_measurementId
		}


	},
	postcss: {
		plugins: {
			tailwindcss: {},
			autoprefixer: {},
		},
	},

	modules: ["@nuxt/image"],
})