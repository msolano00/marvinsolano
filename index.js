'use strict'

const express = require('express');
const app = express();

app.get('/', (req,res) => {
	res.status(200).send('Ok');
})

app.listen(3000, () => console.log(`Server listening on port 3000`))
