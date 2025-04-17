import _ from 'lodash';
import {type DatabaseSchemaRow as Row} from '../types';

export function serializeDatabaseSchema(rows: Row[]): string {
	const groupedColumns = _.groupBy(rows, 'tableName');

	return _.map(groupedColumns, formatTableSchema).join('\n');
}

function formatTableSchema(columns: Row[], tableName: string): string {
	const columnDefs = columns.map(formatColumn);
	return `Table ${tableName} (${columnDefs.join(', ')})`;
}

function formatColumn({columnName, dataType}: Row): string {
	return `${columnName} ${dataType}`;
}

