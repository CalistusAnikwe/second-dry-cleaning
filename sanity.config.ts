// 'use client'

// /**
//  * This configuration is used to for the Sanity Studio that’s mounted on the `\app\studio\[[...tool]]\page.tsx` route
//  */

// import {visionTool} from '@sanity/vision'
// import {defineConfig} from 'sanity'
// import {structureTool} from 'sanity/structure'

// // Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
// import {apiVersion, dataset, projectId} from './sanity/env'
// import {schema} from './sanity/schemaTypes'
// import {structure} from './sanity/structure'

// export default defineConfig({
//   basePath: '/studio',
//   projectId,
//   dataset,
//   // Add and edit the content schema in the './sanity/schemaTypes' folder
//   schema,
//   plugins: [
//     structureTool({structure}),
//     // Vision is for querying with GROQ from inside the Studio
//     // https://www.sanity.io/docs/the-vision-plugin
//     visionTool({defaultApiVersion: apiVersion}),
//   ],
// })












'use client'

/**
 * This configuration is used for the Sanity Studio mounted on the `app/studio/[[...tool]]/page.tsx` route
 */

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'

// Import your unified schema from the path we created earlier
import { schema } from './sanity/schemaTypes'

export default defineConfig({
  basePath: '/studio', // Matches your folder structure: app/studio/[[...tool]]
  
  // Using process.env directly is often more reliable than the 'env.ts' file
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '', 
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  title: 'Couture Care Admin', // Adds a professional title to your Studio tab

  schema: schema,

  plugins: [
    structureTool(), // Standard structure for managing your Hero and Services
    visionTool({ defaultApiVersion: '2024-02-16' }), // Tool for testing your data queries
  ],
})