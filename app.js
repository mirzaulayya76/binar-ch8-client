const express = require('express');
const app = express();
const cors = require('cors');
const apiRouter = require('./server/routes');
const errorHandler = require('./server/middlewares/errorHandler');
const PORT = process.env.PORT || 4000;
const swaggerUI = require('swagger-ui-express');
const swaggerJSON = require('./chapter8-api.json');

// middlewares
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(errorHandler);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(swaggerJSON));

/**
 * @Routes /api
 * entrypoint for all API routes
 */
app.use('/api', apiRouter);
app.get('/login', (req, res) => {
  res.send('halaman login');
});

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
