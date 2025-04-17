import type {NextRequest} from 'next/server'
import {fetchDatabaseSchema} from '@/server/interactors/database-schema'
import {textToSql} from '@/server/interactors/text-to-sql'
import {executeQuery} from '@/server/interactors/execute-query';

export async function POST(req: NextRequest) {
	const body = await req.json();

	if (!body.prompt) {
		return Response.json({error: 'prompt is required'}, {status: 422})
	}

	const schema = await fetchDatabaseSchema()
	const sql = await textToSql(body.prompt, schema)
	const rows = await executeQuery(sql)
	const columns = Object.keys(rows?.[0] || {})

	return Response.json({sql, rows, columns})
}
