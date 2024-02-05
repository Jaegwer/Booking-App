/** @type {import('tailwindcss').Config} */
export default {
  content: [
	"./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    extend: {
		colors:{
			'gray':'#1E1E20',
			'black':'#161617',
			'yellow':'#C7AD08',
			'dark-yellow':'#FFDC00',
			'light-gray':'#9B9B9B',
			'blue':'#056aa8'
		}
	},
  },
  plugins: [],
}

