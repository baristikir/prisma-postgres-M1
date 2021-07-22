import { User } from '@prisma/client';
import { PrismaClient } from '@prisma/client';
import { builder } from '../builder';

const prisma = new PrismaClient();

const UserObject = builder.objectRef<User>('User');
UserObject.implement({
	fields: (t) => ({
		id: t.exposeID('id'),
		name: t.exposeID('name'),
	}),
});

builder.queryField('getUsers', (t) =>
	t.field({
		type: [UserObject],
		resolve: (_root) => {
			return prisma.user.findMany();
		},
	}),
);
