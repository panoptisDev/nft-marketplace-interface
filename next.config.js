/** @type {import('next').NextConfig} */

module.exports = {
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			issuer: /\.[t|j]s[x]?$/,
			use: ['@svgr/webpack']
		})
		return config
	},
	images: {
		domains: ['res.cloudinary.com']
	}
}
