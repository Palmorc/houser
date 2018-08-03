module.exports = {
  get : (req,res)=>{
    console.log(1312321321);
    const db = req.app.get('db')
    db.getHouses()
    .then((results) => res.status(200).send(results) )
    .catch(err => {res.status(500).send('Error:', err)})
  }
}
