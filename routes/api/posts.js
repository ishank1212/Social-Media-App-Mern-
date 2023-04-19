const express = require('express');
const router = express.Router();
router.use(express.json())
router.get('/posts', (req,res)=>
{
    res.send('Posts route');
})

module.exports = router;