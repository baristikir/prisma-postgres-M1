import { gql, useQuery } from '@apollo/client';

export default function Users() {
	const { data, error } = useQuery(gql`
		query {
			getUsers {
				name
			}
		}
	`);
	if (error) return <h1>Error: {error.message}</h1>;
	if (!data) return <h1>No Data from GraphQL received..</h1>;
	return (
		<div>
			<div>
				{data?.getUsers?.map((user: any) => {
					user.name;
				})}
			</div>
		</div>
	);
}
