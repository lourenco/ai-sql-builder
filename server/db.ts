import {Pool} from 'pg'

const pool = new Pool({
  connectionString: process.env.PG_CONNECTION_STRING as string,
});

export default pool
