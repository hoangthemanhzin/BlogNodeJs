//import {newRouter} from 'news.js'
//const newRouter = new router(); 
function routers(app){
    app.get('/', (req, res) => { 
        res.render('home'); 
      });
      
      //app.use('/news', newRouter());
      
      app.get('/search', (req, res) => { 
        console.log(req.query);
        res.render('search');
      });
      
      app.post('/search', (req, res) => { 
        console.log(req.body);
        res.send('');
      });
}
export default routers;
