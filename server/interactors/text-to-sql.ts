import {createDeepSeek} from '@ai-sdk/deepseek';
import {generateText} from 'ai';
import {DatabaseSchemaRow} from '../types'
import {serializeDatabaseSchema} from '../utils/database-schema'

const deepseek = createDeepSeek({
	apiKey: process.env.DEEP_SEEK_KEY,
});

export async function textToSql(prompt: string, databaseSchema: DatabaseSchemaRow[]) {
	const databaseSchemaSerialized = serializeDatabaseSchema(databaseSchema)

	const {text} = await generateText({
		model: deepseek('deepseek-chat'),
		temperature: 0,
		prompt,
		system: `${baseSystemPrompt} ${databaseSchemaSerialized}`,
	})

	return sanitizeSql(text)
}

function sanitizeSql(text: string) {
	return text.replace('```sql\n', '').replace('\n```', '')
}

const baseSystemPrompt = `You are a SQL (postgres) expert. Your job is to create an SQL query based on the information provided by the user. For any question, respond ONLY with SQL. The table schema is as follows:
`

