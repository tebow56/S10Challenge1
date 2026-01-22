const validarHora = (req, res, next) => {
    const now = new Date
    const hours = now.getHours();
    
    if (hours < 12) {
        return res.status(403).send(`<h1>Bienvenido</h1>
            <p>La hora actual es ${req.dateType } Solo puedes entrar a la Ruta final después de las 12 de la mañana</p><button> <a href="/endroute"> aquí </a></button>`)
        
    } else {
        res.send(`<h1>Bienvenido</h1> <p> Esta es la Ruta final</p>`)
    }
    next()
   
}

module.exports = validarHora