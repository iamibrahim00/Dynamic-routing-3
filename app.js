const path = require('path');

const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/error');
const Expense =require('./models/Expense')
const User = require('./models/User')
const  Try = require('./models/Try')
const sequelize = require('./util/database')
var cors = require('cors')
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');
app.use(cors())

const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const userRoutes = require('./routes/user');
const { name } = require('ejs');

//app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
app.use(userRoutes)

sequelize.sync()
    .then(result =>{
        console.log(result)
        app.listen(3000); 
    })
    .catch(err => {
        console.log(err)
    })











// app.post('/expense/add-expense', async (req,res,next) =>{


//     try{
//     const expense = req.body.expense;
//     const description = req.body.description;
//     const category = req.body.category;

//     const data = await Expense.create({expense :expense,description : description,
//          category: category});
//     res.status(201).json({newExpenseDetails : data})
//     }catch(err){
//         res.status(500).json({
//         error : err
//         })
        
//     }
// })  

// app.get('/expense/get-expense',async(req,res,next)=>{
//     try{
//         const expense = await Expense.findAll();
//         res.status(200).json({allExpense : expense})
//     }catch(err){
//         console.log(err)
//     }
   
// })

// app.patch('/expense/edit-expense') ,async(req,res,next) =>{
//     try{
//         const expense = req.params.id
//         const updatedExpense = req.body.expense;
//         const updatedDescription = req.body.description;
//         const updatedCategory = req.body.category;
//     await Expense.findAll({where : {id : expense}})
//       allExpense.title = updatedExpense
//       allExpense.price = updatedDescription
//       allExpense.description = updatedCategory
//        return allExpense.save()
//     }catch{err =>{
//         console.log(err)
//     }

//     }
// }

// app.delete('/expense/delete-expense/:id',async(req,res,next)=>{
//     try{
//         const expenseId= req.params.id
//         await Expense.destroy({where : {id : expenseId}});
//         res.status(200);
//     }catch(err){
//         console.log(err)
//     }
   
// })


// app.use(errorController.get404);


  

