import {DatabaseSchemaRow} from './server/types'

const apiUrl = process.env.API_URL || ''

export async function fetchAiSqlChat(prompt: string): Promise<AiSqlChatResponse> {
	const body = JSON.stringify({prompt})
	const response = await fetch(`${apiUrl}/api/ai-sql-chat`, {method: 'POST', body})

	return response.json()
}

export async function fetchDatabaseSchema(): Promise<DatabaseSchemaResponse> {
	const response = await fetch(`${apiUrl}/api/database-schema`)
	const data = await response.json()

	return {
		data,
		tableNames: Object.keys(data)
	}
}

export interface DatabaseSchemaResponse {
	tableNames: string[]
	data: Record<string, DatabaseSchemaRow[]>
}

export interface AiSqlChatResponse {
	sql: string
	columns: string[]
	rows: Record<string, string>[]
}
