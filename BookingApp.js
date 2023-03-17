function saveToLocalStorage(event) {


    event.preventDefault();
    const name= event.target.name.value;

    const email = event.target.email.value;
    const phonenumber = event.target.phonenumber.value;


    const obj={
    name,
    email,
    phonenumber
    }

    axios.post("http://localhost:3000/user/add-user",obj)
    .then((response) => {
        showUserOnScreen(response.data.newUserDetails)
        console.log(response)
    }).catch(err => {
        document.body.innerHTML =document.body.innerHTML + "<h4>Something Went wrong </h4>"
    })
   
  }

  window.addEventListener("DOMContentLoaded", ()=>{
    axios.get("http://localhost:3000/user/get-user")
    .then((response) =>{
      console.log(response)

      for(var i =0; i< response.data.allUsers.length;i++){
       showUserOnScreen(response.data.allUsers[i])
      }
    }).catch((err) => console.log(err))

  })
  
  function showUserOnScreen(obj){
    const parentElement = document.getElementById('listOfitems')
   
    const childNode =`<li id = ${obj.id}> ${obj.name} - ${obj.email} - ${obj.phonenumber}
                      <button onclick = deleteuser('${obj.id}')>Delete</button>
                      <button onclick = edituser('${obj.name}','${obj.email}','${obj.phonenumber}','${obj.id}')>Edit</button></li>`  
                      
     parentElement.innerHTML = parentElement.innerHTML +childNode
  }
  function edituser(name,email,phonenumber,objId){
   //console.log(objId)

    document.getElementById('name').value = name
    document.getElementById('email').value = email
    document.getElementById('phonenumber').value = phonenumber

    deleteuser(objId)
  }

//   function edituser(objId){
//     console.log(objId)
//     axios.delete(`http://localhost:3000/user/edit-user/${objId}`)
//     .then((response)=>{
//       console.log("jjjjjjj")
//       document.getElementById('name').value = obj.name
//       document.getElementById('email').value = obj.email
//       document.getElementById('phonenumber').value = obj.phonenumber
//     }).catch((err) => {   
//       console.log(err)
      
// })
    
//   }

   function deleteuser (objId){
    console.log(objId)
    axios.delete(`http://localhost:3000/user/delete-user/${objId}`)
    .then((response)=>{
      removeUserfromScreen(objId)
    }).catch((err) => {   
                  console.log(err)
                  
   })
   
}

   function removeUserfromScreen(objId){
    const parentNode= document.getElementById('listOfitems')
    const childNodeTobeDeleted = document.getElementById(objId)
    if(childNodeTobeDeleted){
      parentNode.removeChild(childNodeTobeDeleted);
        //childNodeTobeDeleted.remove()
    }

   }


