const express = require ('express')
const app = express ()
const indexRouter = require('./routes/index.js');
const endrouteRouter = require('./routes/endroute.js');
const horaMiddleware = require('./middleWares/horaMiddleware.js'); 
const validarHora = require ('./middleWares/validarHora.js')


app.use (horaMiddleware)
app.use (indexRouter);
app.use (validarHora, endrouteRouter);






app.use((req, res) => {
  res.status(404).send('<h1>pagina no encontrada</h1>');
});


app.listen (3000, ()=>{
    console.log('este servidor está escuchando en http://localhost:3000')
})