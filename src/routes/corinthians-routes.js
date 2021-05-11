const express = require('express')
const routes = express.Router()

const {
  getAllChampionships
} = require('../controllers/championshipsController')

routes.get("/titulos", getAllChampionships)

module.exports = {
  routes: routes
}