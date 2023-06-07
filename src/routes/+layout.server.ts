export function load({ locals, url }) {
	return {
		user: locals.user && {
			email: locals.user.email
		},
		url: url.pathname
	};
}

