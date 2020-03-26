const express = require('express');
const cors = require('cors');
const routes = require('./app/routes');
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);


const PORT = process.env.PORT || 3333;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});