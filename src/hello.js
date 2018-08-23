// copied from https://www.netlify.com/docs/functions/

exports.handler = function(event, context, callback) {
	callback(null, {
		statusCode: 200,
		body: "Hello, World"
	})
}
