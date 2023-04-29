import errorHandler from 'errorhandler';
import dotenv from 'dotenv';
import app from './app';

dotenv.config();

const port = process.env.PORT;
const env = process.env.ENV;

/**
 * Error Handler. Provides full stack
 */
if (env === 'development') {
	app.use(errorHandler());
}


/**
 * Start Express server.
 */
app.listen(port, () => {
	console.log(
		'  App is running at http://localhost:%d in %s mode',
		port,
		env
	);
	console.log('  Press CTRL-C to stop\n');
});
