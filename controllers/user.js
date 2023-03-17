const User =  require('../models/User');

exports.postUserDetails = async (req,res,next) =>{

    if(!req.body.phonenumber){
        throw new Error('Phone Number is mandatory')
    }
    try{
    const name = req.body.name;
    const email = req.body.email;
    const phonenumber = req.body.phonenumber;
    const user = new User(null, name, email, phonenumber);
    const data = await User.create({name :name,email : email,
         phonenumber: phonenumber});
    res.status(201).json({newUserDetails : data})
    }catch(err){
        res.status(500).json({
        error : err
        })
        
    }
}


exports.getUserDetails = async(req,res,next)=>{
    try{
        const users = await User.findAll();
        res.status(200).json({allUsers : users})
    }catch(err){
        console.log(err)
    }
   
}

exports.deleteUserDetails = async(req,res,next)=>{
    try{
        const uId = req.params.id
        await User.destroy({where : {id : uId}});
        res.status(200).json({success : true})
    }catch(err){
        console.log(err)
    }
   
}

exports.editUserDetails = (req,res,next) =>{
  
    const objId = req.body.id;
    console.log(objId)
    const updatedName = req.body.name;
    console.log(updatedName)
    const updatedEmail= req.body.email;
    const updatedPhoneNumber = req.body.phonenumber;

    User.findAll({where : {id : objId}}).then(user =>{
        user.name = updatedName
      user.email = updatedEmail
      user.phonenumber= updatedPhoneNumber
     return user.save()
    })
}