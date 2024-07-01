'use client'

import { visionTool } from '@sanity/vision'
import { defineConfig } from 'sanity'
import { structureTool } from 'sanity/structure'
import { pageStructure, singletonPlugin } from "@/sanity/plugins/singletons";

import { apiVersion, dataset, projectId } from './sanity/env'
import { schema } from './sanity/schema'
import settings from "@/sanity/schema/settings";

export default defineConfig({
  basePath: '/studio',
  projectId,
  dataset,
  schema,
  plugins: [
    structureTool({ structure: pageStructure([settings]) }),
    singletonPlugin([settings.name]),
    visionTool({ defaultApiVersion: apiVersion }),
  ],
})
