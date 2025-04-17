import db from '../db'

export async function executeQuery(query: string) {
  if (!isReadOnly(query)) {
    return Promise.reject({error: 'The query must be read-only'})
  }

  const {rows} = await db.query(query)

  return rows
}

function isReadOnly(query: string) {
  return !forbiddenOperations.some(keyword => query.trim().toUpperCase().startsWith(keyword));
}

const forbiddenOperations = ['INSERT', 'UPDATE', 'DELETE', 'CREATE', 'DROP', 'ALTER', 'TRUNCATE'];
