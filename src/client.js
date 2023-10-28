import { createClient } from '@sanity/client'

const client = createClient({
  projectId: 'xkcis0az',
  dataset: 'production',
  useCdn: true,
  apiVersion: '2023-10-23',
})

export default client
