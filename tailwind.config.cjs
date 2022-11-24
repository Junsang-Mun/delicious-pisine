const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {}
	},
	plugins: [require("daisyui")],
	daisyui: {
		themes: ["cmyk", "dracula", "halloween"],
		darkTheme: "halloween",
	}
};

module.exports = config;
