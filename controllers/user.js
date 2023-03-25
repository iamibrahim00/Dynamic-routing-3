// const { name } = require('ejs');
const User =  require('../models/user');

exports.postUserDetails = async(req,res,next) =>{
    const name = req.body.name
    const email = req.body.email
    const phonenumber = req.body.phonenumber
    const user = {name,email,phonenumber}
    if(user){
      if (!user.phonenumber) {
        return {
          error: 'Bad Data'
        }
      } else {
        return User.create(user)
          .then(data1 => {
              res.status(200).json({newUserDetails : data1})
          })
          .catch(err => {
            return 'error: ' + err
          })
      }
    }
    

}


exports.getUserDetails = (req,res,next)=>{
    return User.findAll()
          .then(data1 => {
            res.status(200).json({data1})
          })
          .catch(err => {
            return 'error: ' + err
          })
   
}

      

exports.updateUser = (req,res,next)=>{
  const id =req.params.id
 
  const updateName = req.body.name
  console.log(updateName)
  const updatedEmail = req.body.email
  const updatedPhonenumber = req.body.phonenumber
 User.findByPk(id)
 .then(user => {
  console.log('Helloooo',user.name)
  user.update(
    {
    
    name : updateName,
    email : updatedEmail,
    phonenumber : updatedPhonenumber
    }

  ).then((user)=>{
    // User.destroy({
    //   where: {
    //     id:user.id+1
    //   }
    // })
    res.status(200).json({user1 : user})
    console.log('hiii',user.name)
  })
 }).catch(err => {
      return 'error: ' + err
    })
       

 }

exports.deleteUserDetails = (req,res,next)=>{
 
  return User.destroy  ({
    where: {
      id: req.params.id
    }
  })
    .then(() => {
        res.status(200).json({success : true})
    })
    .catch(err => {
      return 'error: ' + err
    })  
  
}


