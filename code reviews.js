const express = require('express');
const bodyParser = require('body-parser');
const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

// Endpoint to analyze code
app.post('/analyze', (req, res) => {
    const code = req.body.code;

    if (!code) {
        return res.status(400).json({ feedback: 'No code provided' });
    }

    // Save code to a temporary file
    const tempFilePath = path.join(__dirname, 'temp_code.py');
    fs.writeFileSync(tempFilePath, code);

    // Execute the code and capture errors
    exec(`python ${tempFilePath}`, (error, stdout, stderr) => {
        if (error) {
            return res.json({ feedback: `Error: ${stderr}` });
        }
        // Optionally delete the temp file after execution
        fs.unlinkSync(tempFilePath);
        res.json({ feedback: `Output: ${stdout}` });
    });
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
