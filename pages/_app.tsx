import { Web3ReactProvider } from '@web3-react/core'

import { AppProps } from 'next/app'
import Head from 'next/head'

import { ApolloProvider } from '@apollo/client'
import { Web3Provider } from '@ethersproject/providers'
import { Loading } from 'components'
import Footer from 'layouts/Footer'
import Header from 'layouts/Header'
import Main from 'layouts/Main'
import { client } from 'services/apollo/client'
import { ThemeProvider } from 'styled-components'
import { GlobalStyled } from 'styles'
import { theme } from 'styles/theme'

import '../styles/index.css'

const getLibrary = (provider: any) => {
	const library = new Web3Provider(provider)
	library.pollingInterval = 12000
	return library
}

function _App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>{pageProps.title}</title>
				<meta name="description" content={pageProps.description} />
				<meta name="viewport" content="initial-scale=1, width=device-width" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ThemeProvider theme={{ ...theme }}>
				<GlobalStyled />
				<Loading>
					<ApolloProvider client={client}>
						<Web3ReactProvider getLibrary={getLibrary}>
							<Header />
							<Main>
								<>
									<Component {...pageProps} />
								</>
							</Main>
							<Footer />
						</Web3ReactProvider>
					</ApolloProvider>
				</Loading>
			</ThemeProvider>
		</>
	)
}

export default _App
