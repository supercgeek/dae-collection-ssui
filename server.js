require('dotenv').config()
const express = require('express')

const app = express()
const Bundler = require('parcel-bundler')
const bundler = new Bundler('src/index.html')
const PORT = process.env.PORT || 3000
const Airtable = require('airtable-node')

const airtable = new Airtable({
  apiKey: process.env.API_KEY
})

app.get('/api', async (req, res) => {

  let data = await airtable
    .base(process.env.BASE)
    .table(process.env.TABLE)
    .list()

  res.json(data)
})

app.get('/api2/:idReference', async (req, res) => {
  let idToLookup  = req.params.idReference
  let searchRes = await airtable
    .retrieve(idToLookup)
    
  res.json(searchRes) 
})


app.use(bundler.middleware())

app.listen(PORT, () => {
  console.log(`listening on the port: http://localhost:${PORT}`)
})
