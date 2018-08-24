// see https://www.netlify.com/docs/functions/

exports.handler = function(event, context, callback) {
	if (!context.clientContext.user)
		return callback(new Error('No/bad/outdated token!'))

	const {
		email,
		sub,
		app_metadata: { provider, roles },
		user_metadata: { avatar_url, full_name },
	} = context.clientContext.user;

	const all_the_things = JSON.stringify({
		uuid: sub,
		email,
		provider,
		roles,
		avatar_url,
		full_name,
	}, null, 2)

	console.log(all_the_things)

	callback(null, {
		statusCode: 200,
		body: all_the_things,
	})
}
