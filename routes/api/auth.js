const express = require('express');
const router = express.Router();
router.use(express.json())
router.get('/auth', (req,res)=>
{
    res.send('auth route');
})

module.exports = router;