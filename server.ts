import { CommonEngine } from '@angular/ssr';
import { APP_BASE_HREF } from '@angular/common';
import express from 'express';
import { fileURLToPath } from 'node:url';
import { dirname, join, resolve } from 'node:path';
import bootstrap from './src/main.server';


// NOTE - The Express app is exported so that it can be used by serverless Functions
export function app(): express.Express {
	const expressServer = express();
	const angularCommonEngine = new CommonEngine();

	const serverDistFolder = dirname(fileURLToPath(import.meta.url));
	const browserDistFolder = resolve(serverDistFolder, '../browser');
	const indexHtml = join(serverDistFolder, 'index.server.html');

	expressServer.set('view engine', 'html');
	expressServer.set('views', browserDistFolder);

	// ? Serve static files from /browser
	expressServer.get('**', express.static(browserDistFolder, {
		maxAge: '1y',
		index: 'index.html',
	}));
	// * Example Express Rest API endpoints
	// * server.get('/api/**', (req, res) => { });

	// NOTE - All regular routes use the Angular engine
	expressServer.get('**', (req, res, next) => {
		const { protocol, originalUrl, baseUrl, headers } = req;

		angularCommonEngine
			.render({
				bootstrap,
				documentFilePath: indexHtml,
				publicPath: browserDistFolder,
				url: `${protocol}://${headers.host}${originalUrl}`,
				providers: [{ provide: APP_BASE_HREF, useValue: baseUrl }],
			})
			.then((html) => res.send(html))
			.catch((err) => next(err));
	});

	return expressServer;
}

function run(): void {
	const port = process.env.PORT || 3001;

	// NOTE - Start up the Node server
	const server = app();
	server.listen(port, () => {
		console.log(`Node Express server listening on http://localhost:${port}`);
	});
}

run();
