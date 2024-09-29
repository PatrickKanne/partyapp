//require express
const express = require('express')
const app = express()
// require handlebars
const exphbs = require('express-handlebars');
const Handlebars = require('handlebars')
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')

// Use "main" as our default layout
app.engine('handlebars', exphbs.engine({ defaultLayout: 'main', handlebars: allowInsecurePrototypeAccess(Handlebars) }));
// Use handlebars to render
app.set('view engine', 'handlebars');

app.get('/', (req, res) => {
  //res.send('Hello World!');
  res.render('home', { msg: 'Handlebars are Cool!' });
})
 

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`boop app listening on port ${port}`)
})