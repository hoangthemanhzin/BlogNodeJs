//import library
//import react from 'react';
import { engine } from 'express-handlebars';
import express from 'express';
import morgan from 'morgan';
import { dirname } from 'path';
import path from 'path';
import routers from './routes/index.js';


//Write code here : 
const app = express();
const port = 3000;
const __dirname = path.resolve();
// HTTP logger
app.use(express.json());
app.use(express.urlencoded({
  extended: true
}));
//app.use(morgan('combined'))
// Template engine 
app.engine('.hbs', engine({extname: '.hbs'}));
app.set('view engine', '.hbs');
//app.set('views', './views');
app.set('views', path.join(__dirname, 'src/resource/views'));
console.log(path.join(__dirname, 'src/public')); 

//Render app : 
routers(app);


//Static and SCSS 
app.use(express.static(path.join(__dirname, 'src/public')))
//================================================
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})