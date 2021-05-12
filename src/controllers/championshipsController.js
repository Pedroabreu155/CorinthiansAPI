const firebase = require('../database')
const firestore = firebase.firestore()

const Championships = require('../models/Championships')

const getAllChampionships = async (request, response) => {
  try {
    const championships = await firestore.collection('titulos')
    const data = await championships.get()
    const allChampionships = []

    if(data.empty){
      response.status(200).send([])
    } else{
      data.forEach(doc => {
        const championships = new Championships(
          doc.data().estaduais,
          doc.data().internacionais,
          doc.data().nacionais,

        )
        
        allChampionships.push(championships)
      })
      
      response.send(allChampionships)
    }

  } catch (error) {
    response.status(400).send(error.message)
  }
}

module.exports = {
  getAllChampionships
}