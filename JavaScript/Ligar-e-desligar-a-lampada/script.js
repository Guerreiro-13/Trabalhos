
function turnOnOrOff(){

    let img = document.getElementById("img");
    let HtmlBody = document.body
    if (img.src.match("OFFLampada.jpg")){
        img.src = "ONLampada.jpg"
        HtmlBody.style.background= "White"
        HtmlBody.style.color="Black"
    }
        
    else{
        HtmlBody.style.background= "Black"
        HtmlBody.style.color="White"
        img.src = "OFFLampada.jpg"
    }
        
}