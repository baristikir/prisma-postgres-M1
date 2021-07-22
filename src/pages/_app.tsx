import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { useApollo } from '~/utils/apollo';
import { ApolloProvider } from '@apollo/client';

function MyApp({ Component, pageProps }: AppProps) {
	const client = useApollo(pageProps.initialClientState);
	return (
		<ApolloProvider client={client}>
			<Component {...pageProps} />
		</ApolloProvider>
	);
}
export default MyApp;
