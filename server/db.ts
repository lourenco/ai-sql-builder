import {SQL} from 'bun';

const db = new SQL(process.env.PG_CONNECTION_STRING as string);

export default db
