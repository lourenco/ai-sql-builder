import _ from 'lodash'
import {fetchDatabaseSchema} from '@/server/interactors/database-schema'

export async function GET() {
  const databaseSchema = await fetchDatabaseSchema()

  return Response.json(_.groupBy(databaseSchema, 'tableName'))
}
