export function load({ locals }) {
	return {
		user: locals.user && {
			email: locals.user.email,
			phone: locals.user.phone,
		}
	};
}
