console.log('Hello World!');

console.log(2*7);

var btnDark = document.getElementById('btnDark');
    btnDark.addEventListener('click',function(){
            document.body.style.backgroundColor = "black";
            console.log("Mudando para Dark Mode")
    });

var btnLight = document.getElementById('btnLight');
    btnLight.addEventListener('click',function(){
            document.body.style.backgroundColor = "white";
            console.log("Mudando para Light Mode")
    });
