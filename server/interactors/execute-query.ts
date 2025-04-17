import sql from '../db'

export function executeQuery(query: string) {
	if (!isReadOnly(query)) {
		return Promise.reject({error: 'The query must be read-only'})
	}

	return sql.unsafe(query)
}

function isReadOnly(query: string) {
	return !forbiddenOperations.some(keyword => query.trim().toUpperCase().startsWith(keyword));
}

const forbiddenOperations = ['INSERT', 'UPDATE', 'DELETE', 'CREATE', 'DROP', 'ALTER', 'TRUNCATE'];
