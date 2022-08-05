import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: import.meta.env.VITE_SANITY_DATASET,
	apiVersion: '2022-08-04',
	useCdn: true
})

export default client

const builder = imageUrlBuilder(client)

export function urlFor(source) {
	return builder.image(source)
}
