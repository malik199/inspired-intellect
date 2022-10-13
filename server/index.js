const express = require('express');
const moviejson = require('./movie-files.json');
const cors = require('cors');
const app = express();
const port = 3000;



app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(cors())

app.get('/api/movies', cors(), async (reg, res) => {
    res.status(200).json(moviejson);
})

app.listen(port, ()=> {
    console.log(`listening to malik's port on port: ${port}...`)
})

