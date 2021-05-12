const firebase = require('../database')
const firestore = firebase.firestore()

const TopScorers = require('../models/TopScorers')

const getAllTopScorers = async (request, response) => {
  try {
    const topScorers = await firestore.collection('artilheiros')
    const data = await topScorers.get()
    const allTopScorers = []

    if(data.empty){
      response.status(200).send([])
    } else{
      data.forEach(doc => {
        const topScorers = new TopScorers(
          doc.data().artilheiros,
          doc.data().observacoes
        )
        
        allTopScorers.push(topScorers)
      })
      
      response.send(allTopScorers)
    }

  } catch (error) {
    response.status(400).send(error.message)
  }
}

module.exports = {
  getAllTopScorers
}