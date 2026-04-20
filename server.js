const express = require('express')
const app = express()
app.get('/', (req, res) => res.send('<h1>🚀 Node.js 앱 배포 성공!</h1>'))
app.listen(3000)
