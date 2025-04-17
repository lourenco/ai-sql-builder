import {test, afterAll, expect} from 'bun:test'
import {mock, clearMocks} from 'bun-bagel';
import {fetchAiSqlChat} from '../services'

afterAll(() => clearMocks())

test('fetchAiSqlChat()', async () => {
	const prompt = 'listar usuários'
	const data = JSON.stringify({prompt})

	mock(`${process.env.API_URL}/api/ai-sql-chat`, {
		data,
		method: 'POST',
		response: {data: 'foo'}
	})

	const result = await fetchAiSqlChat(prompt)

	expect(result).toEqual('foo')
})
