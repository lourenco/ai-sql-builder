import {describe, it, expect} from 'bun:test';
import {serializeDatabaseSchema} from '../database-schema';

describe('serializeDatabaseSchema', () => {
  it('should serialize a single table with multiple columns', () => {
    const rows = [
      {tableSchema: 'public', tableName: 'users', columnName: 'id', dataType: 'int'},
      {tableSchema: 'public', tableName: 'users', columnName: 'name', dataType: 'varchar'},
      {tableSchema: 'public', tableName: 'users', columnName: 'email', dataType: 'varchar'},
    ];

    const result = serializeDatabaseSchema(rows);
    expect(result).toBe('Table users (id int, name varchar, email varchar)');
  });

  it('should serialize multiple tables', () => {
    const rows = [
      {tableSchema: 'public', tableName: 'users', columnName: 'id', dataType: 'int'},
      {tableSchema: 'public', tableName: 'users', columnName: 'email', dataType: 'varchar'},
      {tableSchema: 'public', tableName: 'posts', columnName: 'id', dataType: 'int'},
      {tableSchema: 'public', tableName: 'posts', columnName: 'title', dataType: 'text'},
    ];

    const result = serializeDatabaseSchema(rows);
    const expected = [
      'Table users (id int, email varchar)',
      'Table posts (id int, title text)',
    ];

    expected.forEach((line) => {
      expect(result).toContain(line);
    });
  });

  it('should return an empty string when no rows are provided', () => {
    const result = serializeDatabaseSchema([]);
    expect(result).toBe('');
  });
});


