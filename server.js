const crypto = require('crypto')
const express = require('express')
const app = express()

// Hardcoded credentials
const DB_PASSWORD = "UCOBank@Admin123"
const API_KEY = "sk-prod-abcdef123456789"

// Weak hashing
const hash = crypto.createHash('md5')
hash.update('user_password')

// Disabled TLS
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

app.listen(3000)