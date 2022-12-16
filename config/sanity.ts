import sanityClient from '@sanity/client'
import sanityImage from '@sanity/image-url'
import groq from 'groq'
import {PortableText} from '@portabletext/react'

export const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  useCdn: process.env.NODE_ENV === 'production',
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
})

export const imageBuilder = sanityImage(client)

export const urlFor = (source: any) => {
  return imageBuilder.image(source)
}

export {
  groq,
  PortableText
}
