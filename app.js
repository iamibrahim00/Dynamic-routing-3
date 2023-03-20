const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');
const errorController = require('./controllers/error');
const Expense =require('./models/Expense')
const User = require('./models/User')
const sequelize = require('./util/database')
const app = express();

var cors = require('cors')

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cors())

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
const expenseRoutes = require('./routes/expense')
const { name } = require('ejs');

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(userRoutes);
app.use(expenseRoutes)


// app.use('/user/update-user/:id',(req,res,next)=>{
//     const id = req.params.id
//     User.update({where :{id :id}}) .then(user =>{
//         user.update(
//            {
//                name : upadtename,
//                email : updateemail,
//                phonenumber : updatenumber
//            }
//         )         
//                .catch(err => console.log(err))
           
//        })
// })
app.use(errorController.get404);


sequelize.sync()
    .then(result =>{
        console.log(result)
        app.listen(3000); 
    })
    .catch(err => {
        console.log(err)
    })














  

