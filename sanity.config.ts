import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { visionTool } from '@sanity/vision'

export default defineConfig({
  name: 'default',
  title: "Neil's Magic Carpets",
  projectId: '2v78w70t',
  dataset: 'production',
  basePath: '/studio',
  plugins: [structureTool(), visionTool()],
  schema: { types: [] },
})
