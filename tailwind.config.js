module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: {
		content: ['./src/**/*.svelte', './public/*.html'],
		options: {
			safelist: [
				'bg-red-500',
				'bg-yellow-400',
				'bg-green-500',
				'bg-gray-400',
				'bg-gray-500',
				'border-gray-600',
				'text-white',
				'hidden',
				'invisible',
				'visible',
				'block',
				'fixed',
				'absolute',
			],
		}
	},
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [],
}
