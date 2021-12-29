const fs = require('fs');
const express = require('express');
const session = require('express-session');
const bodyparser = require('body-parser');
const cookieParser = require('cookie-parser');
const MongoStore = require('connect-mongo')(session);
const config = require('./config');
const db = require('./db');
const router = require('./router');
const logger = require('./utils/logger')(module);
const cors = require('cors');

const createContext = require('./context');
const auth = require('./lib/auth');
const adminRole = require('./models/db_utilities');

// Swagger
const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');
// console.log(swaggerDoc);


const app = express();
app.use(cors(),bodyparser.json({limit: '50mb'}));

db.ready.then(() => {
  const port = config.express.port;

  // basic configuration
  app.set('trust proxy', true);
  app.set('view engine', 'ejs');
  app.use(express.static(config.express.staticFilesPath));
   // app.use(express.static('./public'));

  // for parsing application/x-www-form-urlencoded
  app.use(bodyparser.urlencoded({ extended: true, limit: "500mb" }));
  // for parsing cookies
  app.use(cookieParser());
  // Setup app session
  app.use(session({
    name: 'session',
    secret: 'VcsFa3jI4IN4EEDbGRRo',
    // Forces the session to be saved back to the session store,
    // even if the session was never modified during the request
    resave: true,
    // Forces a session that is "uninitialized" to be saved to the store
    saveUninitialized: false,
    store: new MongoStore({
      mongooseConnection: db.getMongoose().connection,
    }),
    duration: 3 * 60 * 60 * 1000, // how long the session will stay valid in ms
    cookie: {
      path: '/',
      httpOnly: true,
      secure: false,
      ephemeral: true, //cookie expires when the browser closes
      maxAge: 3 * 60 * 60 * 1000 //set the max age in case ephemeral not used
    },
  }));

  // setup authentication
  auth.configureMiddleware(app);

  // create request context
  app.use(createContext);
  // legacy request decorators
  app.use((req, res, next) => {
    /**
     * @deprecated use req.ctx.db
     */
    req.db = db.getMongo();
    req.app_setting_port = port;
    req.myParisite = { left: 'right' }; // WTF??? what is this for???
    next();
  });


  //v1 api routes
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));
  // Set the router entry point
  app.use('/', router);

  // Start the web server.
  var server = app.listen(port, () => logger.info(`Server is listening on http://localhost:${port}`));
  logger.info(`AryaPayRoll sample API Server Listening on http://localhost:${port}/api-docs`);
  // Create Admin Role
  adminRole.createRolePermissions();

  // Start the ssl server.
  const httpsPort = process.env.HTTPS_PORT || null;
  if (httpsPort) {
    const sslKey = process.env.SSL_KEY || '';
    const sslCert = process.env.SSL_CERT || '';
    const sslCa = process.env.SSL_CA || '';

    if (sslKey && sslCert && sslCa) {
      const https = require('https');
      const options = {
        key: fs.readFileSync(sslKey),
        cert: fs.readFileSync(sslCert),
        ca: fs.readFileSync(sslCa)
      };

      server = https.createServer(options, app)
        .listen(httpsPort, () => logger.info(`Server is listening on http://localhost:${httpsPort}`));
    }
  }

});


// setup uncaught exception handler:
process.on('uncaughtException', (err) => {
  logger.error('UNCAUGHT EXCEPTION', err.message);
  logger.error(err.stack);
  process.exit(1);
});