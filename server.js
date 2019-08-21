const express = require('express');
const path = require('path');

const app = express();

app.use(express.static('./dist/MoodImprover'));

app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, '/dist/MoodImprover/index.html'));
});

app.listen(process.env.PORT || 8080); 