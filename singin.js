if(JSON.parse(localStorage.getItem('usercollection'))!==null){
    sai=JSON.parse(localStorage.getItem('usercollection'))
}else{
    sai=[]
}

function saveuser(){
   var username =  {
       f :document.getElementById('fname').value,
     l :document.getElementById('lname').value,
     e :document.getElementById('email').value,
     p :document.getElementById('Password').value}
     sai.push(username)
     localStorage.setItem('usercollection', JSON.stringify(sai))
     console.log(sai)
}