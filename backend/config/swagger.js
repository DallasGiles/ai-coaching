const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Marathon Cycling Coach API',
      version: '1.0.0',
      description: 'API for Marathon and Cycling Coach Application',
    },
    servers: [
      {
        url: 'http://localhost:5000', // Replace with your base URL
        description: 'Local server',
      },
    ],
  },
  apis: ['./routes/*.js'], // Points to where your route files are located
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;