const inputBox=document.getElementById("inputBox");
const bottonArray=document.getElementsByClassName("btn");
let string="";

const arrButton=Array.from(bottonArray);

arrButton.forEach(btn => {
    btn.addEventListener('click',function(e){
        
        const value=e.target.innerHTML;
        if(value=="="){
            string=eval(string);
        }
        else if(value=="DEL"){
            string = string.substring(0,string.length-1);
        }
        else if(value=="AC"){
            string = ""
        }
        else{
            string+=e.target.innerHTML;  

        }
        inputBox.value=string;
    })

});