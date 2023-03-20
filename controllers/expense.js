const Expense = require('../models/Expense')

exports.postExpense = async (req,res,next) =>{


    try{
    const expense = req.body.expense;
    const description = req.body.description;
    const category = req.body.category;
    const data = await Expense.create({expense :expense,description : description,
         category: category});
    res.status(201).json({newExpenseDetails : data})
    }catch(err){
        res.status(500).json({
        error : err
        })
        
    }
}

exports.getExpense = async(req,res,next)=>{
    try{
        const expense = await Expense.findAll();
        res.status(200).json({allExpense : expense})
    }catch(err){
        console.log(err)
    }
   
}

exports.deleteExpense = async(req,res,next)=>{
    try{
        const expenseId= req.params.id
        await Expense.destroy({where : {id : expenseId}});
        res.status(200).json({success : true})
    }catch(err){
        console.log(err)
    }
   
}

exports.editExpense = (req,res,next) =>{

        const expense = req.params.id
        console.log(expense)
        const updatedExpense = req.body.expense;
        console.log(updatedExpense)
        const updatedDescription = req.body.description;
        const updatedCategory = req.body.category;
  Expense.destroy({where : {id : expense}})
    .then((expense)=>{
        expense.update( {
           expense : updatedExpense,
            description : updatedDescription,
            category : updatedCategory})
      
         return expense.save()

    })
      
    .catch(err =>{
        console.log(err)
    }
    )
    
}