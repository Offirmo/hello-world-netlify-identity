// see https://www.netlify.com/docs/functions/

exports.handler = function(event, context, callback) {
	const { identity, user: {
		email,
		app_metadata: { provider, roles },
		user_metadata: { avatar_url, full_url },
	}} = context.clientContext;

	const all_the_things = JSON.stringify({
		email,
		provider,
		roles,
		avatar_url,
		full_url,
	}, null, 2)

	console.log(all_the_things)

	callback(null, {
		statusCode: 200,
		body: all_the_things,
	})
}
