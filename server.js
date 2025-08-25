const express = require('express');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/api/contact', (req, res) => {
    console.log('Received contact form submission:');
    console.log(req.body);
    res.status(200).send({ message: 'Form submission received successfully.' });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
