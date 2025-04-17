import {describe, it, expect, jest, spyOn, afterEach} from 'bun:test';
import {textToSql} from '../text-to-sql';
import * as aiModule from 'ai';
import * as schemaUtils from '../../utils/database-schema';
import type {DatabaseSchemaRow} from '../../types';

afterEach(() => {
	jest.restoreAllMocks();
});

describe('textToSql', () => {
	const mockSchema: DatabaseSchemaRow[] = [
		{tableSchema: 'public', tableName: 'users', columnName: 'id', dataType: 'int'},
		{tableSchema: 'public', tableName: 'users', columnName: 'email', dataType: 'varchar'},
	];

	it('should return SQL with code block stripped', async () => {
		spyOn(schemaUtils, 'serializeDatabaseSchema').mockReturnValue(
			'Table users (id int, email varchar)'
		);

		spyOn(aiModule, 'generateText').mockResolvedValue({
			text: '```sql\nSELECT * FROM users;\n```',
		} as any);

		const result = await textToSql('Show all users', mockSchema);
		expect(result).toBe('SELECT * FROM users;');
	});

	it('should pass schema to the system prompt', async () => {
		const fakeSerializedSchema = 'Table users (id int)';
		spyOn(schemaUtils, 'serializeDatabaseSchema').mockReturnValue(fakeSerializedSchema);

		const generateTextSpy = spyOn(aiModule, 'generateText').mockResolvedValue({
			text: '```sql\nSELECT * FROM users;\n```',
		} as any);

		await textToSql('Show all users', mockSchema);

		expect(generateTextSpy).toHaveBeenCalledWith(
			expect.objectContaining({
				system: expect.stringContaining(fakeSerializedSchema),
			})
		);
	});

	it("should sanitize SQL that doesn't include code fences", async () => {
		spyOn(schemaUtils, 'serializeDatabaseSchema').mockReturnValue('Table users (id int)');

		spyOn(aiModule, 'generateText').mockResolvedValue({
			text: 'SELECT id FROM users;',
		} as any);

		const result = await textToSql('Show user IDs', mockSchema);
		expect(result).toBe('SELECT id FROM users;');
	});
});


