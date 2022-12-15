import {defineCliConfig} from 'sanity/cli'

const projectId:string = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID as string
const dataset:string = process.env.NEXT_PUBLIC_SANITY_DATASET as string

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  }
})
