const express = require('express')
const router = express.Router()

router.get('/heroes', (req, res) => {
    res.send(200, [
        {"id": 10, "name": "John", "saying": "This is hard" }
    ])
})

module.exports = router