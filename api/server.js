const express = require('express');
const path = require('path');
const fetch = require('node-fetch');
const https = require('https');
const app = express();
const port = 3000;

// Disable certificate verification
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

// Serve static files from public directory
app.use(express.static(path.join(__dirname, '../public')));

// Verify token endpoint
app.get('/api/verify', async (req, res) => {
    const token = req.query.token;
    if (!token) {
        return res.status(400).json({ valid: false, message: 'Token is required' });
    }

    try {
        const response = await fetch(`https://auth.itrrc.com/verify?token=${token}`, {
            agent: new https.Agent({
                rejectUnauthorized: false
            })
        });
        console.log(`url = https://auth.itrrc.com/verify?token=${token}`);
        const data = await response.json();
        console.log(data);
        res.json(data);
    } catch (error) {
        console.error('Verification error:', error);
        const errorMessage = error.code === 'CERT_HAS_EXPIRED' 
            ? 'Certificate verification failed'
            : 'Verification failed';
        res.status(500).json({ valid: false, message: errorMessage });
    }
});

// Serve index.html for root route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Serve success.html for root route
app.get('/success', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'success.html'));
});

// Handle all other routes by serving index.html
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
