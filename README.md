```javascript
import accounts from 'meteor/simply:accounts-http-middleware'

WebApp.connectHandlers.use(accounts())
WebApp.connectHandlers.use((req, res, next) => {
	console.log(req.connection.userId)
	next()
})
```
