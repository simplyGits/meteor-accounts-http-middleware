import { Meteor } from 'meteor/meteor'
import { Accounts } from 'meteor/accounts-base'

function parseCookies (str = '') {
	const res = {}
	str.split(/[\s;]+/g).forEach(cookie => {
		const [ name, val ] = cookie.split('=')
		res[name] = val
	})
	return res
}

export default function () {
	return function (req, res, next) {
		const cookies = parseCookies(req.headers.cookie)
		const token = cookies['meteor_login_token']
		if (token == null) {
			next()
			return
		}

		const user = Meteor.users.findOne({
			'services.resume.loginTokens.hashedToken':
				Accounts._hashLoginToken(token),
		}, {
			fields: {
				_id: 1,
			},
		})

		res.connection.userId = user != null ? user._id : undefined
		next()
	}
}
