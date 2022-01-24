import sanityClient from '@sanity/client'
import imageUrlBuilder from '@sanity/image-url'

const client = sanityClient({
	projectId: import.meta.env.VITE_SANITY_PROJECT_ID,
	dataset: import.meta.env.VITE_SANITY_DATASET,
	apiVersion: '2021-10-06',
	useCdn: true,
	token: import.meta.env.VITE_SANITY_EDITOR_TOKEN
})

export default client

const builder = imageUrlBuilder(client)

export function urlFor(source: string) {
	return builder.image(source)
}
