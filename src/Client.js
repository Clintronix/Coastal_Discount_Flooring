import sanityClient from '@sanity/client'
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
    projectId: '6s5gzirx',
    dataset: "production"
})
const builder = imageUrlBuilder(client);

export const urlFor = (source) => builder.image(source);