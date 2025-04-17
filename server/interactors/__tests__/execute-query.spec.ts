import {describe, expect, it} from 'bun:test';
import {executeQuery} from '../execute-query';

describe('executeQuery', () => {
  const defaultErrorMessage = {error: 'The query must be read-only'}

  it('allows SELECT', async () => {
    const data = await executeQuery('SELECT * FROM users')
    expect(data.length).toBeGreaterThan(1)
  });

  it('rejects INSERT', () => {
    return expect(executeQuery("INSERT INTO users (name) VALUES ('John')"))
      .rejects.toEqual(defaultErrorMessage);
  });

  it('rejects UPDATE', () => {
    return expect(executeQuery("UPDATE users SET name = 'Jane' WHERE id = 1"))
      .rejects.toEqual(defaultErrorMessage);
  });

  it('rejects DELETE', () => {
    return expect(executeQuery('DELETE FROM users WHERE id = 1'))
      .rejects.toEqual(defaultErrorMessage);
  });

  it('rejects DROP', () => {
    return expect(executeQuery('DROP TABLE users'))
      .rejects.toEqual(defaultErrorMessage);
  });

  it('rejects CREATE', () => {
    return expect(executeQuery('CREATE TABLE test (id SERIAL)'))
      .rejects.toEqual(defaultErrorMessage);
  });

  it('rejects ALTER', () => {
    return expect(executeQuery('ALTER TABLE users ADD COLUMN age INTEGER'))
      .rejects.toEqual(defaultErrorMessage);
  });

  it('rejects TRUNCATE', () => {
    return expect(executeQuery('TRUNCATE TABLE sales'))
      .rejects.toEqual(defaultErrorMessage);
  });
});

