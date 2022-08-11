export const signIn = async ({
	username,
	password
}: {
	username: string
	password: string
}) => {
	const token = await Promise.resolve('token_key')

	return Promise.resolve({
		user: {
			id: 'userId',
			displayName: username,
			password,
			token
		}
	})
}

export const signOut = async () => {
	return Promise.resolve({})
}
