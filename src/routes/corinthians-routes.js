const express = require('express')
const routes = express.Router()

const {getAllChampionships} = require('../controllers/championshipsController')

const { getAllTopScorers } = require('../controllers/topScorersController')

routes.get("/titulos", getAllChampionships)
routes.get("/artilheiros", getAllTopScorers)

module.exports = {
  routes: routes
}