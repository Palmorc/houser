module.exports = {
  get : (req,res)=>{
    const db = req.app.get('db')
    db.getHouses()
    .then((results) => res.status(200).send(results) )
    .catch(err => {res.status(500).send('Error:', err)})
  }
}
