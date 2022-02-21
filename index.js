require('dotenv').config()
const express = require('express');

const app = express();

app.use(express.json());

app.post('/webhook', (req, res) => {
    console.log("Recebendo WEBHOOK!!!!!!")
    console.log(JSON.stringify(req.body));
    console.log(req.query);

    res.status(200).json();
})

app.listen(process.env.PORT, () => console.log("App running"))
