import { type SchemaTypeDefinition } from 'sanity'
import settings from './settings'
import { projectType } from './project'

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [projectType, settings],
}
