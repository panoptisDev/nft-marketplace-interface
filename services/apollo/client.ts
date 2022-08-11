import { ApolloClient, InMemoryCache } from '@apollo/client'
import { SUBGRAPHS_URL } from 'constants/networks'

export const client = new ApolloClient({
	uri: SUBGRAPHS_URL,
	cache: new InMemoryCache()
})

const ServiceClient = {
	client
}

export default ServiceClient
