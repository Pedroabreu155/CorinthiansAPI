const express = require('express')


const routes = express.Router()

routes.get("/titulos", (request, response) => {
  response.json({
    internacionais: {sulamericanos:["Libertadores 2012", "Recopa Sulamericana 2013"], 
    mundiais: ["Mundial 2000", "Mundial 2012"]},
    nacionais: {Brasileirão: ["1990", "1998", "1999", "2005", "2011", "2015", "2017"], 
              Copa_do_Brasil: ["1995", "2002", "2009"], 
              Super_Copa: ["1991"],
              Torneio_Rio_São_Paulo:  ["1950", "1953", "1954", "1966", "2002"]},
    estaduais: {Paulistão: { Quantidade: 30, Anos: ["1914", "1916", "1922", "1923", 
                            "1924", "1928", "1929", "1930", 
                            "1937", "1938", "1939", "1941",
                            "1951", "1952", "1954", "1977",
                            "1979", "1982", "1983", "1988", 
                            "1995", "1997", "1999", "2001", 
                            "2003", "2009", "2013", "2017", 
                            "2018", "2019"]}}
})
})

module.exports = {
  routes: routes
}