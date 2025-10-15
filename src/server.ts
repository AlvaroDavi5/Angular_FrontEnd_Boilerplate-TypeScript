import {
	AngularNodeAppEngine,
	createNodeRequestHandler,
	isMainModule,
	writeResponseToNodeResponse,
} from '@angular/ssr/node';
import express from 'express';
import { join } from 'node:path';


const browserDistFolder = join(import.meta.dirname, '../browser');

const expressServer = express();
const angularAppEngine = new AngularNodeAppEngine();

expressServer.set('view engine', 'html');
expressServer.set('views', browserDistFolder);

// ? Serve static files from /browser
expressServer.use(
	express.static(browserDistFolder, {
		maxAge: '1y',
		index: false,
		redirect: false,
	}),
);
// * Example Express Rest API endpoints
// * server.get('/api/**', (req, res) => { });

// NOTE - All regular routes use the Angular engine
expressServer.use((req, res, next) => {
	angularAppEngine
		.handle(req)
		.then((response) =>
			response ? writeResponseToNodeResponse(response, res) : next(),
		)
		.catch(next);
});

if (isMainModule(import.meta.url)) {
	const port = process.env.PORT || 3001;
	expressServer.listen(port, (error) => {
		if (error) {
			throw error;
		}
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

// NOTE - The Express app is exported as request handler, so that it can be used by serverless Functions
export const reqHandler = createNodeRequestHandler(expressServer);
