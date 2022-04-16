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

      var x=document.getElementById('s').addEventListener('click',function(){
       
          if(document.getElementById('a').style.display=='block'){
            document.getElementById('a').style.display='none'
          }else{
            document.getElementById('a').style.display='block'

          }
          document.getElementById('b').style.display='none'
      })
     
      var x=document.getElementById('deen').addEventListener('click',function(){
        
        if(document.getElementById('b').style.display=='block'){
            document.getElementById('b').style.display='none'
          }else{
            document.getElementById('b').style.display='block'

          }
          document.getElementById('a').style.display='none'
      })
      var x=document.getElementById('sai').addEventListener('click',function(){
       
            document.getElementById('b').style.display='none'
       
          document.getElementById('a').style.display='none'
      })
     
