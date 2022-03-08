const express = require('express')
const res = require('express/lib/response')
const app = express()

// Importando Controller para renderizar cartão

const getInfo = require('./controller')

// Inicializando Pug
app.set('view engine', 'pug')
app.set('views', `${__dirname}/views`)

app.use(express.static(`${__dirname}/views`))

// TESTE 1


app.get('/', (req, resp)=>{
	resp.status(200).render('overview')
})	

app.get('/base', getInfo)


// SERVER 

app.listen(8000, ()=>{
	console.log('App running on port 8000...')
})