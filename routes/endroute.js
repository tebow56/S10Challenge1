const express = require('express');
const router = express.Router();

router.get ('/endroute', (req,res)=> {
    res.send('Esta es la endroute')
})

module.exports = router;