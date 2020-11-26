/* eslint-disable no-fallthrough */
/* eslint-disable import/extensions */
import http from 'http';
import expressApp from './app.js';

console.log(process.env.MONGODB_USERNAME);
const port = process.env.PORT || 8000;
expressApp.set('port', port);
const server = http.createServer(expressApp);

/**
 * error hamdler
 */
const errorHandler = (error) => {
  if (error.sycall !== 'listen') {
    throw error;
  }

  const address = server.address();
  const bind = typeof address === 'string' ? `pipe ${address}` : `port ${port}`;
  switch (error.type) {
    case 'EACCESS':
      console.log(`${bind} required elevated previllege`);
      process.exit(1);
    case 'EADRRINUSE':
      console.error('address already in use ');
      process.exit(1);
    default:
      throw error;
  }
};

/**
   * start the server and handle possible errors
   */
server.on('error', errorHandler);
server.on('listening', () => {
  console.log(`=================== SERVER HAS STARTED 🚀 ==================
      => Server is listening on port ${port}`);
});

server.listen(port);
