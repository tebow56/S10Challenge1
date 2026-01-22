const express = require('express');
const router = express.Router();

router.get ('/', (req,res)=> {
    res.send(`<p>Bienvenido a esta página. La hora actual es: ${req.dateType }</p>
        <p> Para ir al enroute pulse <button><a href="/endroute"> aquí </a></button></p>`)
})


module.exports = router;