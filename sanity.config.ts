import {defineConfig} from 'sanity'
import {deskTool} from 'sanity/desk'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemas'
import { codeInput } from "@sanity/code-input";

const projectId:string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
const dataset:string = process.env.NEXT_PUBLIC_SANITY_DATASET as string

export default defineConfig({
  basePath: "/studio",
  name: 'Blog_Sanity_3',
  title: 'Blog Sanity 3',
  projectId,
  dataset,
  plugins: [deskTool(), visionTool(), codeInput()],
  schema: {
    types: schemaTypes,
  },
})
