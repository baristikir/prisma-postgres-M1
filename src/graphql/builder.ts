import SchemaBuilder from '@giraphql/core';
import SimpleObjectsPlugin from '@giraphql/plugin-simple-objects';
import { IncomingMessage, OutgoingMessage } from 'http';

export interface Context {
	req: IncomingMessage;
	res: OutgoingMessage;
}

export function createGraphQLContext(
	req: IncomingMessage,
	res: OutgoingMessage,
): Context {
	return {
		req,
		res,
	};
}

export const builder = new SchemaBuilder<{
	Context: Context;
	Scalars: {
		// We modify the types for the `ID` type to denote that it's always a string when it comes in.
		ID: { Input: string; Output: string | number };
		DateTime: { Input: Date; Output: Date };
	};
}>({
	plugins: [SimpleObjectsPlugin],
});

// This initializes the query types
builder.queryType({});

// Provide the custom DateTime scalar that allows dates to be transmitted over GraphQL:
builder.scalarType('DateTime', {
	serialize: (date) => date.toISOString(),
	parseValue: (date) => {
		return new Date(date);
	},
});
