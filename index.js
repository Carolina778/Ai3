'use strict';

  require('dotenv').config()

  var fs = require('fs'),
      path = require('path'),
      http = require('http');
  
  //cors---------------------------------------
  var cors = require('cors')
  
  const corsOpts = {
     
    origin: '*',
    
    methods: [
      'GET',
      'POST',
      'PUT',
      'DELETE'
    ],
  
    allowedHeaders: [
      'X-Requested-With',
      'Content-Type',
      'Authorization',
      
    ]
  
  };

//moongoose connection-------------------------
const auth = require('./controllers/auth')

const Session = require('express-session'),
  mongoose = require('mongoose'),
  MongoStore = require('connect-mongo')(Session);

mongoose.connect(
  process.env.DB_CONNECTION,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  },
  () => {
    console.log('Conectado à base de dados')
  });

var connection = new MongoStore({
  autoRemove: 'native',
  secret: process.env.sessionSecret,
  mongooseConnection: mongoose.createConnection(
    process.env.DB_CONNECTION,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
    }),
  collection: 'sessions'
});

var sess = {
  genid: function (req) {
    return req.headers.authorization // use UUIDs for session IDs
  },

  secret: process.env.sessionSecret,
  name: 'userSession',
  resave: false,
  saveUninitialized: false,
  rolling: false,
  store: connection,
  unset: 'destroy',
  cookie: {
    secure: true,
    maxAge: 60 * 60 * 100
  }
}

var app = require('connect')();
var swaggerTools = require('swagger-tools');
var jsyaml = require('js-yaml');
var serverPort = 4000;

var cache = require('cache-control');


// swaggerRouter configuration
var options = {
  swaggerUi: path.join(__dirname, '/swagger.json'),
  controllers: path.join(__dirname, './controllers'),
  useStubs: process.env.NODE_ENV === 'development' // Conditionally turn on stubs (mock mode)
};

// The Swagger document (require it, build it programmatically, fetch it from a URL, ...)
var spec = fs.readFileSync(path.join(__dirname, 'api/swagger.yaml'), 'utf8');
var swaggerDoc = jsyaml.safeLoad(spec);

// Initialize the Swagger middleware
swaggerTools.initializeMiddleware(swaggerDoc, function (middleware) {

  //CORS
  app.use(cors(corsOpts));
  // Interpret Swagger resources and attach metadata to request - must be first in swagger-tools middleware chain
  app.use(middleware.swaggerMetadata());

  //SESSION
  app.use(Session(sess));

   // Provide the security handlers
   app.use(middleware.swaggerSecurity({
    APIKey: auth.AuthVerification
  }));

  // Validate Swagger requests
  app.use(middleware.swaggerValidator());

  //???
  // Route validated requests to appropriate controller
  app.use(middleware.swaggerRouter(options));

  // Serve the Swagger documents and Swagger UI
  app.use(middleware.swaggerUi());

  // Start the server
  http.createServer(app).listen(serverPort, function () {
    console.log('Your server is listening on port %d (http://localhost:%d)', serverPort, serverPort);
    console.log('Swagger-ui is available on http://localhost:%d/docs', serverPort);
  });

});
