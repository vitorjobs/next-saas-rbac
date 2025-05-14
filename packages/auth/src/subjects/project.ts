// export type ProjectSubject = [
//   'create' | 'delete' | 'manage', 'Project'
// ]
import { z } from 'zod'
import { projectSchema } from '../models/project'

export const projectSubject = z.tuple([
  z.union([
    z.literal('manage'),
    z.literal('get'),
    z.literal('create'),
    z.literal('update'),
    z.literal('delete'),
  ]),
  // z.literal('Project'),
  z.union([z.literal('Project'), projectSchema]),


])

export type ProjectSubject = z.infer<typeof projectSubject>