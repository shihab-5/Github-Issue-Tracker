document.getElementById("signinbtn").
addEventListener('click',function(){
    const input=document.getElementById('input')
    const pass=document.getElementById('pass')
    if(input.value=="admin"){
        alert("correct username")
    }
    else{
        alert('wrong');
        return;
    }
    if(pass.value=='admin123'){
      window.location.href='main.html'
    }
    else{
        alert("wrong password");
        return;
    }

})