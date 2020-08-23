const express = require('express');
const path = require('path');

const app = express();
const port = process.env.PORT || 3004;

// middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// routes
app.get('/', (req, res) => res.render('index.html'));

app.listen(port, () => console.log(`App running at http://localhost:${port}`));
