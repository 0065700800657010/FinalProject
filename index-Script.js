// JavaScript source code
var name="";
var coin=1000000;
function start()
{
    console.log(name);
    if(localStorage.getItem("name")!=null)
        name=localStorage.getItem("name");
    if(localStorage.getItem("coin")!=null)
        coin=localStorage.getItem("coin");
    if(name==""){        
        prompt1();              
        while(name==""){
            window.alert("請輸入名字");
            prompt1();
        }            
    }         
    document.getElementById("Hello").innerHTML="Hello,"+name+":";
    document.getElementById("Coin").innerHTML="$"+coin;
    localStorage.setItem("name",name);    
    localStorage.setItem("coin",coin);
    document.getElementById("End").addEventListener("click",endgame,false);
}
function endgame()
{
    localStorage.clear();
    window.alert("Thanks!");
    window.close();
}
function prompt1()
{    
    name=window.prompt("Please enter your name.");     
}
window.addEventListener("load",start,false);