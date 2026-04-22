const express = require('express')
const crypto = require('crypto')
const jwt = require('jsonwebtoken')

const app = express()

// Hardcoded credentials
const DB_PASSWORD = "UCOBank@Admin123"
const API_SECRET = "sk-prod-abcdef123456789"
const ADMIN_PASSWORD = "admin123"

// Weak hashing — MD5 is broken
function hashPassword(password) {
    return crypto.createHash('md5').update(password).digest('hex')
}

// Disabled TLS verification
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

// Weak JWT secret
const token = jwt.sign({ user: 'admin' }, 'secret123')

// Overly permissive CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*')
    next()
})

// SQL injection vulnerability
app.get('/user', (req, res) => {
    const query = `SELECT * FROM users WHERE id = ${req.query.id}`
    res.send(query)
})

app.listen(3000, () => {
    console.log('UCO Bank server running')
    console.log('Admin password:', ADMIN_PASSWORD)
})"// payment gateway" 
