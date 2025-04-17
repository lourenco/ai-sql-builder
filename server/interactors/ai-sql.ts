import {fetchDatabaseSchema} from './database-schema'
import {textToSql} from './text-to-sql'

export async function aiSql(prompt: string) {
	const schema = await fetchDatabaseSchema()

	return textToSql(prompt, schema)
}

