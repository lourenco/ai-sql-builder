import db from '../db'
import {memoryCache} from '../memory-cache'
import type {DatabaseSchemaRow} from '../types'

export async function fetchDatabaseSchema() {
  const schemaCached = memoryCache.get('database-schema')

  if (schemaCached) {
    return schemaCached
  }

  const schema = await flushDatabaseSchemaQuery()

  memoryCache.set('database-schema', schema)

  return schema
}

async function flushDatabaseSchemaQuery(): Promise<DatabaseSchemaRow[]> {
  const {rows} = await db.query(`
		SELECT table_schema as "tableSchema",
			table_name as "tableName",
			column_name as "columnName",
			data_type as "dataType"
    FROM information_schema.columns

    WHERE table_schema NOT IN ('information_schema', 'pg_catalog')
    ORDER BY table_schema, table_name, ordinal_position
	`)

  return rows
}
