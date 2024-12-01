import express from 'express';
import handlebars from 'express-handlebars';
import _dirname from './utils.js';
import viewRoutes from './routes/view.routes.js';

const app = express();

app.engine('handlebars', handlebars.engine());
app.set('views', _dirname+'/views');
app.set('view engine', 'handlebars');

app.use(express.static(_dirname+'/public'));

app.get('/test-hbs', (req, res) => {
    const userTest = {
        name: "John",
        edad: 30,
        city: "New York"
    };
    res.render("hello",userTest);
});

app.use('/',viewRoutes)

const server = app.listen(8080, () => {
  console.log(`Server running on port ${server.address().port}`);
});