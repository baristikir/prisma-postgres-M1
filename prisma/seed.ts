import 'tsconfig-paths/register';
import { PrismaClient, User } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
	// Seeding - Test User
	const users: Pick<User, 'name'>[] = [
		{
			name: 'user-01',
		},
		{
			name: 'user-02',
		},
	];
	for (const user in users) {
		if (Object.prototype.hasOwnProperty.call(users, user)) {
			await prisma.user.create({
				data: {
					name: users[user].name,
				},
			});
		}
	}
}

main()
	.catch((e) => {
		console.error(e);
		process.exit(1);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});
