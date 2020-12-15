const express = require('express')
const app = express()
const bodyparser = require('body-parser')
 
const ObjectId = require('mongodb').ObjectID
 
const MongoClient = require('mongodb').MongoClient
const uri = "mongodb+srv://ppaulo:FGrG274UolzDSj4O@cluster0.kbe5i.mongodb.net/crud?retryWrites=true&w=majority";
 
MongoClient.connect(uri, (err, client) => {
  if (err) return console.log(err)
  db = client.db('crud')
 
  app.listen(3000, () => {
    console.log('Server running on port 3000')
  })
})
 
app.use(bodyparser.urlencoded({ extended: true}))
 
app.set('views', './views');
app.set('view engine', 'ejs')
 
app.get('/', function(req, res){
    res.render('index.ejs');
});
app.get('/', (req, res) => {
  var cursor = db.collection('usuario').find()
})
app.get('/show', (req, res) => {
  db.collection('usuario').find().toArray((err, results) => {
      if (err) return console.log(err)
      console.log(results);
      res.render('show.ejs', { data: results })

  })
})
 
app.post('/show', (req, res)=>{
    //criar a coleção “data”, que irá armazenar nossos dados
    db.collection('usuario').save(req.body, (err, result) => {
        if (err) return console.log(err)
     
        console.log('Salvo no Banco de Dados')
        res.redirect('/show')
      })
});

app.get('/showProduto', (req, res) => {
  db.collection('produto').find().toArray((err, results) => {
      if (err) return console.log(err)
      console.log(results);
      res.render('showProduto.ejs', { data: results })

  })
})
 
app.post('/showProduto', (req, res)=>{
    //criar a coleção “data”, que irá armazenar nossos dados
    db.collection('produto').save(req.body, (err, result) => {
        if (err) return console.log(err)
     
        console.log('Salvo no Banco de Dados')
        res.redirect('/showProduto')
      })
});

app.route('/edit/:id')
.get((req, res) => {
  var id = req.params.id
 
  db.collection('usuario').find(ObjectId(id)).toArray((err, result) => {
    if (err) return res.send(err)
    res.render('edit.ejs', { data: result })
  })
})
.post((req, res) => {
  var id = req.params.id
  var name = req.body.name
  var surname = req.body.surname
 
  db.collection('usuario').updateOne({_id: ObjectId(id)}, {
    $set: {
      name: name,
      surname: surname
    }
  }, (err, result) => {
    if (err) return res.send(err)
    res.redirect('/show')
    console.log('Atualizado no Banco de Dados')
  })
})

app.route('/editProduto/:id')
.get((req, res) => {
  var id = req.params.id
 
  db.collection('produto').find(ObjectId(id)).toArray((err, result) => {
    if (err) return res.send(err)
    res.render('editProduto.ejs', { data: result })
  })
})
.post((req, res) => {
  var id = req.params.id
  var nome = req.body.nome
  var preco = req.body.preco
  var quantidade = req.body.quantidade
  var data = req.body.data
  var cor = req.body.cor
 
  db.collection('produto').updateOne({_id: ObjectId(id)}, {
    $set: {
      nome: nome,
      preco: preco,
      quantidade: quantidade,
      data: data,
      cor: cor,
    }
  }, (err, result) => {
    if (err) return res.send(err)
    res.redirect('/showProduto')
    console.log('Atualizado no Banco de Dados')
  })
})

app.route('/delete/:id')
.get((req, res) => {
  var id = req.params.id
 
  db.collection('usuario').deleteOne({_id: ObjectId(id)}, (err, result) => {
    if (err) return res.send(500, err)
    console.log('Deletado do Banco de Dados!')
    res.redirect('/show')
  })
})

app.route('/deleteProduto/:id')
.get((req, res) => {
  var id = req.params.id
 
  db.collection('produto').deleteOne({_id: ObjectId(id)}, (err, result) => {
    if (err) return res.send(500, err)
    console.log('Deletado do Banco de Dados!')
    res.redirect('/showProduto')
  })
})