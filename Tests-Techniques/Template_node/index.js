const express = require('express')
const cors = require('cors')


const app = express()
// express est un router: un serveur web : gérer les routes

app.use(cors()); // enables ALL domain (for now)

app.use(express.json()) //ce middleware express parse le json envoyé en POST
// pour un formulaire classique le middleware est : express URLencoded
// middleware transformateur de JSON qui se trouverait dans le body


app.all('/*', (req, res, ) => {
  res.status(404).send('je suis la 404')
})
/////////////////////////////////////////////////////////////////////////////////////////////////////

// création du serveur et connexion au port 3000

app.listen(3003, err => {
  // : app.listen(3000, function(err) {
  if(err) {
    console.log('No connexion');
  }
  console.log('Connexion good!');
})

/////////////////////////////////////////////////////////////////////////////////////////////////////
